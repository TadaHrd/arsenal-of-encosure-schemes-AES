// Written by TadaHrd.
// If this doesn't work blame him.

let brainfuckTable = {
    0: "+",
    1: "-",
    2: ">", // 1/6 chance or being replaced by ","
    3: "<", // 1/4 chance of being replaced by "."

    "+": 0,
    "-": 1,
    ">": 2, ",": 2,
    "<": 3, ".": 3,
};

// if you add to these, update README.md as well
let codeExplanations = [
    "hard to explain, look at the readme",
    "does something, forgot its purpose",
    "chatgpt wrote this one",
    "this ones is simple, you can figure it out",
    "this is a comment",
    "this one actually does nothing but it wont work without this one",
    "brainfuck more like brain-cell destroyer",
    "todo: write the rest",
    "reminder: empty the dishwasher when its done",
    "check out brainfuck+: https://tadahrd.github.io/try-it-online/bfp-compiler/index.html and dont forget to download the brainfuck+ extension for vscode: https://marketplace.visualstudio.com/items?itemName=TadaHrd.bfp-syntax",
    "i actually have no idea, i dont remember writing this line",
    "dont question my code",
    "its beautiful",
    "todo: fix my life",
    "du hast das Ende erreicht",
    "reminder: i forgor",
    "cant wait to have minecraft in brainfuck",
    "abandon all hope ye who enter here"
];

let brainfuck_check_regex = /( ?;.*)|([^\+\-><,.]+)/g;

function changeBrainfuckCharacter(val) {
    if (val == ">" && rand(6) == 0) return ",";
    if (val == "<" && rand(4) == 0) return ".";

    return val;
}

function brainfuck_encode(input) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    let ret = "";

    for (let val of data) {
        val = val;

        let v0 = changeBrainfuckCharacter(brainfuckTable[(val >> 0) & 0b11]);
        let v1 = changeBrainfuckCharacter(brainfuckTable[(val >> 2) & 0b11]);
        let v2 = changeBrainfuckCharacter(brainfuckTable[(val >> 4) & 0b11]);
        let v3 = changeBrainfuckCharacter(brainfuckTable[(val >> 6) & 0b11]);

        ret += v0 + v1 + v2 + v3;

        if (rand(3) == 0) {
            ret += " ; " + randomOfArray(codeExplanations) + "\n";
            if (rand(5) == 0) {
                ret += "\n";

                if (rand(8) == 0)
                    ret += "\n";
            }
        }
    }

    return ret;
}

function brainfuck_decode(text, return_string) {
    let ret = [];

    text = text.replace(brainfuck_check_regex, "");

    for (let i = 0; i < text.length; i += 4) {
        let v0 = brainfuckTable[text[i]];
        let v1 = brainfuckTable[text[i + 1] || brainfuckTable[0]];
        let v2 = brainfuckTable[text[i + 2] || brainfuckTable[0]];
        let v3 = brainfuckTable[text[i + 3] || brainfuckTable[0]];

        let val = (v0 << 0) + (v1 << 2) + (v2 << 4) + (v3 << 6);

        ret.push(val);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("BfES")