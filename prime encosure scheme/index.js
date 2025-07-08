// Written by TadaHrd.
// If this doesn't work blame him.

let prime_sep_regex = /[^0-9]+/g;
let prime_sep_check_regex = /^[^0-9]+$/;

function prime_encode(input, sep) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (!prime_sep_check_regex.test(sep) || sep == undefined)
        sep = ","

    let ret = "";
    for (let val of data) {
        let v = 1;
        if ((val >> 0) & 0b1) v *= 2;
        if ((val >> 1) & 0b1) v *= 3;
        if ((val >> 2) & 0b1) v *= 5;
        if ((val >> 3) & 0b1) v *= 7;
        if ((val >> 4) & 0b1) v *= 11;
        if ((val >> 5) & 0b1) v *= 13;
        if ((val >> 6) & 0b1) v *= 17;
        if ((val >> 7) & 0b1) v *= 19;

        ret += v + sep;
    }

    return ret.substring(0, ret.length - sep.length);
}

function prime_decode(text, return_string) {
    let ret = [];

    for (let val of text.trim().split(prime_sep_regex)) {
        let v = 0;

        if (val % 2  == 0) v += 1;
        if (val % 3  == 0) v += 2;
        if (val % 5  == 0) v += 4;
        if (val % 7  == 0) v += 8;
        if (val % 11 == 0) v += 16;
        if (val % 13 == 0) v += 32;
        if (val % 17 == 0) v += 64;
        if (val % 19 == 0) v += 128;

        ret.push(v);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("PES")