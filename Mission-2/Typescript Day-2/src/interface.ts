type User = {
    name : string,
    age : number
}


type Role = {
    role : 'admin' | 'user'
}

type USerRole = User &  Role

const user1 : User = {
    name : "prince",
    age : 20
}
const user2 : USerRole = {
    name : "hasan",
    age : 20,
    role : 'admin'
}


// ? using interface  (only be used with non-primitive data type : object and array)

interface IUser {
    name : string,
    age : number,
    isMarried : boolean
}

const marriedUser : IUser = {
    name : 'navid',
    age : 25,
    isMarried : true
}


// ! extends the type

interface IRole extends IUser {
    role : 'admin' | 'user'   // this is the extended property from Role
}

const extendUser : IRole = {
    name : 'navid',
    age : 25,
    isMarried : true,
    role : 'admin'
}




//  !function

// type Add = (n1 : number, n2 : number) => number   // * normal way

interface IAdd {
    (n1 : number, n2 : number) : number
}

const add : IAdd = (n1 , n2) => {
        return n1 + n2
}

console.log(add(20,30));    


// ! array
// type ArrayType = string[]        // * normal way
// const friends : ArrayType  = ["ashiq", "hossain", "biplo"]


interface IFriend {
    [index : number] : string
}
const friends : IFriend  = ["ashiq", "hossain", "biplo"]