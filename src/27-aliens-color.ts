//Version where the if block is executed:
let alienColor: string = 'green';

if (alienColor === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else if(alienColor=== 'yellow') {
    console.log("Player just earned 10 points for shooting the Yellow alien.");
} else {
    console.log("Player just earned 15 points for shooting the Red alien.");
}


// Version where the else if block is executed:
alienColor = 'yellow';

if (alienColor === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else if(alienColor=== 'yellow') {
    console.log("Player just earned 10 points for shooting the Yellow alien.");
} else {
    console.log("Player just earned 15 points for shooting the Red alien.");
}
// Version where the else block is executed:
alienColor = 'red';

if (alienColor === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else if(alienColor=== 'yellow') {
    console.log("Player just earned 10 points for shooting the Yellow alien.");
} else {
    console.log("Player just earned 15 points for shooting the Red alien.");
}