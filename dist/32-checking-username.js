"use strict";
let current_users = ['John', 'Alice', 'Bob', 'Emma', 'Oliver'];
let new_users = ['Alice', 'David', 'emma', 'Sophie', 'Liam'];
function isUserAvailable(username) {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}
for (let i = 0; i < new_users.length; i++) {
    if (isUserAvailable(new_users[i])) {
        console.log(`The username '${new_users[i]}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_users[i]}' is available.`);
    }
}
