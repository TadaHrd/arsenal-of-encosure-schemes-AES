# Grand Encosure Scheme (GES)

This encosure scheme uses AES (Anyway Encosure Scheme), EES (Emoji Encosure Scheme), and BES (Bussin Encosure Scheme) to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

The data is split into chunks of 16 bytes.

Each chunk has its metadata (also referred to as a seed), which is any 16-bit integer (chosen randomly) encoded as such:
- Bit 0-7: AES
- Bit 7-11: BES (partial, no character alternatives)
- Bit 11-15: EES (partial, which means encoding only half a byte)

Every byte of data either adds itself to or subtracts itself from the last byte based on the metadata. These operation are wrapping, which means `0 - 1 = 255` and `255 + 1 = 0`. The last byte is zero for processing the first byte.

Each bit in the metadata corresponds to a byte of data. The MSb (most significant bit) corresponds to the first byte.

| bit | operation   |
| --- | ----------- |
| 0   | addition    |
| 1   | subtraction |

This is how zeroed metadata would look:
```
ANYWAY // 0 in AES
nocap  // 0 in partial BES
😁     // 0 in partial EES
```

Note that the `// ...` comments don't appear in actual encoded data.

Each byte of data is randomly encoded to either AES, EES, or BES with a seperator.

For example, "A" would be:
- 65 in ASCII
    - (AES: `*ANYWaY*`, EES: `👽😄`, BES: `sus bussin`)
- Random metadata seed: `1111_1111_1111_1111`
- Perform wrapping subtraction: `0 - 65 (wrapping) = (0 - 65 + 256) % 256 = 191`
- Encode to one of: AES: `***anywAy***`, EES: `🥽📣`, BES: `finna smh`
- Metadata: `***anyway*** smh 📣`
- Any one of: `***anyway*** smh 📣 ***anywAy***`, `***anyway*** smh 📣 🥽📣`, `***anyway*** smh 📣 finna smh`

# Escaped GES (EGES)

AES has an escaped version (EAES). This encosure scheme escapes AES bits if it's escaped to maintain ease of use.

## Examples

### Hello, world!

The string "Hello, world!" might look like:
```
META: **aNYWaY** rn 🔦
H: finna fr
e: ***ANyWaY***
l: ***aNYway***
l: nah rn
o: **ANYWay**
,: **anYway**
 : gon bet
w: nah idc
o: gon idk
r: 🦷👽
l: gon nocap
d: 😘🤖
!: 🤖🦠
```

Here's how it might look like in EGES:
```
META: \**AnYWay*\* finna 🐢
H: 👽🎨
e: \*\*\****ANYway***\*\*\*
l: 🗯🕙
l: bet rn
o: aNywaY
,: 💰😂
 : fr nocap
w: \**AnYWAY*\*
o: \*\***AnyWAy**\*\*
r: 😍💯
l: aNyWAy
d: Anyway
!: \*\*\****aNyWay***\*\*\*
```

The characters at the start of every row aren't present in actual encoded data.