import dotenv from "dotenv";
import path from "path";

// dotenv.config()  // just call the config() without mentioning the path

dotenv.config({path: path.join(process.cwd(), '.env')})  // includes the path


/* if the 'env' file is in another path : 

dotenv.config({path: path.join(process.cwd(), '.env')}) 

-- 'path' will be imported
---> cwd: current working directory */





// contents from .env file into centralized file
const config = {
   node_env : process.env.NODE_ENV ? Number(process.env.NODE_ENV) : 5000,
   port : process.env.PORT
}

export default config

