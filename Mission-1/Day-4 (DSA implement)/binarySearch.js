// low and high
// select mid
//  mid = (high - low)/2 ---> floor the result to find the mid


const binarySearch = (array, target) => {
    let low = 0;
    let high = array.length - 1; 

    while(low <= high) {
        const mid = Math.floor((high + low) / 2) ;
        const guess = array[mid]  // initially guessed mid of array is the target value

        console.log(`Low : ${low}, High : ${high} ,Mid : ${mid}, Guess : ${guess}`);

        if(guess === target) {
            return mid;
        }

        else if(guess > target) {
             console.log(`${guess} is greater than ${target}, moving high to ${mid - 1}`);
            high = mid - 1;
            console.log(array);
        }
        else {
            console.log(`${guess} is less than ${target}, moving low to ${mid + 1}`);
            low = mid + 1
        }
    }

    return -1
}

const ar = [3,5,6,7,9,11]
console.log(binarySearch(ar,7))