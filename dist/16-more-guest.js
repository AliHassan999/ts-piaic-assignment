"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moreGuest = void 0;
let moreGuest = ["Usman", "Azhar", "Salman"];
exports.moreGuest = moreGuest;
console.log("Good news! We found a bigger dinner table. There's more room for everyone!");
// Add a new guest to the beginning of the array
exports.moreGuest = moreGuest = ["Arsalan", ...moreGuest];
const newGuestMiddle = "Aun";
const middleIndex = Math.floor(moreGuest.length / 2);
moreGuest.splice(middleIndex, 0, newGuestMiddle);
const newGuestEnd = "Mohsin";
moreGuest.push(newGuestEnd);
moreGuest.forEach((person) => {
    console.log(`Dear ${person}, I would like to invite you to dinner. Your presence would be an honor.`);
});
// Question 19 Answer
console.log(`${moreGuest.length} peoples are coming to the dinner`);
