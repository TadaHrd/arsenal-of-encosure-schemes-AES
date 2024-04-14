# Latin Encosure Scheme (LES)

This encosure scheme uses latin words to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

Every byte value is a latin word.

| Byte value | Latin word          | Byte value | Latin word       |
| ---------- | ------------------- | ---------- | ---------------- |
| 0          | nihil               | 128        | quadruplexverbum |
| 1          | primus              | 129        | eruditio         |
| 2          | duplex              | 130        | humanitas        |
| 3          | triplex             | 131        | metallum         |
| 4          | quadruplex          | 132        | vale             |
| 5          | inquire             | 133        | illustratio      |
| 6          | mundus              | 134        | talpa            |
| 7          | perfectio           | 135        | atomus           |
| 8          | octo                | 136        | individuum       |
| 9          | novem               | 137        | cinis            |
| 10         | digitorum           | 138        | favilla          |
| 11         | undecim             | 139        | aurum            |
| 12         | dozen               | 140        | mostrum          |
| 13         | nondivisibilis      | 141        | belua            |
| 14         | nol                 | 142        | rex              |
| 15         | inprocerus          | 143        | basileus         |
| 16         | verbum              | 144        | rego             |
| 17         | supernondivisibilis | 145        | oppidum          |
| 18         | parvus              | 146        | urbs             |
| 19         | parvulus            | 147        | exspiravit       |
| 20         | apsens              | 148        | deus             |
| 21         | improcerus          | 149        | divus            |
| 22         | insanis             | 150        | lar              |
| 23         | cerritus            | 151        | spes             |
| 24         | duplexdozen         | 152        | lex              |
| 25         | vegrandis           | 153        | ius              |
| 26         | sus                 | 154        | pluvia           |
| 27         | amplius             | 155        | promitto         |
| 28         | ex                  | 156        | aether           |
| 29         | major               | 157        | industria        |
| 30         | lux                 | 158        | domus            |
| 31         | minus               | 159        | familia          |
| 32         | duplexverba         | 160        | maria            |
| 33         | advorsus            | 161        | moleculae        |
| 34         | plus                | 162        | crepitus         |
| 35         | falsa               | 163        | thesaurus        |
| 36         | exacte              | 164        | gaza             |
| 37         | fortuitus           | 165        | opes             |
| 38         | plas                | 166        | pulmenti         |
| 39         | quit-ego            | 167        | sorbitio         |
| 40         | nisi                | 168        | piscis           |
| 41         | non                 | 169        | natans           |
| 42         | omnia               | 170        | ophthalmias      |
| 43         | hau                 | 171        | humano           |
| 44         | quantum             | 172        | simia            |
| 45         | tristis             | 173        | fidem            |
| 46         | latinus             | 174        | bellum           |
| 47         | ratio               | 175        | mars             |
| 48         | paululus            | 176        | navis            |
| 49         | stultividus         | 177        | navigium         |
| 50         | pauxillulus         | 178        | carina           |
| 51         | nonmanet            | 179        | iudex            |
| 52         | pravus              | 180        | theocratia       |
| 53         | sinister            | 181        | democratia       |
| 54         | parvolus            | 182        | vitrum           |
| 55         | ultima              | 183        | speculum         |
| 56         | irrationalis        | 184        | atrium           |
| 57         | brutus              | 185        | aula             |
| 58         | stolidus            | 186        | mutatio          |
| 59         | inrationabilis      | 187        | caelum           |
| 60         | magna               | 188        | polus            |
| 61         | alogus              | 189        | inundatio        |
| 62         | insensatus          | 190        | diluvio          |
| 63         | minor               | 191        | avis             |
| 64         | quadruplexverba     | 192        | aves             |
| 65         | mons                | 193        | glacies          |
| 66         | malus               | 194        | refrigero        |
| 67         | collis              | 195        | pecunia          |
| 68         | stupidus            | 196        | argentum         |
| 69         | jocosus             | 197        | numus            |
| 70         | infinitum           | 198        | dives            |
| 71         | vis                 | 199        | florus           |
| 72         | potentia            | 200        | uber             |
| 73         | ops                 | 201        | villa            |
| 74         | regnum              | 202        | rus              |
| 75         | ditio               | 203        | ordo             |
| 76         | populus             | 204        | praegressus      |
| 77         | dem                 | 205        | nubes            |
| 78         | natio               | 206        | calligo          |
| 79         | frequento           | 207        | tyrannus         |
| 80         | terribilis          | 208        | paradoxon        |
| 81         | dirus               | 209        | cladis           |
| 82         | tremendus           | 210        | scelus           |
| 83         | amor                | 211        | pascha           |
| 84         | vita                | 212        | ripae            |
| 85         | liber               | 213        | tumulus          |
| 86         | pax                 | 214        | choma            |
| 87         | lumen               | 215        | opinio           |
| 88         | veritas             | 216        | persuasio        |
| 89         | sapienta            | 217        | confidentia      |
| 90         | fortuna             | 218        | fumo             |
| 91         | fidelis             | 219        | suffitio         |
| 92         | honor               | 220        | nebula           |
| 93         | justitia            | 221        | fulgur           |
| 94         | scientia            | 222        | fulmen           |
| 95         | virtus              | 223        | tempestas        |
| 96         | aequitas            | 224        | procella         |
| 97         | spes                | 225        | expugnatio       |
| 98         | gratia              | 226        | praefuro         |
| 99         | dignitas            | 227        | grassor          |
| 100        | potestas            | 228        | lutum            |
| 101        | libertas            | 229        | coenum           |
| 102        | aeternitas          | 230        | illuvies         |
| 103        | aqua                | 231        | paupertas        |
| 104        | unda                | 232        | tenuitas         |
| 105        | ignis               | 233        | lacuna           |
| 106        | flamma              | 234        | stagnum          |
| 107        | ustrina             | 235        | desertum         |
| 108        | ventus              | 236        | meritum          |
| 109        | spiritus            | 237        | avium            |
| 110        | aura                | 238        | desolo           |
| 111        | terra               | 239        | eremus           |
| 112        | tellus              | 240        | pharus           |
| 113        | vapor               | 241        | luna             |
| 114        | fumus               | 242        | defectus         |
| 115        | fervo               | 243        | veniae           |
| 116        | infernum            | 244        | condono          |
| 117        | apocalypsis         | 245        | dono             |
| 118        | pulvis              | 246        | impunitas        |
| 119        | afa                 | 247        | dimitte          |
| 120        | harenae             | 248        | respondere       |
| 121        | arena               | 249        | sors             |
| 122        | litus               | 250        | succedo          |
| 123        | fenestra            | 251        | nonmagna         |
| 124        | luminare            | 252        | conpeto          |
| 125        | solis               | 253        | refero           |
| 126        | sol                 | 254        | resonantia       |
| 127        | stella              | 255        | finis            |

Optionally, the first letter is made uppercase and a dot is added after the last letter.

For example, to turn `A` into LES:
1. Get its ASCII code: 65
2. Look up 65 in the table above: `mons`
3. Make first letter uppercase and add dot at the end: `mons` -> `Mons.`

## Examples

### Hello, world!

```
H: Potentia
e: libertas
l: ventus
l: ventus
o: terra
,: quantum
 : duplexverba
w: afa
o: terra
r: fumus
l: ventus
d: potestas
!: advorsus
dot: .
```

The stuff at the start of every row aren't present in actual encoded data.

The dot is optional. It serves no purpose but is included in encoded data.