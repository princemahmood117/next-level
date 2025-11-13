type UserType = {
    id : number,
    name  : {
        firstName : string,
        lastName : string
    },
    contactNo: string,
    gender : 'male' | 'female',
    address : {
        division : string,
        city : string
    } 
}


const user1 : UserType = {
    id : 123,
    name : {
        firstName : 'tamzid',
        lastName : 'emon'
    },
    contactNo : '0101010101',
    gender : 'male',
    address : {
        division : 'cumilla',
        city : 'chittagong'
    }
}


const user2 : UserType = {
    id : 123,
    name : {
        firstName : 'tamzid',
        lastName : 'emon'
    },
    contactNo : '9999888877',
    gender : 'female',
    address : {
        division : 'mawa',
        city : 'dhaka'
    }
}

console.log(user1);
console.log(user2);

type AddFunc = (n1 : number, n2 : number) => number // pre-defined the types of the funtion

const add : AddFunc = (n1,n2) => {
    return n1*n2
}
console.log('multiplication :', add(2,4));