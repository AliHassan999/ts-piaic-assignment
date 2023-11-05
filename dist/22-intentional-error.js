"use strict";
const countriesList = ["France", "Japan", "Canada", "Brazil", "Australia"];
console.log("List of Countries:");
countriesList.forEach((country) => {
    console.log(country);
});
// Intentional error: Accessing an index that exceeds the array length
console.log("Intentional Error:", countriesList[10]);
if (countriesList.length > 10) {
    console.log("The index is valid:", countriesList[10]);
}
else {
    console.log("Error: Index does not exist in the array.");
}
