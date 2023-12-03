// Modules
const fs = require('fs');

function getFileWithSplit(filename, split) {
    //Read file
    const data = fs.readFileSync(`./inputs/${ filename }`, 'utf8');
    const stream = data.split(`${ split }`);

    return stream;
}

module.exports = { getFileWithSplit };