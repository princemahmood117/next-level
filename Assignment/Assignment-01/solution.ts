


const formatValue = (inputValue : string | number | boolean) : string | number | boolean => {
  if (typeof inputValue === 'string') {
    return inputValue.toUpperCase();
  } 
  else if (typeof inputValue === 'number') {
    return inputValue * 10;
  } 
  else {
    return !inputValue;
  }

}











const getLength = (value : string | string[] | number[]) : number => {
  if (typeof value === "string") {
    return value.length;
} 
  else {
    return value.length;
  }

}









class Person {
    name : string;
    age : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age
    }

    getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}"`
}
}










type Item = {
  title : string;
  rating : number;

}

const filterByRating = (receiveItem : Item[]) : Item[] => {
  
  return receiveItem.filter(item => item.rating >= 4);
}











type User = {
  id : number;
  name : string;
  email : string;
  isActive : boolean;

}


const filterActiveUsers = (users : User[]) : User[] =>  {

  return users.filter((user => user.isActive === true))
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];












interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;

}


const printBookDetails = (book: Book) : void => {

  const availability = book.isAvailable ? "Yes" : "No";

  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}












type Product = {
  name : string;
  price : number;
  quantity : number;
  discount? : number; 

}


const calculateTotalPrice = (products : Product[]) : number | string => {

  if(products.length === 0) {
    return 0

  }

  else {
    const result =  products.reduce((total , product) => {
    let productTotalPrice = product.price * product.quantity;

    if(product.discount !== undefined) {
      const discountedAmount = (productTotalPrice * product.discount) / 100;
      productTotalPrice = productTotalPrice - discountedAmount;
    }
    return total + productTotalPrice
  }, 0)

  return result;
  }
}

