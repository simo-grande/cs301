let prompt = require('prompt-sync')();
let n= prompt('Enter a number: ');
    n= parseInt(n);
for(let i = 1; i<=n; i++){
    let row=i+" "+2*i+" "+3*i+" "+i*i+" "+i*i*i;
    console.log(row);
}