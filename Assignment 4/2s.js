let prompt = require('prompt-sync')();
let p= prompt('write about yourself: ');
let n= prompt('Enter a number: ');
for(let i =0; i<n; i++){
    console.log(p);
}