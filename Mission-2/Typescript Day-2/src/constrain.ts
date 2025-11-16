// constarin --> strict rules

// "extends Student" means the Type has strict rule that there will must be properties present in the object from ==> " type Student "


type Student = {id : number, name : string, dOb : string, class : string}

const addStudent  = <T extends Student> (studInfo : T) => {
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

const stud3 = {
    id : 200,
    name : 'janmal',
    hasCar : true,
    isMarried : false,
    dOb : '12 february',
    class : '09'
}

const res = addStudent(stud3)
console.log(res);

