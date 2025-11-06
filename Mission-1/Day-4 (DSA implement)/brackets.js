// input string is valid if :   
    // ! --> open brackets must be closed by the same type of brackets
    // ! --> open brackets my be closed in the correct order
    // ! --> every close bracket has a corresponding open bracket of the same type

import Stack from "./stack.js";

const bracketCheck = (str) => {
    const stack = new Stack()

    for(let i = 0; i < str.length; i++) {
        const character = str[i]

        if(character === '(' || character === '{' || character === '[') {
            stack.push(character)
        }
        else if(character === ')' || character === '}' || character === ']'){
            if(stack.isEmpty()) {
                return false
            }
        }
    }
    return true
}

console.log(bracketCheck('( [ { } ] )'));
