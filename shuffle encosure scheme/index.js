// Written by TadaHrd.
// If this doesn't work blame him.

function mulberry32(seed) {
  let t = Number(seed % BigInt(2 ** 32)); // force seed into uint32
  return function next(mod) {
    t = (t + 0x6d2b79f5) >>> 0; // advance internal state (uint32 wrap)
    // Mix bits using xor-shifts and 32-bit multiplication.
    let x = Math.imul(t ^ (t >>> 15), t | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    // Modulo uint32 to range.
    return ((x ^ (x >>> 14)) >>> 0) % mod;
  };
}

function escaped_shuffle_encode(input, _sep) {
  return shuffle_encode(input, _sep, true);
}

function shuffle_encode(input, _sep, escape = false) {
  let data;
  if (typeof input == "string") data = textEncoder.encode(input);
  else
    // make a copy
    data = input.slice();

  let ret = [];

  if (data.length == 0) return "";

  for (let byte of data) {
    let char;

    // A LITTLE BIT OF ESOTERICS NEVER HURT ANYONE

    if (byte < 9)
      // 0-8
      char = `@${chr(byte + 71)}`; // uses chars 71-79
    else if (byte == 9)
      // 9
      char = `$|`; // uses $ char 124
    else if (byte != 10 && byte < 32)
      // 11-31
      char = `@${chr(byte + 21)}`; // uses chars 32-52
    else if (byte == ord("@"))
      // 64
      char = "$A"; // uses $ char 65
    else if (byte == ord("$"))
      // 36
      char = "@D"; // uses char 68
    else if (byte < 127)
      // PRINTABLE ASCII CHARS + NEWLINE + TAB + SPACE
      // 32-126, except 36 and 64
      char = chr(byte);
    else if (byte <= 141)
      // 127-141
      char = `@${chr(byte - 74)}`; // uses chars 53-67
    else if (byte <= 143)
      // 142-143
      char = `@${chr(byte - 73)}`; // uses chars 69-70
    else if (byte <= 190)
      // 144-190
      char = `@${chr(byte - 64)}`; // uses chars 80-126
    else if (byte <= 222)
      // 191-222
      char = `$${chr(byte - 159)}`; // uses $ chars 32-63 ($@ is a weird combo, ignored)
    else
      // 223-255
      char = `$${chr(byte - 157)}`; // uses $ chars 66-98

    ret.push(ord(char));
    if (char.length > 1) ret.push(ord(char[1]));
  }

  // allowed cause it's binary
  let seed = BigInt(ret.length);
  for (let byte of ret) {
    seed += BigInt(byte);
  }
  seed *= 81839n;
  let rand = mulberry32(seed);
  let j_list = [];

  for (let i = ret.length - 1; i >= 1; i--) {
    let j = rand(i + 1);
    j_list[i] = j;
    let tmp = ret[i];
    ret[i] = ret[j];
    ret[j] = tmp;
  }

  ret = textDecoder.decode(new Uint8Array(ret));

  if (escape) {
    ret = ret
      .replace(/[\\*#_`[\]\-+.>~]/g, "\\$&") // escape \*#_`[]-+.>
      .replace(/(?<=\s)\s/g, "\\ "); // escape consecutive spaces (ignoring the first space)
  }

  return ret;
}

function escaped_shuffle_decode(text, return_string) {
  return shuffle_decode(text, return_string, true);
}

function shuffle_decode(text, return_string, escape = false) {
  if (escape) {
    text = text.replace(/\\([\\*#_`[\]\-+.>~ ])/g, "$1");
  }

  // pesky windows bullshit
  text = text.replace(/\x0D/, "");

  text = textEncoder.encode(text);

  let seed = BigInt(text.length);
  for (let byte of text) {
    seed += BigInt(byte);
  }
  seed *= 81839n;
  let rand = mulberry32(seed);

  let j_list = [];

  for (let i = text.length - 1; i >= 1; i--) {
    let j = rand(i + 1);
    j_list[i] = j;
  }

  for (let i = 1; i < text.length; i++) {
    let j = j_list[i];

    let tmp = text[i];
    text[i] = text[j];
    text[j] = tmp;
  }

  let data = [];

  for (let i = 0; i < text.length; i++) {
    let c = text[i];

    if (c == ord("@")) {
      let c = text[++i];

      if (c >= 32 && c <= 52) data.push(c - 21);
      else if (c >= 53 && c <= 67) data.push(c + 74);
      else if (c == ord("D")) data.push(ord("$"));
      else if (c == 69 || c == 70) data.push(c + 73);
      else if (c >= 71 && c <= 79) data.push(c - 71);
      else if (c >= 80 && c <= 126) data.push(c + 64);
    } else if (c == ord("$")) {
      let c = text[++i];

      if (c >= 32 && c <= 63) data.push(c + 159);
      else if (c == ord("A")) data.push(ord("@"));
      else if (c >= 66 && c <= 98) data.push(c + 157);
      else if (c == ord("|")) data.push(9);
    } else {
      data.push(c);
    }
  }

  if (return_string) return textDecoder.decode(new Uint8Array(data));

  return data;
}

if (window.encosureSchemes instanceof Set) window.encosureSchemes.add("SES");
