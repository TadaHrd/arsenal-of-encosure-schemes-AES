# Shuffle Encosure Scheme (SES)

This encosure scheme shuffles the input text in such a way that the output string contains the shuffle key without additional metadata (except escape characters).

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

The encosure of this scheme is in the shuffling of text.

Order of operations:
1. [Escaping characters](#escaping-characters)
2. [Calculating the seed](#calculating-the-seed)
3. [Shuffling the text](#shuffling-the-text)
4. [Escaping for markdown](#escaping-for-markdown)

The steps are run backwards when decoding.

## Escaping characters

ASCII characters 10 (LF), 32 (Space), 33-126 (printables) are not escaped.

The rest are escaped as such:

| Byte range                   | Escape character and value |
| ---------------------------- | -------------------------- |
| 0-8                          | "@" + 71-19 (+71)          |
| 9                            | "$" + 126 ("\|")           |
| 11-31                        | "@" + 32-52 (+21)          |
| 36 ("$")                     | "@" + 68 ("D")             |
| 64 ("@")                     | "$" + 65 ("A")             |
| **32-126 (except 36 & 64)**  | *not escaped*              |
| 127-141                      | "@" + 53-67 (-74)          |
| 142-143                      | "@" + 69-70 (-73)          |
| 144-190                      | "@" + 80-126 (-64)         |
| 191-222                      | "$" + 32-63 (-159)         |
| 222-255                      | "$" + 66-98 (-157)         |

## Calculating the seed

The seed is based on the values of the letters, not the order, and the length of the escaped text.
It is the same even when the text is shuffled, so the seed is identical even when the text is shuffled.

The seed is equal to the length of text + the sum of all bytes, all multiplied by 81839, wrapped to an unsigned 32 bit integer.

```text
seed = ((text length + sum of all bytes) * 81839) % (2 ** 32)
```

## Shuffling the text

### RNG

The seed is fed into a mulberry32 algorithm, which is a seeded RNG. 
This seed is the initial internal state.

Every time the RNG is called, the following happens:
1. the internal state is advanced:
    ```text
    state = (state + 0x6d2b79f5) % (2 ** 32)
    ```
2. the random number is calculated (`mod` being the modulo of the result)
    ```text
    num = ( (state ^ (state >> 15)) * (state | 1) ) % (2 ** 32)
    num ^= ( (num ^ (num >> 7)) * (num | 61) ) % (2 ** 32)
    num = (num ^ (num >> 14)) % mod
    ```

### Actual shuffling

The text is shuffled via a Fisher-Yates algorithm:
1. Loop through the list backwards, excluding the very first byte.
2. Use the mulberry32 RNG generator to come up with a new index.
3. Swap the 2 bytes at those indices.

Deshuffling is the same process, but backwards.

## Escaping for markdown

Those characters are escaped by adding a backslash in front: `\`, `*`, `#`, `_`, `\``, `[`, `]`, `-`, `+`, `.`, `>`

Consecutive spaces are escaped by adding a backslash before them (not the first one).

Unlike some other schemes, this scheme's escaping is symmetrical, meaning it has to be checked even when decoding. The decoder unescapes if escaping is turned on.

## Examples

### Hello, world!

```
wlH!relodl ,o
```

### Russian Hello, world! (Привет, мир!)

```
$@_$2@6$1@x$1@r$1@u$2@8, $1@|$1@x$2@6!
```

As you can see, unicode characters are an issue in this scheme.
