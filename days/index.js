// Modules
const fs = require('fs');
const dayPath = require('path').join(__dirname);

const modules = {};

fs.readdirSync(dayPath).forEach((file) => {
	const name = file.replace(/\.js$/, '');
    if (name === 'index' || name.includes('template')) return
	modules[name] = require(`./${file}`);
});

module.exports = modules;
