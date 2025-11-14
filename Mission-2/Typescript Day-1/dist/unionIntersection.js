"use strict";
// ! union  --> |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === 'admin') {
        return "Admin Dashboard";
    }
    else if (role === 'user') {
        return 'User Dashboard';
    }
    else {
        return "Guest Dashboard";
    }
};
console.log(getDashboard('user'));
const worker = {
    name: 'Tareq Zia',
    id: '117',
    phone: '101010101',
    designation: 'manager',
    teamSize: 20
};
console.log(worker);
//# sourceMappingURL=unionIntersection.js.map