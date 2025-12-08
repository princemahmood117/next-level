"use strict";
// constarin --> strict rules
Object.defineProperty(exports, "__esModule", { value: true });
const addStudent = (studInfo) => {
    return {
        course: 'next level',
        ...studInfo
    };
};
const stud1 = {
    id: 123,
    name: 'navid',
    hasPen: true,
};
const stud2 = {
    id: 117,
    name: 'tanvir',
    hasCar: true,
    isMarried: false
};
const stud3 = {
    id: 200,
    name: 'janmal',
    hasCar: true,
    isMarried: false,
    dOb: '12 february',
    class: '09'
};
const res = addStudent(stud3);
console.log(res);
//# sourceMappingURL=constrain.js.map