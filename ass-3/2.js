prompt = require("prompt-sync")();
let weather = prompt("enter the weather ");
let shoe = "";
if (weather === "hot") {
     shoe = "sandals";
}
else if (weather === "rain") {
    shoe = "galoshes";
}
else if (weather === "snow") {
    shoe = "boots"
}
else {
    shoe = "shoes" 
}
console.log(shoe);