# Emoji Encosure Scheme (EES)

This encosure scheme associates each combination of 4 bits with multiple emojis and chooses an emoji for the combination randomly.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

Each byte has 2 parts:
- 1st Nibble (0-3)
- 2nd Nibble (4-7)

Each possible combination of bits in a nibble has 5 possible emojis, choose one randomly.

To turn a byte into an EES character:
1. Split it into nibbles
2. Convert each nibble into a randomly selected emoji in a row using the table below

Nibble to emojis table:

| Bits | Emojis              |
| ---- | ------------------- |
| 0000 | 😀, 😁, 😂, 🤣, 😃 |
| 0001 | 😄, 😅, 😆, 😉, 😊 |
| 0010 | 😋, 😎, 😍, 😘, 🥰 |
| 0011 | 😗, 😙, 😚, 🤗, 🤩 |
| 0100 | 👽, 🤖, 💩, 🤓, 🦴 |
| 0101 | 🦷, 👁, 🦠, 🧠, 👀 |
| 0110 | 🐢, 🐊, 🦎, 🐍, 🐉 |
| 0111 | 🗯, 🗨, 🕙, 🕞, 💫 |
| 1000 | 🕳, 📠, 💯, 🎈, 🎨 |
| 1001 | 🔆, 🎁, 🧿, 🚾, 💲 |
| 1010 | 🎑, 🖼, 📒, 💰, 🎞 |
| 1011 | 🥽, 📊, 🎱, 💎, 💍 |
| 1100 | 💻, 🎎, 🎟, 🎫, 🧧 |
| 1101 | 🖥, 🎃, 🎊, 🎉, 🎭 |
| 1110 | 🧥, 🥼, 🖱, 🎹, 🔦 |
| 1111 | 📣, 🔊, 📀, 📸, 🖇 |

For example, to turn `A` into EES:
1. Turn it into binary: `01000001`
2. Split it into 2 nibbles: `0100 0001`
3. Turn the nibbles into random emojis: `0100 0001` -> `👽😄`

## Examples

### Hello, world!
```
H: 👽🕳
e: 🐢🦷
l: 🐢💻
l: 🐢💻
o: 🐢📣
,: 😋💻
 : 😋😀
w: 🗯🗯
o: 🐢📣
r: 🗯😋
l: 🐢💻
d: 🐢👽
!: 😋😄
```

The stuff at the start of every row aren't present in actual encoded data.

Newlines aren't present in actual EES code.