# Brainfuck Encosure Scheme (BfES)

This encosure scheme uses commented [Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) commands to store data.

Bits (and dibits) in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

Each byte has 4 parts:
- 1st Dibit (bits 0-1)
- 2nd Dibit (bits 2-3)
- 3rd Dibit (bits 4-5)
- 4th Dibit (bits 6-7)

A dibit is a made-up unit of data equal to 2 bits.

To turn a byte into a BfES byte:
1. Split the byte into 4 dibits and reverse them (least significant comes first).
2. Turn each dibit into a brainfuck command using the table below.
3. Include a comment (1/3 chance)
4. Include a newline afterwards (1/5 chance and only if comment included)
5. Include another newline (1/8 chance and only if first newline included)

Dibit to Brainfuck command table:

| Bits | Command                   |
| ---- | ------------------------- |
| 00   | `+`                       |
| 01   | `-`                       |
| 10   | `>`, 1/6 chance to be `,` |
| 11   | `<`, 1/4 chance to be `.` |

For example, to turn `B` into BfES:
1. Turn it into binary: `01000010`
2. Split it into 4 dibits: `10 00 00 01` (dibit order was reversed)
3. Turn the dibits into brainfuck commands: `10 00 00 01` -> `>++-`
4. Optionally add a comment: `>++- ; hard to explain, look at the readme`

`A` would be `-++-`

## Comments

There is a list of comments that are randomly selected and added when previously described conditions are met.

Comments are always prefixed with ` ; ` and suffixed with a newline.

Here's the complete list of comments:

```
hard to explain, look at the readme
does something, forgot its purpose
chatgpt wrote this one
this ones is simple, you can figure it out
this is a comment
this one actually does nothing but it wont work without this one
brainfuck more like brain-cell destroyer
todo: write the rest
reminder: empty the dishwasher when its done
check out brainfuck+: https://tadahrd.github.io/try-it-online/bfp-compiler/index.html and dont forget to download the brainfuck+ extension for vscode: https://marketplace.visualstudio.com/items?itemName=TadaHrd.bfp-syntax
i actually have no idea, i dont remember writing this line
dont question my code
its beautiful
todo: fix my life
du hast das Ende erreicht
reminder: i forgor
cant wait to have minecraft in brainfuck
abandon all hope ye who enter here
```

## Examples

### Hello, world!

```
H: +>+-
e: -->-
l: +<,-
l: +<>-
o: .<>-
,: +.>+
 : ++>+
w: <-<-
o: <<>-
r: >+<-
l: +<>-
d: +->-
!: -+,+
```

The characters at the start of every row aren't present in actual encoded data.

Comments and newlines were left out so that the code is more easily understandable.