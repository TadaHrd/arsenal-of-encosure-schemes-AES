# Christmas Encosure Scheme (ChES)

This encosure scheme uses Christmas emojis (🎄 🥔 🎁 ❄️ ⛄ 🔔 🕯️) to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

1. Each byte is split into bits.
2. Bytes are chunks, which are separated by 🎄 emojis.
    - NOTE: it can be on the start, but it CAN'T be on the end of the encoded string.
3. Each bit is either a potato 🥔 (if 0) or a present 🎁 (if 1)
4. If the leading (most significant) bits are zero, you can omit them.
5. If the leading bits match the ones in the table below, you omit them and add the emoji(s) somewhere (including start and end) in the chunk (randomly).

| Leading bits | Emojis  |
| ------------ | ------- |
| 0100         | ❄️      |
| 0101         | ⛄      |
| 0110         | 🔔      |
| 0111         | 🕯️      |
| 100          | 🕯️ + 🕯️ |
| 101          | 🔔 + ⛄ |
| 110          | 🔔 + ❄️ |
| 111          | 🕯️ + 🔔 |

For example, to turn `A` into ChES:
1. Turn it into binary: `01000001`
2. Take the leading bits: `0100` (`0001` is left)
3. Get the emoji that corresponds to the leading bits: `❄️`
4. Omit the remaining leading bits: `0001` -> `1`
5. Presents/potatoes: `🎁`
6. Combine the emojis: (`🎄` +) `🎁` + `❄️` -> `🎄❄️🎁`

## Examples

### Hello, world!
```
H: 🎁❄️🥔🥔🥔🎄
e: 🎁🥔🔔🎁🎄
l: 🎁🎁🥔🔔🥔🎄
l: 🔔🎁🎁🥔🥔🎄
o: 🎁🔔🎁🎁🎁🎄
,: 🎁🥔🎁🎁🥔🥔🎄
 : 🎁🥔🥔🥔🥔🥔🎄
w: 🕯️🎁🎁🎁🎄
o: 🔔🎁🎁🎁🎁🎄
r: 🕯️🎁🥔🎄
l: 🔔🎁🎁🥔🥔🎄
d: 🎁🔔🥔🥔🎄
!: 🎁🥔🥔🥔🥔🎁
```

The stuff at the start of every row aren't present in actual encoded data.

Newlines aren't present in actual ChES code.