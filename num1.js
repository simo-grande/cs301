let prompt = require('prompt-sync')();
let r= prompt('Enter radius of cylinder: ');
let h= prompt('Enter height of cylinder: ');


let volume = parseFloat(Math.PI*r*r*h);
console.log(volume);