require('dotenv').config()

const config = {
    app : {
        name : process.env.APP_NAME || "DefaultAPP",
        version : process.env.APP_VERSION || '1.0.0',
        port : process.env.PORT || 8000
    }
    
}

console.log(config);

module.exports =  config  // using module.exportes because it is a commonjs module


// --------------  steps for env --------------------
// 1. npm init -y
// 2. npm install dotenv
// 3. create '.env' and write configurations inside it
// 4. create '.gitignore' file and write ".env" and "node_modules" inside it