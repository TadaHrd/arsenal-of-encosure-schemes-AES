// Written by TadaHrd.
// If this doesn't work blame him.

let abc_sep_regex = /[^A-H]+/g;
let abc_sep_check_regex = /^[^A-H]+$/;

function abc_encode(input, sep) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (!abc_sep_check_regex.test(sep) || sep == undefined)
        sep = "I";

    let ret = "";
    for (let val of data) {
        let v = "";
        if ((val >> 0) & 0b1) v += "A";
        if ((val >> 1) & 0b1) v += "B";
        if ((val >> 2) & 0b1) v += "C";
        if ((val >> 3) & 0b1) v += "D";
        if ((val >> 4) & 0b1) v += "E";
        if ((val >> 5) & 0b1) v += "F";
        if ((val >> 6) & 0b1) v += "G";
        if ((val >> 7) & 0b1) v += "H";

        v = shuffleString(v);

        ret += v + sep;
    }

    return ret.substring(0, ret.length - sep.length);
}

function abc_decode(text, return_string) {
    let ret = [];

    for (let val of text.split(abc_sep_regex)) {
        let v = 0;

        for (let letter of val) {
            switch (letter) {
                case "A": v += 1; break;
                case "B": v += 2; break;
                case "C": v += 4; break;
                case "D": v += 8; break;
                case "E": v += 16; break;
                case "F": v += 32; break;
                case "G": v += 64; break;
                case "H": v += 128; break;
            }
        }

        ret.push(v);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("AbcES")