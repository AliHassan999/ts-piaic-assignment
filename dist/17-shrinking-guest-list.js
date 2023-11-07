"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shrinkingGuestList = void 0;
let shrinkingGuestList = ["Arsalan", "Usman", "Azhar", "Aun", "Salman", "Mohsin"];
exports.shrinkingGuestList = shrinkingGuestList;
console.log("Unfortunately, we can only invite two people for dinner.");
while (shrinkingGuestList.length > 2) {
    const removedGuest = shrinkingGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
shrinkingGuestList.forEach((person) => {
    console.log(`Dear ${person}, you're still invited to dinner.`);
});
shrinkingGuestList.splice(0, 2);
console.log("Final Guest List:", shrinkingGuestList);
