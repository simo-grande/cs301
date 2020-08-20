  
prompt = require ("prompt-sync")();
let student = prompt ("enter student name ");
let credit = prompt ("enter total university credit ")
credit = parseInt(credit);
let result = " ";
if (credit >= 0 && credit < 30){
    result = "freshman";
}
else if (credit >= 30 && credit < 60){
    result = "sophomore";
}
else if (credit >= 60 && credit < 90){
    result = "junior";
}
else if ( credit >= 90){
    result = "senior";
}
   

console.log(result);