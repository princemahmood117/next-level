// lookup table is like a dictonary

const postArray = [
  { id: "p-101", title: "Intro to SQL", author: "John Doe" },
  { id: "p-102", title: "Mastering JavaScript", author: "Emily Carter" },
  { id: "p-103", title: "Understanding React Hooks", author: "Michael Lee" },
  { id: "p-104", title: "Python for Data Science", author: "Sophia Khan" },
  { id: "p-105", title: "Exploring Node.js", author: "David Kim" }
];


const lookupTable = postArray.reduce((table,post) => {
    table[post.id] = post;
    return table
}, {})

console.log("this is using lookupTable : ", lookupTable["p-101"].title);



const post = postArray.find((po) => po.id === "p-103")
console.log('this is using array.find method : ', post.title);

