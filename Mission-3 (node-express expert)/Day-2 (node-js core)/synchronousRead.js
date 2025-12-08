const fs = require("fs")

try {
    const data = fs.readFileSync('./data/dairy.txt', 'utf-8') // synchrnous file read
    console.log('file content : ');
    console.log(data);
    
} catch (error) {
    console.log(error.message);
}

console.log('finished executing one by one, then this line executes');