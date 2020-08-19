let prompt = require('prompt-sync')();
let age = prompt('Enter your Age : ');
let maxHrate = parseInt(220-age);
let slowRate = parseFloat(maxHrate*0.65);
let highRate = parseFloat(maxHrate*0.85);
console.log("Your slowest heart rate is "+slowRate+" and your fastest heart rate is "+highRate);
