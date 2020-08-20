let prompt = require('prompt-sync')();
let q = prompt('Enter volume in quarts : ');

let liter = parseFloat(0.946*q);
console.log(liter);