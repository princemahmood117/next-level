"use strict";
// ENUM ==> set of constant 'string literal'
Object.defineProperty(exports, "__esModule", { value: true });
// type User = 'admin' | 'user' | 'host'
// const canEdit = (value : User) => {
//     if(value === 'admin' || value === 'host' || value === 'user') {
//         return true
//     }
//     else {
//         return false
//     }
// }
// const result = canEdit('admin')
// console.log(result);
// ? using ENUM
// type User = 'admin' | 'user' | 'host'
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["Host"] = "host";
    Roles["User"] = "user";
})(Roles || (Roles = {}));
const canEdit = (role) => {
    if (role === Roles.Admin || role === Roles.Host || role === Roles.User) {
        return true;
    }
    else {
        return false;
    }
};
const res = canEdit(Roles.Admin);
console.log(res);
//# sourceMappingURL=enum.js.map