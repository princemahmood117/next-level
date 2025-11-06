// * statefull - stateless

// (1) function is a stateless
const counter = (amount) => {
    let count = 0;

    count = count + amount;
    return count
}
console.log('this is using function : ', counter(1));
console.log('this is using function : ', counter(2));






// (2) object is a stateful : means it remembers its internal data between function calls
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
