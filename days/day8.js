// Modules
const helpers = require('../helpers');

function puzzle1() {
	//Default variables
	const input = helpers.fileHandler.getFileWithSplit('Day8.txt', '\n');
	let output = 0;

	//Puzzle solving
	const { instructions, documents } = inputParser(input);
	let steps = 0;
	let currentNote = 'AAA';
	do {
		const navigation = instructions[steps % instructions.length];
		currentNote = documents[currentNote][navigation];
		steps++;
	} while (currentNote !== 'ZZZ');
	output = steps;

	//Output of solution
	return output;
}

function puzzle2() {
	//Default variables
	const input = helpers.fileHandler.getFileWithSplit('Day8.txt', '\n');
	let output = 0;

	//Puzzle solving
	const { instructions, documents } = inputParser(input);
	let steps = 0;
	let currentNotes = Object.keys(documents).filter(
		(ele) => ele.charAt(2) === 'A'
	);
	while (
		currentNotes.filter((ele) => ele.charAt(2) === 'Z').length !==
		currentNotes.length
	) {
		const navigation = instructions[steps % instructions.length];
		for (let index = 0; index < currentNotes.length; index++) {
			currentNotes[index] = documents[currentNotes[index]][navigation];
		}
		steps++;
	}
	output = steps;

	//Output of solution
	return output;
}

function inputParser(input) {
	const instructions = input[0].split('');
	const documents = {};

	for (let index = 2; index < input.length; index++) {
		const row = input[index];
		const matches = row.match(/[A-Z\d]+/g);
		documents[matches[0]] = { L: matches[1], R: matches[2] };
	}

	return { instructions, documents };
}

module.exports = { puzzle1, puzzle2 };
