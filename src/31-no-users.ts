let username: string[] = ['john', 'admin', 'alice', 'eric', 'sophie'];

if (username.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let i = 0; i < username.length; i++) {
        if (username[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username[i]}, thank you for logging in again.`);
        }
    }
}

// Emptying the username array
username = [];

if (username.length === 0) {
    console.log("We need to find some users!");
}
