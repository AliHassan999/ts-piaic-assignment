function show_magic(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_greats(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician names
const magicianNam: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// Calling the function to modify a copy of magician names and then displaying both arrays
const greatMagic = make_greats([...magicianNam]); // Using spread operator to create a copy
show_magic(magicianNam); // Original array remains unchanged
show_magic(greatMagic); // Array with 'the Great' added to magician names
