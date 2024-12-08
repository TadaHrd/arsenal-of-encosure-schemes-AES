# Prime Encosure Scheme (PES)

This encosure scheme uses prime numbers multiplied together to store bytes.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

The 8 prime numbers are: `2`, `3`, `5`, `7`, `11`, `13`, `17`, `19`.

To turn a byte into a PES byte:
1. Get its bits
2. Set value to 2 if bit 0 is on, else set it to 1
3. Multiply value by 3 if bit 1 is on
4. Multiply value by 5 if bit 2 in on
5. Multiply value by 7 if bit 3 in on
6. Multiply value by 11 if bit 4 in on
7. Multiply value by 13 if bit 5 in on
8. Multiply value by 17 if bit 6 in on
9. Multiply value by 19 if bit 7 in on

For example to turn `A` into PES:
1. Get its bits: `01000001`
2. Do all the multiplications: `2 * 17`, which is `34`

The value 255 in PES would be equal to `9 699 690`.
The value 0 would be equal to `1`.

## Examples

### Hello, world!

The string "Hello, world!" would look like:
```
H: 119
e: 2210
l: 7735
l: 7735
o: 46410
,: 455
 : 13
w: 72930
o: 46410
r: 7293
l: 7735
d: 1105
!: 26
```

The characters at the start of every row aren't present in actual encoded data.
