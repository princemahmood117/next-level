"use strict";
// * types in js --> string / number / boolean / null / undefined
Object.defineProperty(exports, "__esModule", { value: true });
// * special types in typescript --> never / unknown / void / any
let userName = "hello world"; // explicitely declared the data type
let useId = 120;
userName.toUpperCase(); // all the methods can be used by string is suggested auto based on string only
useId.toFixed(); //  all the methods can be used by number is suggested auto based on number only
// let isAdmin : boolean = false
let isAdmin = false; // implicitely understood the data type
isAdmin = true;
//# sourceMappingURL=primitive.js.map