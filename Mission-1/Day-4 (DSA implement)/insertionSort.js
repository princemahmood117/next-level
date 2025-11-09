const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) { //index 0 is already sorted, we take from index 1

        let current = arr[i]
        console.log(current);

        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--
        }

        arr[j + 1] = current
     
    }
    return arr;
}

console.log(insertionSort([3,1,45,7,6]));


// current = arr[1] = 1 from array
// j = i - 1 => 1 - 1 = 0th value == 3 from array

// a[j] = 3 > current = 1

// a[0+1] = a[0]
// a[1] = 3  // 1st index will set 3