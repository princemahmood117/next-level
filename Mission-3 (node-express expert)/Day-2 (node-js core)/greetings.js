
const argument = process.argv;
// console.log('argument', argument);



const name = argument[2] || "guest";
let greetings;
const time = new Date().getHours()

if(time < 12) {
    greetings = "Good Morning"
}
else if(time < 18){
    greetings = "Good After Noon"
}
else {
    greetings = "Good Evening"
}
console.log(`${greetings}, ${name} `);

// console.log('node path', argument[0]);

// console.log('\nfile path', argument[1]);

// console.log('\nfirst actual argument', argument[2]);  // in terminal, node file_name.js Prince --> "Prince" is the stored argument