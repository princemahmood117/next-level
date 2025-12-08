// time complexity O(n)

// arr = [2, 11, 7, 15];
// target = 9;

const twoSum = (array, target) => {
    const numMap = new Map()

    for(let i = 0; i < array.length; i++) {
        const currentNumber = array[i] // stores each current value

        const complement = target - currentNumber;

        if(numMap.has(complement)) {
            return [numMap.get(complement), i]  // returns the index of complement(currentNumber) stored earlier and the index of the current number (for 7 index is 2)
        } 
        // if complement is '9-7 = 2', then it checks the numMap to find the value of '2' which is 0 and the index of this current number(7) which is 2
        // numMap.get(key) ----> retuers the value associated with the key in 'key-value' pair
        numMap.set(currentNumber, i) // current number and its index is set into map {2 , 0} as key-value pair
        // console.log(numMap);
    }

    return undefined
}
         // [0, 1, 2, 3]
const arr = [2, 11, 7, 15]
const target = 9;
console.log(twoSum(arr,target));

console.log('\n\n');




const sumNumbers = (arr, target) => {
    const mapValue = new Map()

    for(let i = 0; i < arr.length; i++ ) {
        const currentValue = arr[i]

        const complementValue = target - currentValue

        if(mapValue.has(complementValue)) {
            return [mapValue.get(complementValue),i]
        }

        mapValue.set(currentValue,i) // if not found in the map

    }

    return undefined
}

const arrayValue = [2,11,7,18]
const targetValue = 9
console.log(sumNumbers(arrayValue, targetValue));







































