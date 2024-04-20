// Written by TadaHrd.
// If this doesn't work blame him.

// functions
window.chr = String.fromCharCode;
window.ord = char => char.charCodeAt(0);
window.rand = max => Math.floor(Math.random() * (max + 1)) % (max + 1);
window.updateValue = function updateValue(data, type) {
    if (type == "encode")
        window.output.value = window["escaped_".substring(0, 8 * window.escaped) + window.selectedScheme + "_encode"](data, separator.value.replace(/\\n/g, "\n"));
    else if (type == "decode")
        window.input.value = window["escaped_".substring(0, 8 * window.escaped) + window.selectedScheme + "_decode"](data, true);
};
window.updateScheme = function updateScheme(element) {
    window.escaped = element.parentElement.parentElement.querySelector("input[type='checkbox']")?.checked || false;
    window.selectedScheme = element.value;
    updateValue(window.input.value, "encode");
}
window.setEscaped = function setEscaped(element) {
    if (element.name == window.selectedScheme) {
        escaped = element.checked;
        updateValue(window.input.value, "encode");
    }
}
window.randomOfArray = function randomOfArray(array) {
    return array[window.rand(array.length - 1)];
}

// variables
window.textEncoder = new TextEncoder();
window.textDecoder = new TextDecoder();

window.input = document.getElementById("input");
window.output = document.getElementById("output");

window.escaped = false;
window.selectedScheme = "anyway";

window.separator = document.getElementById("separator-text");

// types
window.Bool = Boolean;
window.Num = Number;