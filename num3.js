let prompt = require('prompt-sync')();
let d = prompt('Enter legth in meters : ');

let dm = parseFloat(0.000621*d);
console.log(dm);