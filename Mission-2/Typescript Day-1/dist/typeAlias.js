"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 123,
    name: {
        firstName: 'tamzid',
        lastName: 'emon'
    },
    contactNo: '0101010101',
    gender: 'male',
    address: {
        division: 'cumilla',
        city: 'chittagong'
    }
};
const user2 = {
    id: 123,
    name: {
        firstName: 'tamzid',
        lastName: 'emon'
    },
    contactNo: '9999888877',
    gender: 'female',
    address: {
        division: 'mawa',
        city: 'dhaka'
    }
};
console.log(user1);
console.log(user2);
const add = (n1, n2) => {
    return n1 * n2;
};
console.log('multiplication :', add(2, 4));
//# sourceMappingURL=typeAlias.js.map