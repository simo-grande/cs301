let prompt = require('prompt-sync')();
let bodo = prompt('begining odometer : ');
let eodo = prompt('ending odometer : ');
let gallons = prompt('number of gallons : ');

let totalMiles = parseFloat(bodo-eodo);
let mileage= parseFloat(totalMiles/gallons);
console.log(mileage);