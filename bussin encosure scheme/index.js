// Written by TadaHrd.
// If this doesn't work blame him.

const codeBussinTable = {
    0b0000: "nocap",
    0b0001: "bussin",
    0b0010: "cap",
    0b0011: "rn",
    0b0100: "sus",
    0b0101: "nah",
    0b0110: "idk",
    0b0111: "idc",
    0b1000: "fr",
    0b1001: "irl",
    0b1010: "mad",
    0b1011: "finna",
    0b1100: "gon",
    0b1101: "aight",
    0b1110: "bet",
    0b1111: "smh",

    "nocap":  0b0000,
    "bussin": 0b0001,
    "cap":    0b0010,
    "rn":     0b0011,
    "sus":    0b0100,
    "nah":    0b0101,
    "idk":    0b0110,
    "idc":    0b0111,
    "fr":     0b1000,
    "irl":    0b1001,
    "mad":    0b1010,
    "finna":  0b1011,
    "gon":    0b1100,
    "aight":  0b1101,
    "bet":    0b1110,
    "smh":    0b1111,
};

const charBussinTable = {
    "?":   "wdym",
    ".":   "period",
    " ":   "lowkey",
    "!":   "deadass",
    "'":   "nojoke",
    "\"":  "true",
    "^":   "tryhard",

    "wdym":    "?",
    "period":  ".",
    "lowkey":  " ",
    "deadass": "!",
    "nojoke":  "'",
    "true":    "\"",
    "tryhard": "^",
};

let bussin_sep_check_regex = /^[^A-Za-z]+$/;
let bussin_sep_regex = /[^A-Za-z]+/;

function bussin_encode(input, sep) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (!bussin_sep_check_regex.test(sep) || sep == undefined)
        sep = "\n";

    let ret = "";
    for (let val of data) {
        let c = charBussinTable[chr(val)];
        if (c) {
            ret += c + sep;
        } else {
            let nibble0 = (val >> 0) & 0b1111;
            let nibble1 = (val >> 4) & 0b1111;

            ret += codeBussinTable[nibble1] + sep;
            ret += codeBussinTable[nibble0] + sep;
        }
    }

    ret = ret.substring(0, ret.length - sep.length);

    return ret;
}

function bussin_decode(text, return_string) {
    let ret = [];

    let text_split = text.trim().split(bussin_sep_regex);

    for (let i = 0; i < text_split.length; i++) {
        let v0 = text_split[i];
        let v1 = text_split[i + 1] || codeBussinTable[0];

        let c = charBussinTable[v0];
        if (c) {
            ret.push(ord(c));
        } else {
            i++;

            let nibble0 = codeBussinTable[v0];
            let nibble1 = codeBussinTable[v1];

            let num = nibble1 + (nibble0 << 4);

            ret.push(num);
        }
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("BES")