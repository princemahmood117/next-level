"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value; // this is assertion ==> now methods will show only for string
const convertion = (num) => {
    if (typeof num === 'number') {
        return num * 1000;
    }
    else if (typeof num === 'string') {
        const [splittedValue] = num.split(" ");
        return `conveted output is ${Number(splittedValue) * 1000}`;
    }
};
const res1 = convertion(100);
const res2 = convertion('100 kg');
console.log(res1);
console.log(res2);
2;
// ! use Assertion when you are 100% sure the type of the value
//# sourceMappingURL=assertion.js.map