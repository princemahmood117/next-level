const path = require('path')

console.log('current file info : \n');

console.log('filename : ', __filename, '\n');
console.log('directory name : ', __dirname);


console.log('\n' + "-".repeat(50) + '\n');


// Analyze manual created path
const filePath = '/iftekhar/documents/nextLevel.pdf'

console.log('analyzing path : ', filePath, '\n');

console.log('directory name : ', path.dirname(filePath));

console.log('base name : ', path.basename(filePath));

console.log('extention name : ', path.extname(filePath));

console.log('file name : ', path.basename(filePath, path.extname(filePath))); // excludes the extention



console.log('\n' + "-".repeat(50) + '\n');


const parsedPath = path.parse(filePath)

console.log('parsed path : ', parsedPath);

console.log('\nformated path : ', path.format(parsedPath));