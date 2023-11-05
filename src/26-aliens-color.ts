//Version where the if block is executed:
let alieColor: string = 'green';

if (alieColor === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else {
    console.log("Player just earned 10 points.");
}


// Version where the else block is executed:
alieColor = 'red';

if (alieColor === 'green') {
    console.log("Player just earned 5 points for shooting the green alien.");
} else {
    console.log("Player just earned 10 points for shooting the alien.");
}
