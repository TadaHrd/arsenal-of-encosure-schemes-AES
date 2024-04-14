// Written by TadaHrd.
// If this doesn't work blame him.

let anyway_sep_check_regex = /^[^anywANYW*\\]+$/;
let anyway_sep_regex = /[^anywANYW*\\]+/;

function escaped_anyway_encode(input, sep) {
    return anyway_encode(input, sep, true);
}

function anyway_encode(input, sep, escape = false) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (!anyway_sep_check_regex.test(sep) || sep == undefined)
        sep = "\n";

    let ret = "";
    for (let val of data) {
        let tail = val & 0b11;
        let body = (val >> 2) & 0b00111111;

        let fix = "*".repeat(tail);
        let fix2 = "\\*".repeat(tail);

        let line = "";

        line += chr(ord("A") + (32 * ((body >> 0) & 1)));
        line += chr(ord("N") + (32 * ((body >> 1) & 1)));
        line += chr(ord("Y") + (32 * ((body >> 2) & 1)));
        line += chr(ord("W") + (32 * ((body >> 3) & 1)));
        line += chr(ord("A") + (32 * ((body >> 4) & 1)));
        line += chr(ord("Y") + (32 * ((body >> 5) & 1)));

        if (escape)
            line = fix2 + fix + line + fix + fix2
        else
            line = fix + line + fix;

        ret += line + sep;
    }

    return ret.substring(0, ret.length - sep.length);
}

function escaped_anyway_decode(input, sep) {
    return anyway_decode(input, sep);
}

function anyway_decode(text, return_string) {
    let ret = [];

    for (let line of text.split(anyway_sep_regex)) {
        let stars = 0;

        line = line.replace(/\\\*/g, "");

        for (let c of line) {
            if (c == "*")
                stars++;
            else
                break;
        }
        stars = stars % 4; // make sure the prefix doesn't overflow in edge cases

        let anyway = line.substring(stars, stars + 6);
        let bits = [
            Bool(stars & 1),
            Bool((stars > 1) & 1)
        ];

        for (let c of anyway) {
            bits.push(ord(c) > 96)
        }

        let num = 0;
        for (let i = 0; i < 8; i++)
            num += Num(bits[i]) << i;

        ret.push(num);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}