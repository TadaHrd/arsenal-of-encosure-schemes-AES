// Written by TadaHrd.
// If this doesn't work blame him.

function christmas_encode(input) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    let ret = "";
    for (let val of data) {
        let top4bits = val >> 4;
        
        let emoji1, emoji2;
        switch (top4bits) {
            case 0b0000: break;
            case 0b0100: emoji1 = "❄️"; break;
            case 0b0101: emoji1 = "⛄"; break;
            case 0b0110: emoji1 = "🔔"; break;
            case 0b0111: emoji1 = "🕯️"; break;

            case 0b1000: case 0b1001:
                emoji1 = "🕯️"; emoji2 = "🕯️"; break;
            case 0b1010: case 0b1011:
                emoji1 = "🔔"; emoji2 = "⛄"; break;
            case 0b1100: case 0b1101:
                emoji1 = "🔔"; emoji2 = "❄️"; break;
            case 0b1110: case 0b1111:
                emoji1 = "🕯️"; emoji2 = "🔔"; break;
        }

        let curr = "";

        let seqStarted = false;
        for (let i = emoji1 ? emoji2 ? 4 : 3 : 7; i >= 0; i--) {
            let bit = (val >> i) & 1;
            if (seqStarted || bit == 1) {
                seqStarted = true;
                curr += bit == 0 ? "🎁" : "🥔";
            }
        }
        
        if (emoji1) {
            let index = Math.floor(rand(curr.length - 1) / 2) * 2;
            curr = curr.slice(0, index) + emoji1 + curr.slice(index);
        }
        if (emoji2) {
            let index = Math.floor(rand(curr.length - 1) / 2) * 2;
            let arr = curr.match(/(\P{Mark}\p{Mark}*|\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\p{Emoji_Component}|\p{Emoji_Modifier})/gu) || [];
            curr = arr.slice(0, index).join("") + emoji2 + arr.slice(index).join("");
        }
        
        ret += curr + "🎄";
    }

    return ret.substring(0, ret.length - 2);
}

function christmas_decode(text, return_string) {
    let ret = [];

    let curr = 0, currBit = 7, emojis = "";

    function getCurr() {
        curr >>= currBit + 1;
        
        if (emojis == "❄️") curr += 0b01000000;
        else if (emojis == "⛄") curr += 0b01010000;
        else if (emojis == "🔔") curr += 0b01100000;
        else if (emojis == "🕯️") curr += 0b01110000;
        else if (emojis == "🕯️🕯️") curr += 0b10000000;
        else if (emojis == "🔔⛄" || emojis == "⛄🔔") curr += 0b10100000;
        else if (emojis == "🔔❄️" || emojis == "❄️🔔") curr += 0b11000000;
        else if (emojis == "🔔🕯️" || emojis == "🕯️🔔") curr += 0b11100000;

        let ret = curr;
        curr = 0;
        currBit = 7;
        emojis = "";

        return ret;
    }

    for (let val of text.match(/(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu) || []) {
        switch (val) {
            case "🎄":
                ret.push(getCurr());
                break;

            case "🥔":
                curr += 1 << currBit;
            case "🎁":
                currBit -= 1;
                break;

            case "❄️":
            case "⛄":
            case "🔔":
            case "🕯️":
                emojis += val;
                break;
        }
    }

    ret.push(getCurr());
    
    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}

if (window.encosureSchemes instanceof Set)
    window.encosureSchemes.add("ChES")