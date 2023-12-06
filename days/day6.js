// Modules
const helpers = require('../helpers');

function puzzle1() {
	//Default variables
	const input = helpers.fileHandler.getFileWithSplit('Day6.txt', '\n');
	let output = 0;

	//Puzzle solving
	const ways2beat = [];
	const times = input[0].match(/[\d]+/g).map(Number);
	const distances = input[1].match(/[\d]+/g).map(Number);

	for (let index = 0; index < times.length; index++) {
		const time = times[index];
		const distance = distances[index];
		let wins = 0;

		for (let holdTheButton = 1; holdTheButton < time; holdTheButton++) {
			const speed = holdTheButton;
			const raceTime = time - holdTheButton;
			const travelledDistance = speed * raceTime;
			if (travelledDistance > distance) wins++;
		}

		ways2beat.push(wins);
	}

	//Output of solution
	output = ways2beat.reduce((acc, cur) => acc * cur, 1);
	return output;
}

function puzzle2() {
	//Default variables
	const input = helpers.fileHandler.getFileWithSplit('Day6.txt', '\n');
	let output = 0;

	//Puzzle solving
	const time = Number(input[0].match(/[\d]+/g).join(''));
	const distance = Number(input[1].match(/[\d]+/g).join(''));

	for (let holdTheButton = 1; holdTheButton < time; holdTheButton++) {
		const speed = holdTheButton;
		const raceTime = time - holdTheButton;
		const travelledDistance = speed * raceTime;
		if (travelledDistance > distance) output++;
	}

	//Output of solution
	return output;
}

module.exports = { puzzle1, puzzle2 };
