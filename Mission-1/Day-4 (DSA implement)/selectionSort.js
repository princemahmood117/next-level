// selection sort algorithm

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log('state of array :', array);
        let minIndex = i;

        for(let j = i + 1; j < array.length; j++ ) {
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i) {  //actual swap is done here
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp
        }
        console.log(`after the pass ${i+1}`, array);
    
}
}

console.log(selectionSort([5,3,8,4,2]));