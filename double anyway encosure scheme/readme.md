# Double Anyway Encosure Scheme (AdES)

This encosure scheme uses the sentence "aes is anyway" with formatting to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

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

The body dictates the case of the letters in the sentence "aes is anyway".

| bit | case      |
| --- | --------- |
| 0   | uppercase |
| 1   | lowercase |

If the word only contains one byte, then the first letter is switched.

The bits control each letter like this:

| letter | bit |
| ------ | --- |
| A      | on if word contains only one byte |
| E      | 6   |
| S      | 7   |
| I      | 8   |
| S      | 9   |
| A      | 10  |
| N      | 11  |
| Y      | 12  |
| W      | 13  |
| A      | 14  |
| Y      | 15  |

For example, "A" would be:
- 65 in ASCII
- 01000001 in binary
- Body: 01, Tail: 000001
- Only 1 byte
- Letters: `AeS IS ANYWAY`
- Prefixes & suffixes: `*` ` ` ` `
- Encoded as `*AeS* IS ANYWAY`

# Escaped AdES (EAdES)

There is an escaped version of AES that adds escaped stars before and after each word.
It doesn't get rid of formatting.

The decode step should ignore any `\*` character sequences to work in all places.

This is done to make this easily copyable from places that use markdown formatting (like Discord).

For example, "A" would be:
- Encoded in AgES as `*aES* IS ANYWaY`
- Escape the stars: `*aES* IS ANYWaY` -> `\**aES\** IS ANYWaY`


## Examples

### Hello, world!

The string "Hello, world!" would look like:
```
He: *aeS* *IS* **AnYWaY**
ll: aeS ***IS*** **anYwaY**
o,: aES ***is*** **anYwaY**
 w: ***aeS*** *IS* ***ANYwAY***
or: **aeS** is ***anYwaY***
ld: aeS *IS* **anYwaY**
!: *AES* IS **ANYWAY**
```

Here's how it would look like in EAdES:
```
He: \**aeS*\* \**IS*\* \*\***AnYWaY**\*\*
ll: aeS \*\*\****IS***\*\*\* \*\***anYwaY**\*\*
o,: aES \*\*\****is***\*\*\* \*\***anYwaY**\*\*
 w: \*\*\****aeS***\*\*\* \**IS*\* \*\*\****ANYwAY***\*\*\*
or: \*\***aeS**\*\* is \*\*\****anYwaY***\*\*\*
ld: aeS \**IS*\* \*\***anYwaY**\*\*
!: \**AES*\* IS \*\***ANYWAY**\*\*
```

The characters at the start of every row aren't present in actual encoded data.
