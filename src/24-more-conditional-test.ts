// Tests for equality and inequality with strings
let fruit = 'apple';

// Test 1: Equality check with strings
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

// Test 2: Inequality check with strings
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');


// Tests using the lowercase function:
let nam = 'JohnDoe';

// Test: Lowercase check
console.log("Is the lowercase of 'nam' == 'johndoe'? I predict True.");
console.log(nam.toLowerCase() == 'johndoe');


// Numerical tests:

let value = 10;

// Test 1: Numerical equality check
console.log("Is value == 10? I predict True.");
console.log(value == 10);

// Test 2: Numerical inequality check
console.log("Is value != 5? I predict True.");
console.log(value != 5);

// Test 3: Greater than check
console.log("Is value > 5? I predict True.");
console.log(value > 5);

// Test 4: Less than check
console.log("Is value < 20? I predict True.");
console.log(value < 20);

// Test 5: Greater than or equal to check
console.log("Is value >= 10? I predict True.");
console.log(value >= 10);

// Test 6: Less than or equal to check
console.log("Is value <= 10? I predict True.");
console.log(value <= 10);


// Tests using "and" and "or" operators:
let x = 8;

// Test 1: Logical AND operation
console.log("Is (x > 5) && (x < 10)? I predict True.");
console.log((x > 5) && (x < 10));

// Test 2: Logical OR operation
console.log("Is (x > 10) || (x < 5)? I predict False.");
console.log((x > 10) || (x < 5));


// Test whether an item is in an array:
const numbers: number[] = [5, 8, 10, 15];

// Test: Check if the item is in the array
console.log("Is 10 in the 'numbers' array? I predict True.");
console.log(numbers.includes(10));


// Test whether an item is not in an array:
// Test: Check if the item is not in the array
console.log("Is 20 not in the 'numbers' array? I predict True.");
console.log(!numbers.includes(20));
