const fs = require("fs")


// synchronous writing
const synchronousWriting = "this is synchoronous writing \n i am learning node's core concept"

try {
    fs.writeFileSync('./output/syncWrite.txt', synchronousWriting)
    console.log('sysnchronous file written');
} catch (error) {
    console.error(error.message);
}


// synchronous writing
const asynchronousWriting = "This is asynchronous wrting \n i am learning typescript"

fs.writeFile('./output/asyncWrite.txt', asynchronousWriting, (error) => {
    if(error) {
        console.error(error.message);
    }
    else {
        console.log('asynchronous file written');
    }

})