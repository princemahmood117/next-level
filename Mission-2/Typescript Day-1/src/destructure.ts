// object destructuring

const user  = {
    id : 123,
    name : {
        firstName : 'iftekhar',
        middleName : 'mahmood',
        lastName : 'prince',
    },
    gender : 'male',
    favColor : 'blue'
}
// console.log('middleName is :', user?.name?.middleName);

const {name : {middleName}, gender : lingo} = user
console.log(middleName, lingo);



// array destructuring


const friends = ['tamzid', 'niaz', 'rifat', 'lamiya']

const [a, b, ,d] = friends  //[a,b] ==> 'a' will hold 0th index_value, 'b' will hold 1st index_value and so on...

console.log(a,b,d);