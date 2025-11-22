const fs = require('fs')


const data = fs.readFile('./data/dairy.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(error.message);
    }
    else {
        console.log('file content from asysnc read : ');
        console.log(data);
    }
})

console.log('this runs immediately at beginning');