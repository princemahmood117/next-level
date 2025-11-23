const os = require('os')

console.log('\n-------- system info : --------');


console.log('\nplatform details : ');
console.log('\n' + '-'.repeat(25));

console.log('platform : ', os.platform());
 console.log('type : ', os.type());
 console.log('hostname : ', os.hostname());
 console.log('version : ', os.version());

 console.log('\nCPU INFO : ');
 console.log('\n' + '-'.repeat(25));

 const cpus = os.cpus()

 console.log('cpu model : ', cpus[0]);
 console.log('cpu cores : ', cpus.length);
 console.log('cpu speed : ', cpus[0].speed);


  console.log('\nMEMORY INFO : '); 
  console.log('\n' + '-'.repeat(25));

 const totalMemory = os.totalmem()
 console.log('totalMemory :' + (totalMemory/1024/1024/1024).toFixed(2) + ' GB');

const freeMemory = os.freemem()
 console.log('free memory :', (freeMemory/1014/1024/1024).toFixed(2) + ' GB');

console.log('\nUPTIME INFO : '); 
console.log('\n' + '-'.repeat(25));

const upTime = os.uptime()
console.log(upTime);
const days = Math.floor(upTime/86400) // 1 day in minutes
const hours = Math.floor((upTime%86400)/3600)
const minutes = Math.floor((upTime%3600)/60)

console.log(`pc is up for  : ${days} days ${hours}hours ${minutes} minutes`);



 
