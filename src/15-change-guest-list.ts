const guestLists: string[] = ["Usman", "Azhar", "Salman"];

console.log("Original Guest List:");
guestLists.forEach((person: string) => {
    console.log(person);
});
const notcoming: string = "Salman";
console.log(`Unfortunately, ${notcoming} can't attend.`);
const newGuest: string = "Ayaz";

const indxNotComing: number = guestLists.indexOf(notcoming);
if (indxNotComing !== -1) {
    guestLists[indxNotComing] = newGuest;
}

console.log("\n Updated Guest List:");
guestLists.forEach((person: string) => {
    console.log(person);
});

guestLists.forEach((person: string) => {
    console.log(`Dear ${person}, I would like to invite you to dinner. Your presence would be an honor.`);
});

export { guestLists };