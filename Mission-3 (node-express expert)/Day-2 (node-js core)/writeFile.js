const fs = require("fs")

const synchronousWriting = "this is synchoronous writing \n i am learning node s core concept"

try {
    fs.writeFileSync('./output/syncWrite.txt', synchronousWriting)
    console.log('sysnchronous file written');
} catch (error) {
    console.error(error.message);
}



const asynchronousWriting = "This is asynchronous wrting \n i am learning typescript"

fs.writeFile('./output/asyncWrite.txt', asynchronousWriting, (error) => {
    if(error) {
        console.error(error.message);
    }
    else {
        console.log('async file written');
    }

})