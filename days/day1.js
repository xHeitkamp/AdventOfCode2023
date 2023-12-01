// Modules
const helpers = require('../helpers/helpers');

function puzzle1() {
	//Default variables
	const input = helpers.fileHandler.getInput('Day1.txt', '\n');
	let output = 0;

	//Puzzle solving
	for (let i = 0; i < input.length; i++) {
		let row = input[i];

		//Replace characters in row
		const replacements = [{ original: /[a-z]/gi, replace: '' }];
		row = replaceStrings(row, replacements);

		output += Number(`${row[0]}${row[row.length - 1]}`); //Add the first number and last number togehter together
	}

	//Output auf solution
	console.log(`Puzzle 1: ${output}`);
}

function puzzle2() {
	//Default variables
	const input = helpers.fileHandler.getInput('Day1.txt', '\n');
	let output = 0;

	//Puzzle solving
	for (let i = 0; i < input.length; i++) {
		let row = input[i];

		//Replace characters in row
		const replacements = [
			{ original: 'one', replace: 'one1one' },
			{ original: 'two', replace: 'two2two' },
			{ original: 'three', replace: 'three3three' },
			{ original: 'four', replace: 'four4four' },
			{ original: 'five', replace: 'five5five' },
			{ original: 'six', replace: 'six6six' },
			{ original: 'seven', replace: 'seven7seven' },
			{ original: 'eight', replace: 'eight8eight' },
			{ original: 'nine', replace: 'nine9nine' },
			{ original: /[a-z]/gi, replace: '' },
		];
		row = replaceStrings(row, replacements);

		output += Number(`${row[0]}${row[row.length - 1]}`); //Add the first number and last number togehter together
	}

	//Output auf solution
	console.log(`Puzzle 2: ${output}`);
}

function replaceStrings(input, cases) {
	for (let i = 0; i < cases.length; i++) {
		const element = cases[i];
		input = input.replaceAll(element.original, element.replace);
	}
	return input;
}

module.exports = { puzzle1, puzzle2 };
