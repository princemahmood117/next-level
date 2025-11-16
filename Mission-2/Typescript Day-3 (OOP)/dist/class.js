"use strict";
// CLASS  ===> is a blueprint from where different objects are created
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal {
//     name : string;
//     species : string;
//     legs : number;
//     animalType : string;
//     constructor (name : string, species : string, legs : number, animalType : string) {
//         this.name = name,
//         this.species = species,
//         this.legs = legs,
//         this.animalType = animalType
//     }
//     // method = function inside a class
//     makeSound() {
//         console.log(`${this.name} is a category of ${this.animalType}`);
//     }
// }
// using parameter properties --> don't need to declare class-properties and initialize in constructor using 'this.'
class Animal {
    name;
    species;
    legs;
    animalType;
    constructor(name, species, legs, animalType) {
        this.name = name;
        this.species = species;
        this.legs = legs;
        this.animalType = animalType;
    }
    // method ==> function inside a class
    makeSound() {
        console.log(`${this.name} is a category of ${this.animalType}`);
    }
}
const kangaroo = new Animal('kango', 'animal', 2, 'friendly');
console.log(kangaroo);
const tiger = new Animal('bagh', 'mamilia', 4, 'wild');
// calling method
kangaroo.makeSound();
tiger.makeSound();
// run command : ts-node ./src/class.ts  ("node --experimental-strip-types ./src/class.ts"  --> won't work)
//# sourceMappingURL=class.js.map