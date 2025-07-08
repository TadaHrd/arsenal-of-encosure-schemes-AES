// Written by TadaHrd.
// If this doesn't work blame him.

let adrian_sep_check_regex = /^[^adrinjegADRINJEG*\\ ]+$/;
let adrian_sep_regex = /[^adrinjegADRINJEG*\\ ]+/;

function bytesToWords(byteArray) {
    let wordArray = [];
    for(let i = 0; i < byteArray.length; i += 2) {
        if (byteArray[i + 1])
            wordArray.push((byteArray[i] << 8) | (byteArray[i + 1]));
        else
            wordArray.push(byteArray[i]);
    }
    return wordArray;
}

function escaped_adrian_encode(input, sep) {
    return adrian_encode(input, sep, true);
}

function adrian_encode(input, sep, escape = false) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (!adrian_sep_check_regex.test(sep) || sep == undefined)
        sep = "\n";

    let words = bytesToWords(data);

    let ret = "";
    for (let val of words) {
        let tail1 = val & 0b11;
        let tail2 = (val >> 2) & 0b11;
        let tail3 = (val >> 4) & 0b11;

        let body = (val >> 6) & 0b11_1111_1111;

        let fix1 = "*".repeat(tail1);
        let fix1esc = "\\*".repeat(tail1);
        let fix2 = "*".repeat(tail2);
        let fix2esc = "\\*".repeat(tail2);
        let fix3 = "*".repeat(tail3);
        let fix3esc = "\\*".repeat(tail3);

        let line = "";

        if (escape)
            line = fix1esc + fix1
        else
            line = fix1;

        line += chr(ord("A") + (32 * (val > 256)));
        line += chr(ord("D") + (32 * ((body >> 0) & 1)));
        line += chr(ord("R") + (32 * ((body >> 1) & 1)));
        line += chr(ord("I") + (32 * ((body >> 2) & 1)));
        line += chr(ord("A") + (32 * ((body >> 3) & 1)));
        line += chr(ord("N") + (32 * ((body >> 4) & 1)));

        if (escape)
            line += fix1 + fix1esc + " " + fix2esc + fix2;
        else
            line += fix1 + " " + fix2;


        line += chr(ord("J") + (32 * ((body >> 5) & 1)));
        line += chr(ord("E") + (32 * ((body >> 6) & 1)));

        if (escape)
            line += fix2 + fix2esc + " " + fix3esc + fix3;
        else
            line += fix2 + " " + fix3;

        line += chr(ord("G") + (32 * ((body >> 7) & 1)));
        line += chr(ord("E") + (32 * ((body >> 8) & 1)));
        line += chr(ord("J") + (32 * ((body >> 9) & 1)));

        if (escape)
            line = line + fix3 + fix3esc;
        else
            line = line + fix3;

        ret += line + sep;
    }

    return ret.substring(0, ret.length - sep.length);
}

function escaped_adrian_decode(input, sep) {
    return adrian_decode(input, sep);
}

function adrian_decode(text, return_string) {
    let ret = [];

    if (text == "") {
        if (return_string) return "";
        else return [];
    }

    for (let line of text.split(adrian_sep_regex)) {
        line = line.replace(/\\\*/g, "");

        let words = line.split(/ /g);

        let stars1 = 0;
        for (let c of words[0] || "") {
            if (c == "*")
                stars1++;
            else
                break;
        }
        stars1 = stars1 % 4; // make sure the prefix doesn't overflow in edge cases

        let stars2 = 0;
        for (let c of words[1] || "") {
            if (c == "*")
                stars2++;
            else
                break;
        }
        stars2 = stars2 % 4; // make sure the prefix doesn't overflow in edge cases

        let stars3 = 0;
        for (let c of words[2] || "") {
            if (c == "*")
                stars3++;
            else
                break;
        }
        stars3 = stars3 % 4; // make sure the prefix doesn't overflow in edge cases

        let new_line = line.replace(/[* ]/g, "");

        let dual_byte = ord(new_line[0]) > 96;

        new_line = new_line.substring(1);

        let bits = [
            Bool(stars1 & 1),
            Bool((stars1 > 1) & 1),
            Bool(stars2 & 1),
            Bool((stars2 > 1) & 1),
            Bool(stars3 & 1),
            Bool((stars3 > 1) & 1),
        ];

        for (let c of new_line) {
            bits.push(ord(c) > 96);
        }

        let num = 0;
        for (let i = 0; i < 16; i++)
            num += Num(bits[i]) << i;

        if (dual_byte)
            ret.push(num >> 8);
        ret.push(num & 0b1111_1111);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("AgES")