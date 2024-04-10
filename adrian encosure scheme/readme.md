# Adrian Encosure Scheme (AgES)

This encosure scheme uses the sentence "adrian je gej" with formatting to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.

Every word (2 bytes) has 2 parts:
- A tail (bits 0-5)
- A body (bits 6-15)

The tail dictates how many stars come before and after the body.

| bit 0 | bit 1 | prefix | suffix |
| ----- | ----- | ------ | ------ |
| 0     | 0     |        |        |
| 1     | 0     | *      | *      |
| 0     | 1     | **     | **     |
| 1     | 1     | ***    | ***    |

The body dictates the case of the letters in the sentence "adrian je gej".

| bit | case      |
| --- | --------- |
| 0   | uppercase |
| 1   | lowercase |

If the word only contains one byte, then the first letter is switched.

The bits control each letter like this:

| letter | bit |
| ------ | --- |
| A      | on if word only contains one byte |
| D      | 6   |
| R      | 7   |
| I      | 8   |
| A      | 9   |
| N      | 10  |
| J      | 11  |
| E      | 12  |
| G      | 13  |
| E      | 14  |
| J      | 15  |

For example, "A" would be:
- 65 in ASCII
- 01000001 in binary
- Body: 01, Tail: 000001
- Only 1 byte
- Letters: `adRIAN JE GEJ`
- Prefixes & suffixes: `*` ` ` ` `
- Encoded as `adRIAN JE *GEJ*`

# Escaped AES (EAgES)

There is an escaped version of AES that adds escaped stars before and after each word.
It doesn't get rid of formatting.

The decode step should ignore any `\*` character sequences to work in all places.

This is done to make this easily copyable from places that use markdown formatting (like Discord).

For example, "A" would be:
- Encoded in AgES as `aDRIAN JE *GeJ*`
- Escape the stars: `aDRIAN JE *GeJ*` -> `aDRIAN JE \**GeJ\**`


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