"use strict";
// Array containing ordinalNumber 1 through 9
let ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array and print the proper ordinal ending for each number
for (let i = 0; i < ordinalNumber.length; i++) {
    let number = ordinalNumber[i];
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
