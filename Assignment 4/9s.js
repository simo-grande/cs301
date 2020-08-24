let prompt = require('prompt-sync')();
let n= prompt('Enter a number: ');
for(let i = n; i<=n; i++){
    let row="";
     for(let j=1; j<=n; j++){
        if(j===1){
            row+=n+"\t" ;
        }
         else if(j===2){
             row+=2*n+"\t" ;
         } else if(j===3){
             row+=3*n+"\t" ;
         }else if(j===4){
            row+=n*n+"\t" ;
         }else if(j===5){
            row+=n*n*n+"\t" ;
         }
      
        
    }
    console.log(row);
    }