"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle = "car";
const user = {
    id: 1122,
    name: 'mahmood',
    address: {
        city: 'dhaka',
    }
};
const getProperties = (obj, key) => {
    return obj[key];
};
const res = getProperties(user, 'address');
console.log('from the function call :', res);
const product = {
    brand: 'hp'
};
const res2 = getProperties(product, 'brand');
console.log('from the function call :', res2);
//# sourceMappingURL=keyOfConstrains.js.map