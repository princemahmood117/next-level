const cartData = [
  {
    id: "p-101",
    productName: "Wireless Headphones",
    category: "Electronics",
    price: 50,
    rating: 4.5,
    stock: 12
  },
  {
    id: "p-102",
    productName: "Running Shoes",
    category: "Footwear",
    price: 75,
    rating: 4.3,
    stock: 85
  },
  {
    id: "p-103",
    productName: "Smart Watch",
    category: "Electronics",
    price: 19,
    rating: 4.7,
    stock: 60
  },
  {
    id: "p-104",
    productName: "Coffee Maker",
    category: "Home Appliances",
    price: 45,
    rating: 4.1,
    stock: 15
  },
  {
    id: "p-105",
    productName: "Gaming Mouse",
    category: "Accessories",
    price: 29,
    rating: 4.4,
    stock: 20
  },
  {
    id: "p-106",
    productName: "Bluetooth Speaker",
    category: "Electronics",
    price: 39,
    rating: 4.6,
    stock: 90
  },
  {
    id: "p-107",
    productName: "Office Chair",
    category: "Furniture",
    price: 95,
    rating: 4.2,
    stock: 40
  },
  {
    id: "p-108",
    productName: "LED Desk Lamp",
    category: "Home Decor",
    price: 22,
    rating: 4.0,
    stock: 17
  }
]


const total = cartData.reduce((acculator,product) => {  //acculator used to store the 'most recent result' for further calculations
    console.log(acculator, product.price);
    return acculator + (product.price * product.stock)
}, 0)
console.log(total);







const players = [
  { name: "Jamal Bhuiyan", score: 88 },
  { name: "Sohel Rana", score: 54 },
  { name: "Topu Barman", score: 72 },
  { name: "Yeasin Arafat", score: 63 },
  { name: "Rakib Hossain", score: 91 },
  { name: "Saad Uddin", score: 45 },
  { name: "Matin Miah", score: 67 },
]

const topScorer = players.reduce((bestPlayer, singlePlayer) => {
    if(bestPlayer.score > singlePlayer.score) {
        return bestPlayer
    }
    return singlePlayer
},players[0])

console.log('\nbest scorer is : ', topScorer);
