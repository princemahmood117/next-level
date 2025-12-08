// input string is valid if :
// ! --> open brackets must be closed by the same type of brackets
// ! --> open brackets my be closed in the correct order
// ! --> every close bracket has a corresponding open bracket of the same type

import Stack from "./stack.js";

const bracketCheck = (str) => {
  const stack = new Stack();

  const bracketModel = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === "(" || character === "{" || character === "[") {  // opening brackets will be stacked
      stack.push(character);
      console.log("stacked item is : ", stack);
    } 
    else if (character === ")" || character === "}" || character === "]") {
      if (stack.isEmpty()) {
        return false;
      }
      console.log("\n\n");

      const got = stack.pop();  // removes and returns the last stacked opening bracket
      console.log("popped item : ", got);
      const expected = bracketModel[character];
      console.log("expected item is : ", expected);

      if (got !== expected) {
        return false;
      }
    }
  }
  return true;
};

console.log(bracketCheck("( [ { } ] )"));

console.log('--------------------');

console.log(bracketCheck("( } { ) ] )"));
