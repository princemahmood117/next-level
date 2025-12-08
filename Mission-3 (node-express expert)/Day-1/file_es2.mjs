// const { a : x } = require("./file1");
// const { a : y } = require("./file3");

// const {add, sub} = require('./utils')

// console.log(add(1,2));
// console.log(sub(9,3));


import {a} from './file_es3.mjs'
import {a as x}  from './file_es1.mjs'

console.log(a);
console.log(x);