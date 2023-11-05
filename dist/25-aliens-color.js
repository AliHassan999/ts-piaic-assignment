"use strict";
// Version that passes the if test:
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
// Version that fails the if test:
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
