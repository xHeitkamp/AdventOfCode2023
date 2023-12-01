// Modules
const helpers = require('../helpers/helpers');

function puzzle1() {
    //Default variables
	const input = helpers.fileHandler.getInput('DayX-1.txt', '\n');
    let output;

    //Puzzle solving
    output = input.length;

    //Output auf solution
    console.log(`Puzzle 1: ${ output }`);
}

function puzzle2() {
    //Default variables
	const input = helpers.fileHandler.getInput('DayX-2.txt', '\n');
    let output;

    //Puzzle solving
    output = input.length;

    //Output auf solution
    console.log(`Puzzle 2: ${ output }`);
}

module.exports = { puzzle1, puzzle2 };