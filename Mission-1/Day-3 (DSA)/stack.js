class Stack {
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
        return this.items.pop()
    }


    peek() {
        if(this.isEmpty()) {
            return console.log('firstly array is empty : ', []);;
        }
        return this.items[this.items.length - 1]
    }


    isEmpty () {
        return this.items.length === 0
    }

    print() {
        console.log('the array : ', this.items);
    }
}

const stack = new Stack()

console.log(stack.peek());  // this shows the undefined in console

console.log('is the stack empty ? ', stack.isEmpty());

stack.push(200)
stack.push(300)
stack.push(9050)
stack.print()

console.log('the last element : ', stack.peek());

console.log('is the stack empty ? ', stack.isEmpty());

stack.pop()  // removes the last emelent from the array

stack.print()  

