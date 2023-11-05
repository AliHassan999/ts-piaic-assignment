function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

// Array of magician names
const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// Calling the function to display magician names
show_magicians(magicianNames);
