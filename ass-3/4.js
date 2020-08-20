prompt = require ("prompt-sync")();
let house = prompt ("enter the price of the house ");
house = parseFloat(house);
let downPay;
if (house >= 0 && house <= 49999.99){
    downPay = 0.05 * house;
}
else if (house >= 50000 && house <= 99999.99){
    downPay = 2000 + 0.1 * (house - 50000);
}
else if (house >= 100000 && house <= 199999.99){
    downPay = 7500 + 0.2 * (house - 100000);
}
else if (house >= 200000){
    downPay = 27500 + 0.25 * (house - 200000)
}
console.log(downPay)