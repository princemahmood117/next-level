"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    // parent class method
    sleeps(hours) {
        console.log(`${this.name} sleeps for ${hours} hours`);
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
    // student own method
    doStudy(hours) {
        console.log(`${this.name} studies for ${hours} hours`);
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    // teacher own method
    doTeach(hours) {
        console.log(`${this.name} teaches for ${hours} hours`);
    }
}
// function instance guard
const isStudent = (user) => {
    return user instanceof Teacher; // true or false
};
const isTeacher = (user) => {
    return user instanceof Teacher; // returns true or false
};
// instance guard
const userInfo = (user) => {
    if (user instanceof Student) { // directly inherits from Student Class
        user.doStudy(10);
    }
    else if (isTeacher(user)) { // using function guard
        user.doTeach(12);
    }
    else { // not from Student or Teacher, only inherits Person Class
        user.sleeps(6);
    }
};
const stud1 = new Student("Navid student"); // stud1 is the instance of Student Class
const teac1 = new Teacher('Prince teacher'); // stud1 is the instance of Teacher Class
// sending the instances to function call
userInfo(stud1);
userInfo(teac1);
const person1 = new Person('person');
userInfo(person1);
//# sourceMappingURL=instanceGuard.js.map