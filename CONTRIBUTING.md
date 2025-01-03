# Contributor's' guide

Each ES (Encosure Scheme) is in its own folder.

# ES creation guide

1. Make sure the ES's abbreviation (short name) is unique.
2. Just copy some ES's README.md and edit its contents:
3. Just copy some ES's index.js and edit its contents:
    - At the top, put YOUR name.
    - Change the names of functions, separators, tables.
    - Change the name at the bottom of the file to the short name of your ES.
4. Add its script to the bottom of `index.html`
5. Add it to the ES selection table in `index.html`
6. Update the version ([guide](#updating-the-version))

## TIPS:
- Use functions and variables from `common.js`
- (just figure it out or get someone to make this contributor's' guide better)

# Versioning

Schema: `major.minor` (+ `fix_`)

Examples: `1.0`, `2.5`, `2.5fix1`, `2.5fix128`

## Updating the version

1. The major version gets incremented when something big happens
    - such as a big ES or a certain amount of ESes reached
2. The minor version gets incremented when ES(es) are added.
3. The fix number gets incremented when a bug is fixed (first bug fixed would be `fix1`)