
let travelDestinations: string[] = ["Kuwait", "Canada", "Australia", "Egypt", "Germnay"];

console.log("Original order:", travelDestinations);

console.log("Alphabetical order:", [...travelDestinations].sort());

console.log("Original order (again):", travelDestinations);

console.log("Reverse alphabetical order:", [...travelDestinations].sort().reverse());

console.log("Original order (again):", travelDestinations);

travelDestinations = travelDestinations.reverse();
console.log("Reversed order:", travelDestinations);

travelDestinations = travelDestinations.reverse();
console.log("Back to original order:", travelDestinations);

travelDestinations = travelDestinations.sort();
console.log("Sorted in alphabetical order:", travelDestinations);

travelDestinations = travelDestinations.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", travelDestinations);
