// nullable type

const getUsers = (user : string | null) => {
    if(user) {
        console.log(`user is : ${user}`);
    }
    else {
        console.log('all user is given here ');
    }
}

getUsers(null)


// unknown type

const discountcalculator = (num : unknown) => {
    if(typeof num === 'number') {
        const discountPrice = num * 0.1  // 10% discount
        console.log('discountPrice : ', discountPrice);
    }
    else if(typeof num === 'string') {
        const [splitedValue] = num.split(" ")   // [splitedValue] ==> gives the first value of the array [0]
        const discountedPrice = Number(splitedValue) * 0.1
        console.log('discounted value from string type :', discountedPrice);
    }
    else {
        console.log('this is null');
    }
}

discountcalculator(100)
discountcalculator('100 tk')
discountcalculator(null)



// never type

// const throwError = (err : string) => { // this will never returns a value
//     throw new Error(err)
// }
// throwError('error')