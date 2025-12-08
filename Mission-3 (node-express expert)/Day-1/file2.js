const { a : x } = require("./file1");
const { a : y } = require("./file3");

const {add, subs} = require('./utils')



console.log(x);
console.log(y);


console.log(add(2,4));
console.log(subs(7,3));