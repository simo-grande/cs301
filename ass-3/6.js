prompt = require ("prompt-sync")();
let age = prompt ("enter child's age ");
let season = prompt ("enter current season ");
age = parseInt(age);
let bedTime = "";
if (age <= 5){
    if (season === "summer" || season === "fall"){
        bedTime = "8:30 p.m."
    } 
    else if (season === "winter" || season === "spring"){
        bedTime = "8:00 p.m."
    }
    console.log(bedTime);
}
if (age >= 6 && age <= 12){
    if (season === "summer"){
        bedTime = "9:30 p.m."
    }
    else if (season === "winter" || season === "spring" || season === "fall"){
        bedTime = "8:30 p.m."
    }
    console.log(bedTime);
}
else if (age >= 13){
    if (season === "summer"){
        bedTime = "10:30 p.m."
    }
    else if (season === "winter" || season === "spring" || season === "fall"){
        bedTime = "9:30 p.m."
    }
    console.log(bedTime);
}