const prompt=require('prompt-sync')();

const correct = 'simo123' ;
let count=0;
let usrin=0;
while(usrin!==correct){
     usrin=prompt("Guess the passcode: ");
     
    count++;
   
}

console.log("You got it on your "+count+" attempt");