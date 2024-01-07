# Bussin Encosure Scheme (BES)

This encosure scheme uses Gen Z slang words to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.

Each byte has 2 parts:
- 1st Nibble (0-3)
- 2nd Nibble (4-7)

To turn a byte into a BES byte:
1. Split the byte into 2 nibbles
2. Turn each nibble into a Gen Z slang word using the tables below.
    - Make sure to check if there is an alternative for your specific character in the 2nd table below.

Nibble to Gen Z slang word table:

| Bits | Word   |
| ---- | ------ |
| 0000 | nocap  |
| 0001 | bussin |
| 0010 | cap    |
| 0011 | rn     |
| 0100 | sus    |
| 0101 | nah    |
| 0110 | idk    |
| 0111 | idc    |
| 1000 | fr     |
| 1001 | irl    |
| 1010 | mad    |
| 1011 | finna  |
| 1100 | gon    |
| 1101 | aight  |
| 1110 | bet    |
| 1111 | smh    |

Alternatives for certain characters:

| Char | Word    |
| ---- | ------- |
| `?`  | wdym    |
| `.`  | period  |
| `!`  | deadass |
| `'`  | nojoke  |
| `"`  | true    |
| `^`  | tryhard |
| ` `  | lowkey  |

For example, to turn `A` into BES:
1. Turn it into binary: `01000001`
2. Split it into 2 nibbles: `0100 0001`
3. Turn the nibbles into Gen Z slang words: `0100 0001` -> `sus bussin`

## Examples

### Hello, world!

```
H: fr sus
e: nah idk
l: gon idk
l: gon idk
o: smh idk
,: gon cap
 : lowkey
w: idc idc
o: smh idk
r: cap idc
l: gon idk
d: sus idk
!: deadass
```

The stuff at the start of every row aren't present in actual encoded data.