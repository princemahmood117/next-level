const USER_COUNT = 50000

let userA = []
let userB = []

const createUser = (id) => {
    return {
        id : `user_${id}`,
        name : `User ${id}`
    }
}

for (let i = 0 ; i < USER_COUNT ; i++){
    userA.push(createUser(i)) //  0 to 49999
    userB.push(createUser(25000 + i)) // 25000 to 74999
}

// ! brute force approch : 50000 * 50000 approches
const commonFriendSlow = () => {

    const start = performance.now()
    const commonFriends = [];
    
    userA.forEach((a)=> {
        userB.forEach((b) => {
            if(a.id === b.id) {
                commonFriends.push(a)
            }
        })
    })
    const end = performance.now()
    return {count : commonFriends.length, timeToFinish : end - start}
} 

// console.log(commonFriendSlow()) // shows {count : 25000} after some time, since the calculation is long




// convert O(n^2) into O(n)


const commonFriendFast = () => {

    const start = performance.now()
    const commonFriends = [];
    
    userA.forEach((a)=> {
        userB.forEach((b) => {
            if(a.id === b.id) {
                commonFriends.push(a)
            }
        })
    })
    const end = performance.now()
    return {count : commonFriends.length, timeToFinish : end - start}
} 


