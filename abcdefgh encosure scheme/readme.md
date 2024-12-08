# ABCDEFGH Encosure Scheme (AbcES)

This encosure scheme uses letters A-H to store bytes.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

To turn a byte into a AbcES byte:
1. Get its bits
2. Append `A` if bit 0 is on
3. Append `B` if bit 1 is on
4. Append `C` if bit 2 in on
5. Append `D` if bit 3 in on
6. Append `E` if bit 4 in on
7. Append `F` if bit 5 in on
8. Append `G` if bit 6 in on
9. Append `H` if bit 7 in on
10. Shuffle it around

For example to turn `A` into AbcES:
1. Get its bits: `01000001`
2. Determine the letters: `A` and `G`
3. Mix them: `AG`

The value 255 in AbcES would be `ABCDEFGH` (without shuffling).
The value 0 would be ``.

## Examples

### Hello, world!

The string "Hello, world!" would look like:
```
H: DG
e: ACFG
l: CDFG
l: CDFG
o: ABCDFG
,: CDF
 : F
w: ABCEFG
o: ABCDFG
r: BEFG
l: CDFG
d: CFG
!: AF
```

The characters at the start of every row aren't present in actual encoded data.
