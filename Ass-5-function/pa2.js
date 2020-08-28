const prompt = require("prompt-sync")();

function farhToCels(f){
  
    let c= (f - 32) * 5 / 9 ;
    
    return(c);  
}
let inp = prompt("Enter temp in fahrenheits: ");
    inp = parseInt (inp);


console.log(farhToCels(inp));