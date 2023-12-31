let moreGuest: string[] = ["Usman", "Azhar", "Salman"];
console.log("Good news! We found a bigger dinner table. There's more room for everyone!");

// Add a new guest to the beginning of the array
moreGuest = ["Arsalan", ...moreGuest];

const newGuestMiddle = "Aun"; 
const middleIndex = Math.floor(moreGuest.length / 2);
moreGuest.splice(middleIndex, 0, newGuestMiddle);

const newGuestEnd = "Mohsin"; 
moreGuest.push(newGuestEnd);

moreGuest.forEach((person: string) => {
    console.log(`Dear ${person}, I would like to invite you to dinner. Your presence would be an honor.`);
});

// Question 19 Answer
console.log(`${moreGuest.length} peoples are coming to the dinner`);

export { moreGuest };


