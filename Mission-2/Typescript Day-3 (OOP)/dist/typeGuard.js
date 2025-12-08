"use strict";
// type - guard
Object.defineProperty(exports, "__esModule", { value: true });
const add = (n1, n2) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
};
const res = add(2, '2');
console.log(res);
const getUser = (user) => {
    if ("role" in user) {
        console.log(`The user is ${user.name} and the role is : ${user.role}`);
    }
    else {
        console.log(`${user.name}`);
    }
};
getUser({ name: 'Admin', role: 'admin' });
//# sourceMappingURL=typeGuard.js.map