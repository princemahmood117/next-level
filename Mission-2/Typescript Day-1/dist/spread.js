"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend1 = ['rahim', 'karim', 'hasan'];
const friend2 = ['prince', 'navid', 'sifat'];
console.log(friend1);
friend1.push(...friend2);
console.log(friend1);
// object spread
const user = {
    name: 'prince',
    phone: '1010101010'
};
const anotherUser = {
    hobby: 'gaming',
    color: 'red'
};
const userInfo = { ...user, ...anotherUser };
console.log('userInfo :', userInfo);
// -------------- REST operator
const persons = (...friend) => {
    console.log('from friend invite : ', friend);
    // 'friend' is a rest parameter which will make the input 'an array'
    friend.forEach((f) => console.log(`sent invite to ${f}`));
};
persons('sakib', 'fahim', 'afnan', 'redwan', 'shaikat');
//# sourceMappingURL=spread.js.map