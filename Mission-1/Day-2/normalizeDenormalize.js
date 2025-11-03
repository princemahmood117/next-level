// ? create a new array of users where each user object contains a posts array of their own posts  (client-side join)

// users.id and posts.userId defines the same person

const users = [
    {id: 101, name: "Alice"},
    {id: 102, name: "Bob"},
    {id: 103, name: "Charlie"},
    {id: 104, name: "Diana"},
    {id: 105, name: "Eve"}
]

const posts = [
    {id: 1, userId: 102, title: "My first post"},
    {id: 2, userId: 101, title: "Learning JavaScript"},
    {id: 3, userId: 103, title: "Morning coffee thoughts"},
    {id: 4, userId: 102, title: "Weekend adventures"},
    {id: 5, userId: 104, title: "Book recommendations"},
    {id: 6, userId: 101, title: "Coding tips and tricks"},
    {id: 7, userId: 105, title: "Travel diary"},
]

// todo  create a lookup-table of posts
// todo  
// todo  

// ! 1st step
const postLookupTable = posts.reduce((acc, currentValue) => {

    const {userId} = currentValue;

    if(!acc[userId]) {
       acc[userId] = []; 
    }

    acc[userId].push(currentValue)
    return acc 
},{})

console.log(postLookupTable);

// ! 2nd step
const userWithPosts = users.map((user) => {
    return {
        ...user,
        posts : postLookupTable[user.id] || []
    }
})

console.log('\n', JSON.stringify(userWithPosts));


// * output : {id : 101, name : "ALice", posts : [ {id : 2, ...}, {id : 6, ....} ]}





// * Using Nested loop method

// const users2 = [
//     {id: 101, name: "Alice"},
//     {id: 102, name: "Bob"},
//     {id: 103, name: "Charlie"},
//     {id: 104, name: "Diana"},
//     {id: 105, name: "Eve"}
// ]

// const posts2 = [
//     {id: 1, userId: 102, title: "My first post"},
//     {id: 2, userId: 101, title: "Learning JavaScript"},
//     {id: 3, userId: 103, title: "Morning coffee thoughts"},
//     {id: 4, userId: 102, title: "Weekend adventures"},
//     {id: 5, userId: 104, title: "Book recommendations"},
//     {id: 6, userId: 101, title: "Coding tips and tricks"},
//     {id: 7, userId: 105, title: "Travel diary"},
// ]

// // Using nested loops
// const userWithPosts2 = [];

// // Outer loop: Go through each user
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log('user from loop', user);
    
//     // Create a new user object with an empty posts array
//     const userObject = {
//         id: user.id,
//         name: user.name,
//         posts: []
//     };
    
//     // Inner loop: Go through each post
//     for (let j = 0; j < posts.length; j++) {
//         const post = posts[j];
        
//         // If this post belongs to the current user, add it
//         if (post.userId === user.id) {
//             userObject.posts.push(post);
//         }
//     }
    
//     // Add the completed user object to the result array
//     userWithPosts2.push(userObject);
// }

// console.log(JSON.stringify(userWithPosts2, null, 2));