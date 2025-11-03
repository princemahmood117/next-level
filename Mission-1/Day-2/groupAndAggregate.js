const sales = [
    {category: "Electronics", item: "Laptop", price: 1200, quantity: 2},
    {category: "Clothing", item: "T-Shirt", price: 25, quantity: 5},
    {category: "Electronics", item: "Smartphone", price: 800, quantity: 3},
    {category: "Furniture", item: "Office Chair", price: 150, quantity: 4},
    {category: "Clothing", item: "Jeans", price: 60, quantity: 3},
    {category: "Electronics", item: "Headphones", price: 100, quantity: 6},
    {category: "Furniture", item: "Desk", price: 300, quantity: 1}
]

//todo initialize empty array
//todo initialize 'object category '
//todo calculate the revenue 


const totalSalesByCategory = sales.reduce((acc, currentValue) => {
    console.log(acc, ': ', "next iteration :", currentValue);

    const {category, price, quantity} = currentValue;

   if(!acc[category]) {
     acc[category] = {
        totalRevenue : 0,  // initialized totalRevenue and totalEachItemCount with 0, because for each iteration the value will be updated
        totalEachItemCount : 0,
    }
   }

   acc[category].totalRevenue = acc[category].totalRevenue + (price * quantity);
   acc[category].totalEachItemCount = acc[category].totalEachItemCount + quantity;

    return acc
}, {})

console.log('\nfinal Lookup Table ',totalSalesByCategory);