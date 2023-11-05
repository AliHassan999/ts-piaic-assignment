"use strict";
let personName = "ali hassan";
let uppercaseTxt = personName.toUpperCase();
let lowercaseTxt = personName.toLowerCase();
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
let titlecaseTxt = toTitleCase(personName);
console.log(`Original Name: ${personName}`);
console.log(`Uppercase Name: ${uppercaseTxt}`);
console.log(`Lowercase Name: ${lowercaseTxt}`);
console.log(`Titlecase Name: ${titlecaseTxt}`);
