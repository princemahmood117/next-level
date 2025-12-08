// ENUM ==> set of constant 'string literal'

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
 enum Roles  {
    Admin = 'admin',
    Host = 'host',
    User = 'user',
}

const canEdit = (role : Roles) => {
    if(role === Roles.Admin || role === Roles.Host || role === Roles.User) {
        return true
    }
    else {
        return false
    }
}

const res = canEdit(Roles.Admin)
console.log(res);