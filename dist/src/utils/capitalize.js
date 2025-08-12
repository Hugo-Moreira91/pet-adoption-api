"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.capitalizeAll = capitalizeAll;
function capitalize(text) {
    if (!text)
        return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function capitalizeAll(text) {
    return text
        .toLowerCase()
        .split(" ")
        .map(word => capitalize(word))
        .join(" ");
}
