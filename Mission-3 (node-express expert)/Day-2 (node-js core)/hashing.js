// hashing

const crypto = require('crypto')


const password = 'password123'

const mdHash = crypto.createHash('md5').update(password).digest('hex') // not recommanded

console.log('\nnormal input : ', password);
console.log('md5 hashed password : ', mdHash);



const sha256Hash = crypto.createHash('sha256').update(password).digest('hex')

console.log('\nnormal input : ', password);
console.log('sha256 hashed password : ', sha256Hash);


const sha512Hash = crypto.createHash('sha512').update(password).digest('hex')

console.log('\nnormal input : ', password);
console.log('sha512 hashed password : ', sha512Hash);


// crypto.createHash('hash_type').update(given_password).diest('hex')