// * statefull function (but now actually RIGHT to do it cz it damages the purity of funtion)

let counts = 4;
const counter = (amount) => {

    counts = counts + amount;
    return counts
}
console.log('this is using 1st call : ', counter(2));
console.log('this is using 2nd call : ', counter(2));



// another approch (function inside function) ----> js approch

const createCounter = () => {
    let count = 3;

    return (amount) => {  // returns another function
        count = count + amount;
        return count;
    }
}

const result = createCounter()  // since createCounter() doesnt take any parameter, so for output we have to store it then call it
console.log('\nfrom createCounter : ', result(2));
console.log('from createCounter : ', result(3));

