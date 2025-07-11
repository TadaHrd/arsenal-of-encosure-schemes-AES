// Written by TadaHrd.
// If this doesn't work blame him.

const emojiTable = {
    0b0000: ["😀", "😁", "😂", "🤣", "😃"],
    0b0001: ["😄", "😅", "😆", "😉", "😊"],
    0b0010: ["😋", "😎", "😍", "😘", "🥰"],
    0b0011: ["😗", "😙", "😚", "🤗", "🤩"],
    0b0100: ["👽", "🤖", "💩", "🤓", "🦴"],
    0b0101: ["🦷", "👁", "🦠", "🧠", "👀"],
    0b0110: ["🐢", "🐊", "🦎", "🐍", "🐉"],
    0b0111: ["🗯", "🗨", "🕙", "🕞", "💫"],
    0b1000: ["🕳", "📠", "💯", "🎈", "🎨"],
    0b1001: ["🔆", "🎁", "🧿", "🚾", "💲"],
    0b1010: ["🎑", "🖼", "📒", "💰", "🎞"],
    0b1011: ["🥽", "📊", "🎱", "💎", "💍"],
    0b1100: ["💻", "🎎", "🎟", "🎫", "🧧"],
    0b1101: ["🖥", "🎃", "🎊", "🎉", "🎭"],
    0b1110: ["🧥", "🥼", "🖱", "🎹", "🔦"],
    0b1111: ["📣", "🔊", "📀", "📸", "🖇"],

    "😀":0,"😁":0,"😂":0,"🤣":0,"😃":0,
    "😄":1,"😅":1,"😆":1,"😉":1,"😊":1,
    "😋":2,"😎":2,"😍":2,"😘":2,"🥰":2,
    "😗":3,"😙":3,"😚":3,"🤗":3,"🤩":3,
    "👽":4,"🤖":4,"💩":4,"🤓":4,"🦴":4,
    "🦷":5,"👁":5,"🦠":5,"🧠":5,"👀":5,
    "🐢":6,"🐊":6,"🦎":6,"🐍":6,"🐉":6,
    "🗯":7,"🗨":7,"🕙":7,"🕞":7,"💫":7,
    "🕳":8,"📠":8,"💯":8,"🎈":8,"🎨":8,
    "🔆":9,"🎁":9,"🧿":9,"🚾":9,"💲":9,
    "🎑":10,"🖼":10,"📒":10,"💰":10,"🎞":10,
    "🥽":11,"📊":11,"🎱":11,"💎":11,"💍":11,
    "💻":12,"🎎":12,"🎟":12,"🎫":12,"🧧":12,
    "🖥":13,"🎃":13,"🎊":13,"🎉":13,"🎭":13,
    "🧥":14,"🥼":14,"🖱":14,"🎹":14,"🔦":14,
    "📣":15,"🔊":15,"📀":15,"📸":15,"🖇":15,
}

function emoji_encode(input) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    let ret = "";
    for (let val of data) {
        let nibble0 = (val >> 0) & 0b1111;
        let nibble1 = (val >> 4) & 0b1111;

        ret += emojiTable[nibble1][rand(4)];
        ret += emojiTable[nibble0][rand(4)];
    }

    return ret;
}

function emoji_decode(text, return_string) {
    let ret = [];

    text = text.trim();

    for (let i = 0; i < text.length; i += 4) {
        let v0 = text[i];
        let v1 = text[i + 1];
        let v2 = text[i + 2];
        let v3 = text[i + 3];

        let nibble0 = emojiTable[v0 + v1];
        let nibble1 = emojiTable[v2 + v3];

        let num = nibble1 + (nibble0 << 4);

        ret.push(num);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("EES")