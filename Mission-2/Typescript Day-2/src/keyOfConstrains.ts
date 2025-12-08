

type RichPeopleVehicle = {
    car : string,
    bike : string,
    cng : string
}

type MyVehicle = "bike" | "car" | "cng"


type MyVehicle2 = keyof RichPeopleVehicle  // car/bike/cng these are the key of type RichPeopleVehicle


const vehicle : MyVehicle2 = "car" 






// ! key of constrains

// type User = { 
//     id : number,
//     name : string,
//     address : {
//         city : string,
//     }
// }

// const user : User = {
//     id : 1122,
//     name: 'mahmood',
//     address : {
//         city : 'dhaka',
//     }
// }

// make a function for this object

// const getProperties = (obj : User, key : keyof User) => {  // this only takes type 'User'
//     return obj[key]
// }

// const res = getProperties(user, 'address')

// console.log('from the function call :', res);





// ? using generic

type User = { 
    id : number,
    name : string,
    address : {
        city : string,
    }
}

const user : User = {
    id : 1122,
    name: 'mahmood',
    address : {
        city : 'dhaka',
    }
}

const getProperties = <X> (obj : X, key : keyof X) => {  // using generic (dynamic) type for any object
    return obj[key]
}


const res = getProperties(user, 'address')

console.log('from the function call :', res);

const product = {
    brand : 'hp'
}
const res2 = getProperties(product, 'brand')
console.log('from the function call :', res2);
