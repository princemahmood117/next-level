"use strict";
// static
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    increment() {
        return Counter.count = Counter.count + 1;
    }
    decrement() {
        return Counter.count = Counter.count - 1;
    }
}
const innstance1 = new Counter();
console.log(innstance1.increment()); // 0 + 1 = 1
console.log(innstance1.increment()); // 1 + 1 = 2
console.log(innstance1.increment()); // 2 + 1 = 3 
console.log(innstance1.increment()); // 3 + 1 = 4
console.log(innstance1.decrement()); // 4 - 1 = 3
const instance2 = new Counter(); // stores in same memeory
console.log(instance2.increment()); //previously stored :  3 + 1 = 4
console.log(instance2.increment()); // 4 + 1 = 5
console.log(instance2.increment()); // 5 + 1 = 6
// NOTE : methods can also be static. then the static methods will be called outside the function as : "ClasName.methodName()" [ ex: Counter.increment() ] 
//# sourceMappingURL=static.js.map