"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// dotenv.config()  // just call the config() without mentioning the path
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') }); // includes the path
/* if the 'env' file is in another path :

dotenv.config({path: path.join(process.cwd(), '.env')})

-- 'path' will be imported
---> cwd: current working directory */
// contents from .env file into centralized file
const config = {
    node_env: process.env.NODE_ENV ? Number(process.env.NODE_ENV) : 5000,
    port: process.env.PORT
};
exports.default = config;
