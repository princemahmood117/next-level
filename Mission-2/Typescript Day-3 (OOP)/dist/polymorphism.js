"use strict";
// polymorphism  -> different behavior
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    getSound() {
        console.log('animal sound kore');
    }
}
class Human extends Animal {
    getSound() {
        console.log('manush kotha bole');
    }
}
const getClassSound = (sound) => {
    sound.getSound();
};
const animalObj = new Animal();
const humanObj = new Human();
getClassSound(humanObj);
// humanObj.getSound()
// EX : 2
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * (this.radius * this.radius);
    }
}
class Ractangle extends Shape {
    height;
    width;
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const getAreaInfo = (param) => {
    console.log(param.getArea());
};
const shapeInfo = new Shape();
const circleInfo = new Circle(2);
const rectangleInfo = new Ractangle(2, 4);
getAreaInfo(rectangleInfo); // different instances gives different results
//# sourceMappingURL=polymorphism.js.map