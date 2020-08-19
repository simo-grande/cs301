let prompt = require('prompt-sync')();
let bodo = prompt('begining odometer : ');
let eodo = prompt('ending odometer : ');
let gallons = prompt('number of gallons : ');

let totalMiles = parseFloat(eodo-bodo);
let mileage= parseFloat(totalMiles/gallons);
console.log(mileage);