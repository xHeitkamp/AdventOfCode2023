// Modules
const helpers = require('../helpers');

function puzzle1() {
    //Default variables
	const input = helpers.fileHandler.getFileWithSplit('DayX.txt', '\n');
    let output = 0;

    //Puzzle solving
    output = input.length;

    //Output of solution
    return output;
}

function puzzle2() {
    //Default variables
	const input = helpers.fileHandler.getFileWithSplit('DayX.txt', '\n');
    let output = 0;

    //Puzzle solving
    output = input.length;

    //Output of solution
    return output;
}

module.exports = { puzzle1, puzzle2 };