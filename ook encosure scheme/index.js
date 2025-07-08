// Written by TadaHrd.
// If this doesn't work blame him.

let ookTable = {
    0b0000: "OOK",
    0b0001: "OOk",
    0b0010: "OoK",
    0b0011: "Ook",
    0b0100: "OOK.",
    0b0101: "OOk.",
    0b0110: "OoK.",
    0b0111: "Ook.",
    0b1000: "OOK?",
    0b1001: "OOk?",
    0b1010: "OoK?",
    0b1011: "Ook?",
    0b1100: "OOK!",
    0b1101: "OOk!",
    0b1110: "OoK!",
    0b1111: "Ook!",

    "OOK":  0b0000,
    "OOk":  0b0001,
    "OoK":  0b0010,
    "Ook":  0b0011,
    "OOK.": 0b0100,
    "OOk.": 0b0101,
    "OoK.": 0b0110,
    "Ook.": 0b0111,
    "OOK?": 0b1000,
    "OOk?": 0b1001,
    "OoK?": 0b1010,
    "Ook?": 0b1011,
    "OOK!": 0b1100,
    "OOk!": 0b1101,
    "OoK!": 0b1110,
    "Ook!": 0b1111,
};

let ook_sep_check_regex = /^[^oOkK?!.]+$/;
let ook_sep_regex = /[^oOkK?!.]+/;

function ook_encode(input, sep) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (!ook_sep_check_regex.test(sep) || sep == undefined)
        sep = "\n";

    let ret = "";
    for (let val of data) {
        let nibble0 = (val >> 0) & 0b1111;
        let nibble1 = (val >> 4) & 0b1111;

        ret += ookTable[nibble1] + sep;
        ret += ookTable[nibble0] + sep;
    }

    ret = ret.substring(0, ret.length - sep.length);

    return ret;
}

function ook_decode(text, return_string) {
    let ret = [];

    let text_split = text.trim().split(ook_sep_regex);

    for (let i = 0; i < text_split.length; i++) {
        let v0 = text_split[i];
        let v1 = text_split[i + 1] || ookTable[0];

        i++;

        let nibble0 = ookTable[v0];
        let nibble1 = ookTable[v1];

        let num = nibble1 + (nibble0 << 4);

        ret.push(num);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("OES")