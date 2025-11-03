const set = new Set()

console.log('this has 0 elements in the set', set);

set.add("apple")
set.add("banana")
set.add("lichi")
set.add("apple")

console.log('after adding the elements inside the set', set);

// set does not accept duplicate files
// --- actions to be done using set ---- 
// set.forEach
// set.has      --> if an entry is present of not
// set.delete   --> returns true/false



// this is manual way to eliminate duplicate value [O(n^2)]
const arr = ["apple", "banana", "mango", "apple" ]

const removeDuplicate = (ar) => {
    const newArray = [];

    arr.forEach(element => {
        if(!newArray.includes(element)){
            newArray.push(element)
        }
    })
    return newArray;
}
console.log("\nthis is from brute force / manual method for removing duplicate element",removeDuplicate(arr));



// using set [O(n)]
const remDup = (arr) => {
    const set = new Set(arr);
    const convert = Array.from(set)
    return convert;
}
console.log('\nthis is after using set', remDup(arr));




const arrayList = ["prince", "karim", "navid", "jamil", "hossain"]
const removeHashSet = (a) => {
    const setter = new Set(a)
    console.log(setter);
    return Array.from(setter) // convert the result into array
}
console.log('\nthis is from removeHashSet', removeHashSet(arrayList));