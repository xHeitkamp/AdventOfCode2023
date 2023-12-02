// Modules
const helpers = require('../helpers/helpers');

function puzzle1() {
	//Default variables
	const input = helpers.fileHandler.getInput('Day2.txt', '\n');
	let output = 0;

	//Puzzle solving
	const limits = {
		red: 12,
		green: 13,
		blue: 14,
	};
	for (let i = 0; i < input.length; i++) {
		const game = mapRowInformation(input[i]);
		const checkCubes = checkForLimits(game.sets, limits);
		if (checkCubes) output += game.id;
	}

	//Output auf solution
	console.log(`Puzzle 1: ${output}`);
}

function puzzle2() {
	//Default variables
	const input = helpers.fileHandler.getInput('Day2.txt', '\n');
	let output = 0;

	//Puzzle solving
	let setsOfCubes = {
		red: 0,
		green: 0,
		blue: 0,
	};
	for (let i = 0; i < input.length; i++) {
		const game = mapRowInformation(input[i]);
		setsOfCubes = checkForNeededCubes(game.sets, setsOfCubes);
		//Multiply the minimum sets
		let power = 1;
		for (let set in setsOfCubes) {
			power *= setsOfCubes[set];
		}
		output += power;
	}

	//Output auf solution
	console.log(`Puzzle 2: ${output}`);
}

function mapRowInformation(row) {
	const id = Number(row.split(':')[0].split(' ')[1]);
	const rawSets = row.split(':')[1].split(';');
	const sets = []; // [{red: 1, green: 2}, {}]
	for (let i = 0; i < rawSets.length; i++) {
		const elements = rawSets[i].split(',');
		const set = {};
		for (let j = 0; j < elements.length; j++) {
			const element = elements[j].trim().split(' ');
			set[element[1]] = Number(element[0]);
		}
		sets.push(set);
	}
	return {
		id: id,
		sets: sets,
	};
}

function checkForLimits(arr, limits) {
	let checkValue = true;
	for (let i = 0; i < arr.length; i++) {
		const ele = arr[i];
		for (let key in limits) {
			const checking = ele.hasOwnProperty(key)
				? ele[key] <= limits[key]
				: true;
			checkValue = checkValue && checking;
		}
	}
	return checkValue;
}

function checkForNeededCubes(sets, cubes){
	for(let cube in cubes) {
		const values = sets.map(ele => ele[cube]).filter(ele => ele !== undefined);
		cubes[cube] = Math.max(...values);
	}
	return cubes;
}

module.exports = { puzzle1, puzzle2 };
