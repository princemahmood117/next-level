const rawData = [
  {
    id: "p-101",
    productName: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.5,
    stock: 120
  },
  {
    id: "p-102",
    productName: "Running Shoes",
    category: "Footwear",
    price: 75.0,
    rating: 4.3,
    stock: 85
  },
  {
    id: "p-103",
    productName: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    rating: 4.7,
    stock: 60
  },
  {
    id: "p-104",
    productName: "Coffee Maker",
    category: "Home Appliances",
    price: 45.5,
    rating: 4.1,
    stock: 150
  },
  {
    id: "p-105",
    productName: "Gaming Mouse",
    category: "Accessories",
    price: 25.99,
    rating: 4.4,
    stock: 200
  },
  {
    id: "p-106",
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 39.99,
    rating: 4.6,
    stock: 90
  },
  {
    id: "p-107",
    productName: "Office Chair",
    category: "Furniture",
    price: 99.5,
    rating: 4.2,
    stock: 40
  },
  {
    id: "p-108",
    productName: "LED Desk Lamp",
    category: "Home Decor",
    price: 22.0,
    rating: 4.0,
    stock: 170
  },
    {
    id: "p-109",
    productName: "Bluetooth Keyboard",
    category: "Electronics",
    price: 39.99,
    rating: 5.0,
    stock: 90
  },
    {
    id: "p-106",
    productName: "Wireless Charger",
    category: "Electronics",
    price: 39.99,
    rating: 4.9,
    stock: 90
  },
]


// ---- data-flow ----
// filter ==> electronic
// sort by rating
// slice => first 3 (top 3)
// map => transform object shape to {name : "example"}

const topProducts = rawData.filter((item) => item.category === "Electronics")
.sort((a,b)=> b.rating - a.rating)
.slice(0,3)
.map(item => ({name : item.productName}))

console.log(topProducts);






const numbers = [40, 100, 1, 5, 25, 10]
const fruits = ["banana", "Cherry", "Mango", "apple", "guava"]


const numberSort = numbers.sort((a,b) => a - b )  // for number we have to use function to sort cz numbers are converted into strings
console.log('\nsorted numbers', numberSort, 'previous array (sorts the main array)', numbers);

const fruitSort = fruits.sort()  // for string we can simply just call the sort() function for sorting cz it's already in string
console.log('\nsorted fruits', fruitSort, '(sorts the capitl letters first)'); // capital leters first, small second


const sortedFruit = fruits.sort((a,b) => a.localeCompare(b))  // localCompare() ignores the upper-smaller factors for sorting 
console.log("correct sorted fruits : ", sortedFruit );



// array flat

const arr = [1, 2, 3, [4, 5,[6, 7, 8]]]

const flatArray = arr.flat(Infinity)  // .flat(value indicates how many layers will be merged) //Infinity = all layes
console.log('after removing the nested array', flatArray); //removes the nested and merges the elements in a single array 





const tagsfromPost = [
    ["js", "react", "css"],
    ["css", "html", "react"],
    ["node", "express"]
];


const filterTags = [...new Set(tagsfromPost.flat())]
console.log('filterTags :', filterTags);



// some

const num = [1,2,3,4,5]

const oddNum = num.some((number) => number % 2 === 0)  // checks if the data has event numbers --> output : true
console.log('if odd number is present?', oddNum);


const userRole = [ "user" ,"editor"];
const featureAccessRole = ["admin", "manager"]

const canAccess = userRole.some((role) => featureAccessRole.includes(role))
// checks if at least one role in userRole matches the role in featureAcessRole
console.log(canAccess);





// creating an array
const newArray = Array.from({length : 5}, (_,i) => i) // i is the index, _ is used to skip the first parameter which is 'value'
console.log(newArray);




const range = (start, stop, step) => Array.from({ length : Math.ceil((stop-start)/step)} , (_ , i) => start + (i)  * step)

// 0+0*2=0 ; 0+1*2=2 ; 0+2*2=4 ; 0+3*2=6 ; 0+4*2=8  ===> array is : [0,2,4,6,8] which is of 5 elements    

console.log('this is from range', range(0,10,2));