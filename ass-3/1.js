  
prompt = require ("prompt-sync")();
let num1 = prompt ("enter your first number ");
let num2 = prompt ("enter your second number ");
let x = num1 - num2;
let y = parseInt(x);
console.log(Math.abs(y));