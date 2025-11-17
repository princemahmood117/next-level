// polymorphism  -> different behavior


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



const getClassSound = (sound : Animal) => {
    sound.getSound()
}


const animalObj = new Animal()
const humanObj = new Human()

getClassSound(humanObj)

// humanObj.getSound()










// EX : 2

class Shape {

    getArea() : number {
        return 0
    }
}


class Circle extends Shape {

    radius : number;

    constructor(radius : number) {
        super()
        this.radius = radius
    }

    getArea() : number {
        return Math.PI*(this.radius*this.radius)
    }
}


class Ractangle extends Shape {
    height : number;
    width : number;

    constructor(height:number, width : number) {
        super()
        this.height = height;
        this.width = width
    }

    getArea() : number {
        return this.height * this.width
    }
}


const getAreaInfo = (param : Shape) => {
    console.log(param.getArea());
}



const shapeInfo = new Shape()
const circleInfo = new Circle(2)
const rectangleInfo = new Ractangle(2,4)

getAreaInfo(rectangleInfo)  // different instances gives different results


