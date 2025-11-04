// * statefull - stateless

// (1) function is a stateless
const counter = (amount) => {
    let count = 0;

    count = count + amount;
    return count
}
console.log(counter(1));
console.log(counter(2));




// (2) object is a stateful
const obj = {
    count : 0,

    add(amount) {
        this.count = this.count + amount;
    },

    print() {
        console.log(this.count);
    }
}

obj.add(2)
obj.add(3)
obj.print()
