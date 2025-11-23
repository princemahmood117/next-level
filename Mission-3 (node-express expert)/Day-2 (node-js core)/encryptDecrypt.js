const crypto = require('crypto')

const algorithm = 'aes-256-cbc'

const key = crypto.randomBytes(32)

const iv = crypto.randomBytes(16)

function encryption(text) {
    const cipherText = crypto.createCipheriv(algorithm, key, iv)
    let encrypt = cipherText.update(text, 'utf-8', 'hex')
    encrypt = encrypt + cipherText.final('hex') 

    return  {
        iv : iv.toString('hex'),
        encryptedData : encrypt
    }

}


function decrypt(encryptedData, ivHex) {
    const decipherText = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex, 'hex'))

    let decrypted = decipherText.update(encryptedData, 'hex', 'utf-8')
    decrypted = decrypted + decipherText.final('utf-8')

    return decrypted
}

const sensitiveData = 'my credit card : 4242 4242';
console.log('original data : ', sensitiveData);


const encrypted = encryption(sensitiveData)

console.log('encrypted data : ', encrypted );


console.log('---------- decrypted data ---------');

const decrypted = decrypt(encrypted.encryptedData, encrypted.iv)
console.log('decrypted data : ', decrypted);
