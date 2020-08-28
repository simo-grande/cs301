const prompt = require("prompt-sync")();
function checkPrime (n){
    let count = 0 ;
   for(let i = 2; i<n;i++){
       if(n%i===0){
           count++;
           
       }
   } return(count===0);
}
let n1 = prompt("Check a number if its prime: ");
    n1 = parseInt (n1);
    console.log(checkPrime(n1));