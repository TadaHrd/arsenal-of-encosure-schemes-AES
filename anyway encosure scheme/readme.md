# Anyway Encosure Scheme (AES)

This encosure scheme uses the word "anyway" with formatting to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.

Every byte has 2 parts:
- A tail (bits 0-1)
- A body (bits 2-7)

The tail dictates how many stars come before and after the body.

| bit 0 | bit 1 | prefix | suffix |
| ----- | ----- | ------ | ------ |
| 0     | 0     |        |        |
| 1     | 0     | *      | *      |
| 0     | 1     | **     | **     |
| 1     | 1     | ***    | ***    |

The body dictates the case of the letters in the word "anyway".

| bit | case      |
| --- | --------- |
| 0   | uppercase |
| 1   | lowercase |

The bits control each letter like this:

| letter | bit |
| ------ | --- |
| A      | 2   |
| N      | 3   |
| Y      | 4   |
| W      | 5   |
| A      | 6   |
| Y      | 7   |

For example, "A" would be:
- 65 in ASCII
- 01000001 in binary
- Body: 010000, Tail: 01
- Letters: `ANYWaY`
- Prefix & suffix: `*`
- Encoded as `*ANYWaY*`

# Escaped AES (EAES)

There is an escaped version of AES that adds escaped stars before and after each word.
It doesn't get rid of formatting.

The decode step should ignore any `\*` character sequences to work in all places.

This is done to make this easily copyable from places that use markdown formatting (like Discord).

For example, "A" would be:
- Encoded in AES as `*ANYWaY*`
- Escape the stars: `*ANYWaY*` -> `\**ANYWaY*\*`


## Examples

### Hello, world!

The string "Hello, world!" would look like:
```
H: AnYWaY
e: *aNYwaY*
l: anYwaY
l: anYwaY
o: ***anYwaY***
,: anYwAY
 : ANYwAY
w: ***aNywaY***
o: ***anYwaY***
r: **ANywaY**
l: anYwaY
d: aNYwaY
!: *ANYwAY*
```

Here's how it would look like in EAES:
```
H: AnYWaY
e: \**aNYwaY*\*
l: anYwaY
l: anYwaY
o: \*\*\****anYwaY***\*\*\*
,: anYwAY
 : ANYwAY
w: \*\*\****aNywaY***\*\*\*
o: \*\*\****anYwaY***\*\*\*
r: \*\***ANywaY**\*\*
l: anYwaY
d: aNYwaY
!: \**ANYwAY*\*
```

The characters at the start of every row aren't present in actual encoded data.