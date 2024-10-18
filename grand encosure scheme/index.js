// Written by TadaHrd.
// If this doesn't work blame him.
//
// DEPENDENCIES: AES, EES, BES

if (window.encosureSchemes instanceof Set) {
    if (!window.encosureSchemes.has("AES"))
        throw "AES not found";
    if (!window.encosureSchemes.has("EES"))
        throw "EES not found";
    if (!window.encosureSchemes.has("BES"))
        throw "BES not found";

    window.encosureSchemes.add("GES");
} else {
    throw "no `encosureSchemes` object found";
}

const grand_sep_check_regex = /^[^A-Za-z*\\😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚🤗🤩👽🤖💩🤓🦴🦷👁🦠🧠👀🐢🐊🦎🐍🐉🗯🗨🕙🕞💫🕳📠💯🎈🎨🔆🎁🧿🚾💲🎑🖼📒💰🎞🥽📊🎱💎💍💻🎎🎟🎫🧧🖥🎃🎊🎉🎭🧥🥼🖱🎹🔦📣🔊📀📸🖇]+$/;
const grand_sep_regex = /[^A-Za-z*\\😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚🤗🤩👽🤖💩🤓🦴🦷👁🦠🧠👀🐢🐊🦎🐍🐉🗯🗨🕙🕞💫🕳📠💯🎈🎨🔆🎁🧿🚾💲🎑🖼📒💰🎞🥽📊🎱💎💍💻🎎🎟🎫🧧🖥🎃🎊🎉🎭🧥🥼🖱🎹🔦📣🔊📀📸🖇]+/;

const grand_chunkSize = 16;

function escaped_grand_encode(input, sep) {
    return grand_encode(input, sep, true);
}

function grand_encode(input, sep, escape = false) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    if (sep == undefined || !grand_sep_check_regex.test(sep))
        sep = "\n";

    function wrappingAddSub(a, b, sub) {
        return sub ? (a - b + 256) % 256 : (a + b) % 256;
    }
    const schemes = [window.anyway_encode, window.emoji_encode, window.bussin_encode];

    let last = 0;
    let ret = "";
    for (let i = 0; i < data.length; i += grand_chunkSize) {
        let seed = rand(0xFFFF);
        let seedBits = seed.toString(2).padStart(16, '0').split("").map(bit => bit != '0');

        // metadata
        ret += window.anyway_encode([seed & 0xFF], sep, escape) + sep;
        ret += codeBussinTable[(seed >> 8) & 0xF] + sep;
        ret += emojiTable[(seed >> 12) & 0xF][rand(4)] + sep;
        let chunk = data.slice(i, i + grand_chunkSize);

        for (let j = 0; j < 16; j++) {
            if (chunk[j] == undefined) break;
            let curr = wrappingAddSub(last, chunk[j], seedBits[j]);

            let scheme = schemes[rand(2)];
            let encoded = scheme([curr], sep, escape);

            ret += encoded + sep;
            last = curr;
        }
    }

    return ret.substring(0, ret.length - sep.length);
}

function escaped_grand_decode(input, sep) {
    return grand_decode(input, sep);
}

function grand_decode(text, return_string) {
    function wrappingSubAbBa(a, b, sub) {
        return sub ? (a - b + 256) % 256 : (b - a + 256) % 256;
    }

    let ret = [];

    let n = 0, last = 0;
    let seed, seedBits, v0, v1, v2;

    let textSplit = text.split(grand_sep_regex);

    for (let i = 0; i < textSplit.length; i++) {
        let line = textSplit[i];

        // parse metadata
        switch (n) {
            case 0:
                v0 = anyway_decode(line)[0];
                n++;
                continue;
            case 1:
                v1 = codeBussinTable[line];
                n++;
                continue;
            case 2:
                v2 = emojiTable[line];
                seed = v0 + (v1 << 8) + (v2 << 12);
                seedBits = seed.toString(2).padStart(16, '0').split("").map(bit => bit != '0');
                n++;
                continue;
        }

        let bussinChar = charBussinTable[line];
        if (bussinChar) bussinChar = ord(bussinChar);

        let val = bussinChar || (emojiTable[line.substring(0, 2)] << 4) + emojiTable[line.substring(2, 4)];
        if (val == undefined || isNaN(val)) {
            let v0 = codeBussinTable[line];

            let bussin = (v0 << 4) + codeBussinTable[textSplit[i + 1]];
            if (!isNaN(v0) && !isNaN(bussin)) {
                val = bussin;
                i++;
            }
        }
        if (val == undefined || isNaN(val)) {
            val = anyway_decode(line)[0];
        }

        let curr = wrappingSubAbBa(last, val, seedBits[n - 3]);
        // let curr = val;
        ret.push(curr);
        last = val;

        n++;
        if (n == grand_chunkSize + 3) n = 0;
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}