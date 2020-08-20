const prompt = require("prompt-sync")();
let input1 = parseInt(prompt('Enter a number; '));
let input2 = parseInt(prompt('Enter another number; '));
let output = input1-input2;
console.log(Math.abs(output));

