// Written by TadaHrd.
// If this doesn't work blame him.

let latinTable = {
    0: "nihil",
    1: "primus",
    2: "duplex",
    3: "triplex",
    4: "quadruplex",
    5: "inquire",
    6: "mundus",
    7: "perfectio",
    8: "octo",
    9: "novem",
    10: "digitorum",
    11: "undecim",
    12: "dozen",
    13: "nondivisibilis",
    14: "nol",
    15: "inprocerus",
    16: "verbum",
    17: "supernondivisibilis",
    18: "parvus",
    19: "parvulus",
    20: "apsens",
    21: "improcerus",
    22: "insanis",
    23: "cerritus",
    24: "duplexdozen",
    25: "vegrandis",
    26: "sus",
    27: "amplius",
    28: "ex",
    29: "major",
    30: "lux",
    31: "minus",
    32: "duplexverba",
    33: "advorsus",
    34: "plus",
    35: "falsa",
    36: "exacte",
    37: "fortuitus",
    38: "plas",
    39: "ego",
    40: "nisi",
    41: "non",
    42: "omnia",
    43: "hau",
    44: "quantum",
    45: "tristis",
    46: "latinus",
    47: "ratio",
    48: "paululus",
    49: "stultividus",
    50: "pauxillulus",
    51: "nonmanet",
    52: "pravus",
    53: "sinister",
    54: "parvolus",
    55: "ultima",
    56: "irrationalis",
    57: "brutus",
    58: "stolidus",
    59: "inrationabilis",
    60: "magna",
    61: "alogus",
    62: "insensatus",
    63: "minor",
    64: "quadruplexverba",
    65: "mons",
    66: "malus",
    67: "collis",
    68: "stupidus",
    69: "jocosus",
    70: "infinitum",
    71: "vis",
    72: "potentia",
    73: "ops",
    74: "regnum",
    75: "ditio",
    76: "populus",
    77: "dem",
    78: "natio",
    79: "frequento",
    80: "terribilis",
    81: "dirus",
    82: "tremendus",
    83: "amor",
    84: "vita",
    85: "liber",
    86: "pax",
    87: "lumen",
    88: "veritas",
    89: "sapienta",
    90: "fortuna",
    91: "fidelis",
    92: "honor",
    93: "justitia",
    94: "scientia",
    95: "virtus",
    96: "aequitas",
    97: "spes",
    98: "gratia",
    99: "dignitas",
    100: "potestas",
    101: "libertas",
    102: "aeternitas",
    103: "aqua",
    104: "unda",
    105: "ignis",
    106: "flamma",
    107: "ustrina",
    108: "ventus",
    109: "spiritus",
    110: "aura",
    111: "terra",
    112: "tellus",
    113: "vapor",
    114: "fumus",
    115: "fervo",
    116: "infernum",
    117: "apocalypsis",
    118: "pulvis",
    119: "afa",
    120: "harenae",
    121: "arena",
    122: "litus",
    123: "fenestra",
    124: "luminare",
    125: "solis",
    126: "sol",
    127: "stella",
    128: "quadruplexverbum",
    129: "eruditio",
    130: "humanitas",
    131: "metallum",
    132: "vale",
    133: "illustratio",
    134: "talpa",
    135: "atomus",
    136: "individuum",
    137: "cinis",
    138: "favilla",
    139: "aurum",
    140: "mostrum",
    141: "belua",
    142: "rex",
    143: "basileus",
    144: "rego",
    145: "oppidum",
    146: "urbs",
    147: "exspiravit",
    148: "deus",
    149: "divus",
    150: "lar",
    151: "spes",
    152: "lex",
    153: "ius",
    154: "pluvia",
    155: "promitto",
    156: "aether",
    157: "industria",
    158: "domus",
    159: "familia",
    160: "maria",
    161: "moleculae",
    162: "crepitus",
    163: "thesaurus",
    164: "gaza",
    165: "opes",
    166: "pulmenti",
    167: "sorbitio",
    168: "piscis",
    169: "natans",
    170: "ophthalmias",
    171: "humano",
    172: "simia",
    173: "fidem",
    174: "bellum",
    175: "mars",
    176: "navis",
    177: "navigium",
    178: "carina",
    179: "iudex",
    180: "theocratia",
    181: "democratia",
    182: "vitrum",
    183: "speculum",
    184: "atrium",
    185: "aula",
    186: "mutatio",
    187: "caelum",
    188: "polus",
    189: "inundatio",
    190: "diluvio",
    191: "avis",
    192: "aves",
    193: "glacies",
    194: "refrigero",
    195: "pecunia",
    196: "argentum",
    197: "numus",
    198: "dives",
    199: "florus",
    200: "uber",
    201: "villa",
    202: "rus",
    203: "ordo",
    204: "praegressus",
    205: "nubes",
    206: "calligo",
    207: "tyrannus",
    208: "paradoxon",
    209: "cladis",
    210: "scelus",
    211: "pascha",
    212: "ripae",
    213: "tumulus",
    214: "choma",
    215: "opinio",
    216: "persuasio",
    217: "confidentia",
    218: "fumo",
    219: "suffitio",
    220: "nebula",
    221: "fulgur",
    222: "fulmen",
    223: "tempestas",
    224: "procella",
    225: "expugnatio",
    226: "praefuro",
    227: "grassor",
    228: "lutum",
    229: "coenum",
    230: "illuvies",
    231: "paupertas",
    232: "tenuitas",
    233: "lacuna",
    234: "stagnum",
    235: "desertum",
    236: "meritum",
    237: "avium",
    238: "desolo",
    239: "eremus",
    240: "pharus",
    241: "luna",
    242: "defectus",
    243: "veniae",
    244: "condono",
    245: "dono",
    246: "impunitas",
    247: "dimitte",
    248: "respondere",
    249: "sors",
    250: "succedo",
    251: "nonmagna",
    252: "conpeto",
    253: "refero",
    254: "resonantia",
    255: "finis",
    "nihil": 0,
    "primus": 1,
    "duplex": 2,
    "triplex": 3,
    "quadruplex": 4,
    "inquire": 5,
    "mundus": 6,
    "perfectio": 7,
    "octo": 8,
    "novem": 9,
    "digitorum": 10,
    "undecim": 11,
    "dozen": 12,
    "nondivisibilis": 13,
    "nol": 14,
    "inprocerus": 15,
    "verbum": 16,
    "supernondivisibilis": 17,
    "parvus": 18,
    "parvulus": 19,
    "apsens": 20,
    "improcerus": 21,
    "insanis": 22,
    "cerritus": 23,
    "duplexdozen": 24,
    "vegrandis": 25,
    "sus": 26,
    "amplius": 27,
    "ex": 28,
    "major": 29,
    "lux": 30,
    "minus": 31,
    "duplexverba": 32,
    "advorsus": 33,
    "plus": 34,
    "falsa": 35,
    "exacte": 36,
    "fortuitus": 37,
    "plas": 38,
    "ego": 39,
    "nisi": 40,
    "non": 41,
    "omnia": 42,
    "hau": 43,
    "quantum": 44,
    "tristis": 45,
    "latinus": 46,
    "ratio": 47,
    "paululus": 48,
    "stultividus": 49,
    "pauxillulus": 50,
    "nonmanet": 51,
    "pravus": 52,
    "sinister": 53,
    "parvolus": 54,
    "ultima": 55,
    "irrationalis": 56,
    "brutus": 57,
    "stolidus": 58,
    "inrationabilis": 59,
    "magna": 60,
    "alogus": 61,
    "insensatus": 62,
    "minor": 63,
    "quadruplexverba": 64,
    "mons": 65,
    "malus": 66,
    "collis": 67,
    "stupidus": 68,
    "jocosus": 69,
    "infinitum": 70,
    "vis": 71,
    "potentia": 72,
    "ops": 73,
    "regnum": 74,
    "ditio": 75,
    "populus": 76,
    "dem": 77,
    "natio": 78,
    "frequento": 79,
    "terribilis": 80,
    "dirus": 81,
    "tremendus": 82,
    "amor": 83,
    "vita": 84,
    "liber": 85,
    "pax": 86,
    "lumen": 87,
    "veritas": 88,
    "sapienta": 89,
    "fortuna": 90,
    "fidelis": 91,
    "honor": 92,
    "justitia": 93,
    "scientia": 94,
    "virtus": 95,
    "aequitas": 96,
    "spes": 151,
    "gratia": 98,
    "dignitas": 99,
    "potestas": 100,
    "libertas": 101,
    "aeternitas": 102,
    "aqua": 103,
    "unda": 104,
    "ignis": 105,
    "flamma": 106,
    "ustrina": 107,
    "ventus": 108,
    "spiritus": 109,
    "aura": 110,
    "terra": 111,
    "tellus": 112,
    "vapor": 113,
    "fumus": 114,
    "fervo": 115,
    "infernum": 116,
    "apocalypsis": 117,
    "pulvis": 118,
    "afa": 119,
    "harenae": 120,
    "arena": 121,
    "litus": 122,
    "fenestra": 123,
    "luminare": 124,
    "solis": 125,
    "sol": 126,
    "stella": 127,
    "quadruplexverbum": 128,
    "eruditio": 129,
    "humanitas": 130,
    "metallum": 131,
    "vale": 132,
    "illustratio": 133,
    "talpa": 134,
    "atomus": 135,
    "individuum": 136,
    "cinis": 137,
    "favilla": 138,
    "aurum": 139,
    "mostrum": 140,
    "belua": 141,
    "rex": 142,
    "basileus": 143,
    "rego": 144,
    "oppidum": 145,
    "urbs": 146,
    "exspiravit": 147,
    "deus": 148,
    "divus": 149,
    "lar": 150,
    "lex": 152,
    "ius": 153,
    "pluvia": 154,
    "promitto": 155,
    "aether": 156,
    "industria": 157,
    "domus": 158,
    "familia": 159,
    "maria": 160,
    "moleculae": 161,
    "crepitus": 162,
    "thesaurus": 163,
    "gaza": 164,
    "opes": 165,
    "pulmenti": 166,
    "sorbitio": 167,
    "piscis": 168,
    "natans": 169,
    "ophthalmias": 170,
    "humano": 171,
    "simia": 172,
    "fidem": 173,
    "bellum": 174,
    "mars": 175,
    "navis": 176,
    "navigium": 177,
    "carina": 178,
    "iudex": 179,
    "theocratia": 180,
    "democratia": 181,
    "vitrum": 182,
    "speculum": 183,
    "atrium": 184,
    "aula": 185,
    "mutatio": 186,
    "caelum": 187,
    "polus": 188,
    "inundatio": 189,
    "diluvio": 190,
    "avis": 191,
    "aves": 192,
    "glacies": 193,
    "refrigero": 194,
    "pecunia": 195,
    "argentum": 196,
    "numus": 197,
    "dives": 198,
    "florus": 199,
    "uber": 200,
    "villa": 201,
    "rus": 202,
    "ordo": 203,
    "praegressus": 204,
    "nubes": 205,
    "calligo": 206,
    "tyrannus": 207,
    "paradoxon": 208,
    "cladis": 209,
    "scelus": 210,
    "pascha": 211,
    "ripae": 212,
    "tumulus": 213,
    "choma": 214,
    "opinio": 215,
    "persuasio": 216,
    "confidentia": 217,
    "fumo": 218,
    "suffitio": 219,
    "nebula": 220,
    "fulgur": 221,
    "fulmen": 222,
    "tempestas": 223,
    "procella": 224,
    "expugnatio": 225,
    "praefuro": 226,
    "grassor": 227,
    "lutum": 228,
    "coenum": 229,
    "illuvies": 230,
    "paupertas": 231,
    "tenuitas": 232,
    "lacuna": 233,
    "stagnum": 234,
    "desertum": 235,
    "meritum": 236,
    "avium": 237,
    "desolo": 238,
    "eremus": 239,
    "pharus": 240,
    "luna": 241,
    "defectus": 242,
    "veniae": 243,
    "condono": 244,
    "dono": 245,
    "impunitas": 246,
    "dimitte": 247,
    "respondere": 248,
    "sors": 249,
    "succedo": 250,
    "nonmagna": 251,
    "conpeto": 252,
    "refero": 253,
    "resonantia": 254,
    "finis": 255
};

function latin_encode(input, sep) {
    let data;
    if (typeof input == "string")
        data = textEncoder.encode(input);
    else
        data = input;

    let ret = "";
    for (let val of data) {
        ret += latinTable[val] + sep;
    }

    ret[0] = ret[0].toUpperCase();

    return ret.substring(0, ret.length - sep.length) + ".";
}

function emoji_decode(text, return_string) {
    let ret = [];

    text = text.replace(".", "").toLowerCase();

    for (let val of text.split(" ")) {
        ret.push(latinTable[val]);
    }

    if (return_string)
        return textDecoder.decode(new Uint8Array(ret));

    return ret;
}