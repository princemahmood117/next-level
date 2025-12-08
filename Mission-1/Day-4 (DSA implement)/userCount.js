const USER_COUNT = 50000

let userA = []
let userB = []

const createUser = (id) => {
    return {
        id : `user_${id}`,
        name : `User ${id}`
    }
}

for (let i = 0 ; i < USER_COUNT ; i++) {
    userA.push(createUser(i)) //  0 to 49999
    userB.push(createUser(25000 + i)) // 25000 to 74999
}

// ! brute force approch : 50000 * 50000 approches
// const commonFriendSlow = () => {

//     const start = performance.now()
//     const commonFriends = [];
    
//     userA.forEach((a)=> {
//         userB.forEach((b) => {
//             if(a.id === b.id) {
//                 commonFriends.push(a)
//             }
//         })
//     })
//     const end = performance.now()
//     return {count : commonFriends.length, timeToFinish : end - start}
// } 

// console.log(commonFriendSlow()) // shows {count : 25000} after some time, since the calculation is long




// convert O(n^2) into O(n) --> faster

const commonFriendFast = (usersA, usersB) => {

    const start = performance.now()

    const commonFriends = [];  // store common friends here

    const isListA = new Set(usersA.map((user) => user.id))
    
    usersB.forEach((userB) => {
           if(isListA.has(userB.id)) {  // fast lookup
            commonFriends.push(userB)
           }
        })
    
    const end = performance.now()
    return { count : commonFriends.length, timeToFinish : end - start}
} 

console.log(commonFriendFast(userA,userB));





// new example

const totoalUSers = 10000;

const person1 = []
const person2 = []

const createUserFunction = (id) => {
    return {
        id : `user_${id}`,
    }
}

for(let k = 0; k < totoalUSers; k ++) {

    person1.push(createUserFunction(k))  // from 0 to 9999
    person2.push(createUserFunction(k + 5000)) // from 5000 to 14999
}

console.log('from person1 array : ', person1);
console.log('from person2 array : ', person2);


// now check the common friends between them

const commonPersons = (p1,p2) => {
    const commonPersonArray = []   // initialized empty array where common persons will be stored
    const lookUp = new Set(p1.map((pOne) => pOne.id))  // 'lookUp' has the id's of p1
    console.log('lookUp', lookUp);

    p2.forEach((pTwo) => {  
        if(lookUp.has(pTwo.id)) {  // checks if lookUp has p2's id's
            commonPersonArray.push(pTwo)
        }
    })
    
    return {
        count : commonPersonArray.length
    }
}

console.log(commonPersons(person1, person2));



