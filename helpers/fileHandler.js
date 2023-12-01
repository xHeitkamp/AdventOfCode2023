// Modules
const fs = require('fs');

function getInput(filename, split) {
    //Read file
    const data = fs.readFileSync(`./inputs/${ filename }`, 'utf8');
    const stream = data.split(`${ split }`);

    return stream;
}

module.exports = { getInput };