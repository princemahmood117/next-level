// types in js ---> array / object 

// ! -------------------- ARRAY -------------------------------

const bazar : string[] = ['milk', 'achar', 'kola']   // only string type array

const taka : number[] = [100, 200, 300]   // only string type array

const mixedValues : (string | number)[]  = ["kola", 12, "ruti", 10]  // (string | number) type array


// tuple --> fixed length array where each element has a specific type & position

const tupleNum : [number,number] = [20,30]

const tupleString : [string,string] = ['20', '30']

const tupleStringAndNumber : [string,number] = ['20', 30]  // order should be  maintained 



// ! ------------------------ OBJECT --------------------------------

// const person : {firstName : string, middleName? : string, lastName : string , age : number, organization : "Programming Hero"} = { 
//     firstName : 'iftekhar',
//     // middleName : 'mahmood',
//     // if type of key is written but the key is not inside the object then it will throw an error as after definig the type it is mandatory to write the key. To overcome this, we can use optional chaining in the type-definition
//     middleName : 'mahmood',
//     lastName : 'prince',
//     age : 25,
//     organization : // value is assigned as the type --> 'literal type' this will never changed
// }

// person.firstName = 'navid'  // first name will be changed into 'navid'

// console.log(person);




// another method 
const person : {firstName : string, middleName? : string, lastName : string , age : number, readonly organization : string} = { 
    firstName : 'iftekhar',
    middleName : 'mahmood',
    lastName : 'prince',
    age : 25,
    organization : 'techpark', // ?  readonly organization => access modifier / literal type
}

// person.organization = 'navid'  // this will be error cz organization's value is read-only and it cannot be changed

console.log(person);

