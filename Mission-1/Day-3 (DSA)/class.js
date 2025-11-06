// You can then create multiple objects (called instances) from a single class (blueprint).

class Counter {
    constructor (count,value) {
 // this.count indicates the 'count' holding by the object, created using the class
 // count (right side of equal sign) indicates the 'count' we get/access from outer world/outside of class
        this.count = count;
        this.value = value;
    }
    
    add(amount) {
        this.count = this.count + amount
    }
    print() {
        console.log(this.count);
    }
}

const counter1 = new Counter(0)  // initializes the counter1 object with value
console.log('creates a new object (no 2nd argument) : ', counter1);

counter1.add(2)
counter1.add(3)
console.log('from couter1 : ');
counter1.print()



const counter2 = new Counter(10,5);
console.log('creates a new object : ', counter2);

counter2.add(27)
counter2.add(13)
console.log('from couter2 : ');
counter2.print();

// if we use any value from the object, we will use 'this' keyword which says, "this value is from this object" 