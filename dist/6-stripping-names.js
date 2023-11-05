"use strict";
let strippedName = "\t \n    Ali Hassan   \n";
function stripname(name) {
    name.trim();
    return name;
}
let afterStripName = stripname(strippedName);
console.log(`Original Name with Whitespace: ${strippedName}`);
console.log(`Name after Stripping Whitespace: ${afterStripName}`);
