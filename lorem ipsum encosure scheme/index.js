// Written by TadaHrd.
// If this doesn't work blame him.

let loremIpsum = "lorem ipsum dolor sit amet, consectetur adipiscing elit. vivamus imperdiet lorem vel mauris ultrices, nec ultricies turpis tempor. fusce quis semper mi. sed arcu ex, lacinia nec ullamcorper ac, fermentum vel lorem. proin sed neque sollicitudin, imperdiet dui eget, porta massa. aliquam varius leo vel quam dapibus, quis eleifend ipsum pellentesque. in risus nisi, condimentum vitae vulputate id, venenatis et dolor. aenean vehicula lacinia ornare. mauris lobortis tincidunt diam sit amet consequat. aenean maximus, nulla ut venenatis tempor, neque lacus tincidunt odio, quis mollis mi tellus sit amet libero. donec tempor justo eget enim dapibus, nec posuere quam rutrum. duis consectetur odio eros, eu varius sapien mollis a. vestibulum molestie lacinia fringilla. curabitur non feugiat nunc. fusce auctor vel odio sit amet mattis. nam ac maximus urna. integer a velit sem. nunc purus justo, egestas non ex id, consequat maximus magna. mauris tempor purus eget arcu lobortis, ultricies mollis urna interdum. aenean eros magna, gravida at libero sed, semper pellentesque nisi. donec porta consectetur lacus, vel rhoncus neque ullamcorper a. sed sed laoreet arcu. donec et egestas lectus, eu elementum sapien. vivamus lacus odio, elementum id elit at, rhoncus rutrum ex. donec non tempor eros. suspendisse hendrerit scelerisque mauris eu convallis. aenean id dui in est tincidunt convallis quis quis libero. in vel ultricies arcu. ut suscipit elit sem, eu euismod augue hendrerit eget. curabitur porttitor lectus non rutrum dignissim. duis hendrerit non massa nec tincidunt. sed et maximus velit. morbi a ante risus. ";

function setNewLoremIpsum(newLoremIpsum) {
    loremIpsum = newLoremIpsum.toLowerCase();
}

function incrementWithWraparound(value, wraparound) {
    return (value + 1) % wraparound;
}

function nextLoremCharacter(idx, bit) {
    let nonLetterTextPrefix = "";
    while (/[^a-z]/.test(loremIpsum[idx])) {
        nonLetterTextPrefix += loremIpsum[idx];

        idx = (idx + 1) % loremIpsum.length;
    }

    return [
        nonLetterTextPrefix + chr( ord(loremIpsum[idx]) - (32 * bit) ), // the character (with the non letter text prefix)
        idx + 1, // the new index
    ];
}

function lorem_encode(input) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    let ret = "";
    let loremIpsumIdx = 0;

    for (let val of data) {
        let line = "";

        let x = nextLoremCharacter(loremIpsumIdx, (val >> 7) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 6) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 5) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 4) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 3) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 2) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 1) & 1);
        line += x[0]; loremIpsumIdx = x[1];
        x     = nextLoremCharacter(loremIpsumIdx, (val >> 0) & 1);
        line += x[0]; loremIpsumIdx = x[1];

        ret += line;
    }

    return ret;
}

function lorem_decode(text, return_string) {
    let ret = [];

    if (text == "") {
        if (return_string) return "";
        else return [];
    }

    text = text.replace(/[^a-zA-Z]/g, "");

    for (let i = 0; i < text.length; i += 8) {
        let bits = [];
        for (let j = 0; j < 8; j++) {
            if ((i + j) >= text.length) break;
            bits.push(ord(text[i + j]) < 96);
        }

        let num = 0;
        for (let i = 0; i < 8; i++)
            num += Num(bits[i]) << (7 - i);

        ret.push(num);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret))

    return ret;
}