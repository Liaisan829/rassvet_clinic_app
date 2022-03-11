const svgstore = require('svgstore');
const fs = require('fs');
const path = require('path');

let sprite = svgstore();
const type = process.argv[process.argv.length - 1];
const folder = `C:\\Users\\Ольга\\WebstormProjects\\rassvet_clinic_app\\public`; // путь к папке с svg иконками

const getFilesFromFolder = folder => {
	return fs.existsSync(folder)
		? fs
			.readdirSync(folder, { withFileTypes: true })
			.filter(item => !item.isDirectory())
			.map(item => {
				return { name: item.name, folder };
			})
		: [];
};

const generateSprite = (outputPath = './assets/sprite.svg') => {
	const svgSprites = [...getFilesFromFolder(folder)];
	svgSprites.sort((a, b) => a.name.localeCompare(b.name));

	svgSprites.forEach(file => {
		sprite = sprite.add(file.name.split('.')[0], fs.readFileSync(path.join(file.folder, file.name), 'utf8'));
	});

	fs.writeFileSync(outputPath, sprite);
};

generateSprite(`./svg/sprite.svg`); // путь, куда выгрузится sprite
