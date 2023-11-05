"use strict";
function makeSandwich(...items) {
    console.log("Creating a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Sandwich complete!");
}
// Making different sandwiches
makeSandwich('Bread', 'Cheese', 'Tomato', 'Lettuce');
makeSandwich('Bread', 'Ham', 'Cheese');
makeSandwich('Bread', 'Peanut Butter', 'Jelly');
