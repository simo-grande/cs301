  
prompt = require ("prompt-sync")();
let status = prompt ("enter your status ");
let booksDue = prompt ("books past due ");
booksDue = parseInt(booksDue)
let loan = "";
if (status === "student"){
    if (booksDue === 0){
        loan = "6 weeks";
    }
    else if (booksDue < 3){
        loan = "4 weeks"
    }
    else if (booksDue >= 3){
        loan = "2 weeks"
    }
    console.log(loan);
}
if (status === "faculty"){
    if (booksDue === 0){
        loan = "16 weeks";
    }
    else if (booksDue < 3){
        loan = "12 weeks";
    }
    else if (booksDue >= 3){
        loan = "8 weeks";
    }
    console.log(loan);
}
else {
    if (booksDue === 0){
        loan = "4 weeks"
    }
    else if (booksDue < 3){
        loan = "3 weeks";
    }
    else if (booksDue >= 3){
        loan = "2 weeks";
    }
    console.log(loan);
}