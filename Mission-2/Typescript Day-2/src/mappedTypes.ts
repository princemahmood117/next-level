// mapped types


const arrayOfNumbers : number[] = [1,2,3,4];

const convertedString : string[] = arrayOfNumbers.map((m) => m.toString()) 
console.log(convertedString); 



type AreaNumber = {
    height : number,
    width : number
}

// creating AreaString using map

type AreaString = {
    [value in "height" | "width" | "diagonal"] : string
}

type ArrayBoolean = {
    [value in keyof AreaNumber] : boolean
}

type AreaGeneric<T> = {
    [value in keyof T] : T[value]
}
//  T == {height : string, width : string}
const area1 : AreaGeneric <{height : string, width : number}> =  {
    height : '50',
    width : 50
}


// creating AreaString manually
// type AreaString = {
//     height : string,
//     width : string
// }