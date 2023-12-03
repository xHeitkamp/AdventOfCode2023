// Modules
const helpers = require('../helpers');

function puzzle1() {
    //Default variables
	const input = helpers.fileHandler.getInput('DayX-1.txt', '\n');
    let output;

    //Puzzle solving
    output = input.length;

    //Output auf solution
    return output;
}

function puzzle2() {
    //Default variables
	const input = helpers.fileHandler.getInput('DayX-2.txt', '\n');
    let output;

    //Puzzle solving
    output = input.length;

    //Output auf solution
    return output;
}

module.exports = { puzzle1, puzzle2 };