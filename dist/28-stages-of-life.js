"use strict";
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
age = 25;
switch (true) {
    case age < 2:
        console.log("The person is a baby.");
        break;
    case age >= 2 && age < 4:
        console.log("The person is a toddler.");
        break;
    case age >= 4 && age < 13:
        console.log("The person is a kid.");
        break;
    case age >= 13 && age < 20:
        console.log("The person is a teenager.");
        break;
    case age >= 20 && age < 65:
        console.log("The person is an adult.");
        break;
    default:
        console.log("The person is an elder.");
}
