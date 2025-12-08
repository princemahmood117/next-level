const fs = require('fs')

fs.writeFileSync('./output/temp.txt', 'this is a test file for delete')
console.log('temp file created');


if(fs.existsSync('./output/temp.txt')) {
    console.log('file exists!');

    fs.unlinkSync('./output/temp.txt')
    console.log('file deleted');
}

try {
    fs.unlinkSync('./output/temp.txt')
} catch (error) {
    console.error(error.message);
}



// delete asynchronously
console.log('\n********* this is async delete *********');
fs.writeFile('./output/temp2.txt', 'this is 2nd temporary file for async delete', (error) => {
    if(error) {
        console.log(error.message);
    }
    console.log('another temporary created');



    fs.unlink('./output/temp2.txt', (error) => {
        if(error) {
            console.log('error deleting 2nd temp file');
        }
        else {
            console.log('2nd temp file deleted');
        }
    })
})

