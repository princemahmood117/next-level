// dynamically generalize


const friends : string[] = ["Asim", "Basim", "Altair", "Bayek"] 


const rollNumbers : Array<number> = [4, 7, 11]   // this is another way to declare the type





// ! generic way for type definition 

type GenericArray<value> = Array<value>

const enemies : GenericArray<string> = ["Asim", "Basim", "Altair", "Bayek"] 
const rolls : GenericArray<number> = [10, 20, 30] 
const bools : GenericArray<boolean> = [true, false, true,true] 


// ? generic for tuple
type Coordinates<X,Y> = [X, Y]

const coordinatesNumber : Coordinates<number, number> = [15, 20]

const coordinatesString : Coordinates<string, string> = ['15', '20']


// ? generic for object
type User = {name : string, age : number}
const userList : GenericArray<User> = [
    {
    name : 'navid',
    age : 22,
},
    {
    name : 'prince',
    age : 25
}
]