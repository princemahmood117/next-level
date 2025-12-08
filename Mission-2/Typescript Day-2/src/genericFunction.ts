const createArray = (value : string) => {
    const [arr] = value.split(" ")
    console.log(arr);   

}
createArray('this is very good');


const createArraywithString = (value : string) => [value]

const createArraywithNumber = (value : number) => [value]

const createArraywithObject = (value : {id : number, name : string}) => [value]


const arayString = createArraywithString('apple')
const arayNumber = createArraywithNumber(117)
const arayObject = createArraywithObject({
    id : 123,
    name : 'good job'
})



// GENERIC FUNCTION ---> instead of same-multiple function, create one function

const createWithGeneric = <T> (value : T) => [value]


const arayStringGeneric = createWithGeneric('apple')
const arayNumberGeneric = createWithGeneric(117)
const arayObjectGeneric = createWithGeneric({
    id : 123,
    name : 'good job'
})


// tuple

// manual
const createArrayWithTuple = (value1 : string, value2 : string) => {
    return [value1, value2]
}

// using generic
const createArrayTupleWithGeneric = <X,Y> (par1 : X, par2 : Y) => {  // dynamically type assign
    return [par1 ,par2]
}

const result1 =  createArrayTupleWithGeneric('prince', true)



const addStudent  = <T> (studInfo : T) => {
    return {
        course : 'next level',
        ...studInfo
    }
}

const stud1 = {
    id : 123,
    name : 'navid',
    hasPen : true,
}

const stud2 = {
    id : 117,
    name : 'tanvir',
    hasCar : true,
    isMarried : false
}


const res = addStudent(stud1)
const res2 = addStudent(stud2)
console.log(res);
console.log(res2);
