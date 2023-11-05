function show_magician(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician names
const magicianName: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];

// Calling the function to modify magician names and then displaying the modified names
const greatMagicians = make_great(magicianName);
show_magician(greatMagicians);
