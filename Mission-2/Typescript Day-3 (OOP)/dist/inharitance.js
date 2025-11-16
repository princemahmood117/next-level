"use strict";
//  here name + age + address are common properties of both class
Object.defineProperty(exports, "__esModule", { value: true });
class ParentClass {
    name;
    age;
    addres;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.addres = address;
    }
}
class Student extends ParentClass {
    // constructor and super is automatically called by typescript since there is no extra property in Student Class from ParentClass. If there was extra property, then super and construnctor would have been written just like the Teacher Class
    talentedStud(numOfHours) {
        console.log(`${this.name} is a good student who sleeps for ${numOfHours} hours`);
    }
}
const student1 = new Student("prince", 22, 'jatrabari');
student1.talentedStud(5);
class Teacher extends ParentClass {
    designation; // extra property
    constructor(name, age, address, designation) {
        super(name, age, address); // initializer of parent class
        this.designation = designation; // own property
    }
    getDesignation() {
        console.log(`the designation is : ${this.designation}`);
    }
}
const teacher1 = new Teacher('hasan', 45, 'naraynganj', 'professor');
teacher1.getDesignation();
//# sourceMappingURL=inharitance.js.map