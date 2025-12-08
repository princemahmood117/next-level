// type - guard

type AlphaNeumeric = number | string

const add = (n1:AlphaNeumeric, n2:AlphaNeumeric) : AlphaNeumeric =>  {
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        return n1+n2
    } 
    else {
        return n1.toString() + n2.toString()
    }
    
}
const res = add(2,'2')
console.log(res);
// add(2, '2') ==> // 22 -> concatination


// IN - GUARD

type NormalUSer = {
    name : string
}

type AdminUser = {
    name : string;
    role : 'admin'
}

const getUser = (user : NormalUSer | AdminUser) => {

    if("role" in user) {
        console.log(`The user is ${user.name} and the role is : ${user.role}`);
    }
    else {
        console.log(`${user.name}`);
    }
}

getUser({name : 'Admin', role : 'admin'})


