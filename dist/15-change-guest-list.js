"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestLists = void 0;
const guestLists = ["Usman", "Azhar", "Salman"];
exports.guestLists = guestLists;
console.log("Original Guest List:");
guestLists.forEach((person) => {
    console.log(person);
});
const notcoming = "Salman";
console.log(`Unfortunately, ${notcoming} can't attend.`);
const newGuest = "Ayaz";
const indxNotComing = guestLists.indexOf(notcoming);
if (indxNotComing !== -1) {
    guestLists[indxNotComing] = newGuest;
}
console.log("\n Updated Guest List:");
guestLists.forEach((person) => {
    console.log(person);
});
guestLists.forEach((person) => {
    console.log(`Dear ${person}, I would like to invite you to dinner. Your presence would be an honor.`);
});
