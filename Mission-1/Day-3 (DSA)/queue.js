class Queue {
    constructor() {
        this.items = [];
        console.log('initialized the empty array', this.items);
    }


    push(pushValue) {
        this.items.push(pushValue)
    }


    pop() {
        if(this.isEmpty()) {  // we can call the methods inside methods using 'this'
            return undefined
        }
        return this.items.shift()
    }


    peek() {
        if(this.isEmpty()) {
            return console.log('firstly array is empty : ', []);;
        }
        return this.items[0]
    }


    isEmpty () {
        return this.items.length === 0
    }

    print() {
        console.log('the array : ', this.items);
    }
}

const queue = new Queue()

console.log(queue.peek());  // this shows the undefined in console

console.log('is the queue empty ? ', queue.isEmpty());

queue.push(200)
queue.push(300)
queue.push(9050)
queue.print()

console.log('the first element : ', queue.peek());

console.log('is the queue empty ? ', queue.isEmpty());

queue.pop()  // removes the first emelent from the array

queue.print()  

