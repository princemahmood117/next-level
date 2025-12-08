const startTIme = performance.now()

for (let i = 0; i<= 5000; i++){
    console.log(i);
}

const endTime = performance.now()

console.log(`this code took ${endTime - startTIme} millisecond unit of time`);