// Days
const days = require('../days');

const valid_arguments = 3;
const args = process.argv.slice(2); // Get the command-line arguments

// Check if the required number of arguments is provided
if (args.length === 0 || args.length > valid_arguments) {
	console.log(
		'Usage: npm run day <day[1-25]> <?puzzle[1|2]> <performance[true|false]'
	);
	process.exit(1);
}

// Extract the arguments
const day = parseInt(args[0]);
const puzzle = parseInt(args[1]);
const performance = Boolean(args[2]);

// Check if the arguments are valid numbers
if (isNaN(day) || day < 1 || day > 25) {
	console.log('Invalid argument. Please set <day> as a valid number.');
	process.exit(1);
}
if ((isNaN(puzzle) && args.length < 1) || puzzle < 1 || puzzle > 2) {
	console.log('Invalid argument. Please set <puzzle> as a valid number.');
	process.exit(1);
}

let outputString = '';
const dayRequire = `day${day}`;

const startTimer = Date.now();
if (isNaN(puzzle)) {
	outputString += `Puzzle 1: ${days[dayRequire].puzzle1()}\n`;
	outputString += `Puzzle 2: ${days[dayRequire].puzzle2()}\n`;
} else if (puzzle === 1) {
	outputString += `Puzzle 1: ${days[dayRequire].puzzle1()}\n`;
} else if (puzzle === 2) {
	outputString += `Puzzle 2: ${days[dayRequire].puzzle2()}\n`;
}
const stopTimer = Date.now();

if (performance) {
	outputString += `Execution time: ${stopTimer - startTimer}ms`;
}

console.log(outputString);