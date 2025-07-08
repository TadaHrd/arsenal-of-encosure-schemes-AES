# Ook Encosure Scheme (OES)

This encosure scheme uses the word "Ook" with punctuation and capitalization to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

Each byte has 2 parts:
- 1st Nibble (0-3)
- 2nd Nibble (4-7)

Every nibble has 2 parts:
- A tail (bits 0-1)
- A body (bits 2-3)

The tail dictates the punction after Ook.

| bit 0 | bit 1 | punctuation |
| ----- | ----- | ----------- |
| 0     | 0     |             |
| 1     | 0     | .           |
| 0     | 1     | ?           |
| 1     | 1     | !           |

The body dictates the case of the letters in the the `ok` of `Ook`.

| bit | case      |
| --- | --------- |
| 0   | uppercase |
| 1   | lowercase |

The bits control the letters like this:

| letter | bit              |
| ------ | ---------------- |
| O      | not controlled   |
| o      | 0                |
| k      | 1                |

For example, "A" would be:
- 65 in ASCII
- `01000001` in binary
- Split it into nibbles: `0100 0001`
- Encoded as: `OOK. OOk`

## Examples

### Hello, world!

The string "Hello, world!" would look like:
```
H: OOK. OOK?
e: OoK. OOk.
l: OoK. OOK!
l: OoK. OOK!
o: OoK. Ook!
,: OoK OOK!
 : OoK OOK
w: Ook. Ook.
o: OoK. Ook!
r: Ook. OoK
l: OoK. OOK!
d: OoK. OOK.
```

The characters at the start of every row aren't present in actual encoded data.