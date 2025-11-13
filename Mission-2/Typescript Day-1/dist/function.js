"use strict";
// normal function / arrow function
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
console.log('sum from normal function :', sum(10, 20));
// console.log(sum(10,'20')); // Argument of type 'string' is not assignable to parameter of type 'number'
const addArrow = (num1, num2) => { return num1 + num2; };
console.log('add from arrow function :', addArrow(2, 5));
// function inside object
const user = {
    name: 'prince',
    balance: 100,
    addBalance(newBalance) {
        const totalBalance = this.balance + newBalance;
        return totalBalance;
    }
};
console.log('using function inside an object :', user.addBalance(70));
// function inside loop
const arr = [1, 4, 6];
const squreArray = arr.map((element) => element * element);
console.log('squre array :', squreArray);
//# sourceMappingURL=function.js.map