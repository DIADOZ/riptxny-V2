// Works with sharp npm module to optimize images
const sharp = require('sharp');
const fs = require('fs');
const directory = './src/assets/images';

// fs.readdirSync(directory).forEach((file) => {
// 	sharp(`${directory}/${file}`)
// 		.resize(800, 800) // width, height
// 		.toFile(`${directory}/${file}-large.jpg`);
// });

sharp(`${directory}/rip-txny-dj.jpeg`)
	.resize(500, 335) // width, height
	.toFile(`${directory}/rip-txny-dj-medium.jpg`);
