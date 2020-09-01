const prompt = require('prompt-sync')();
let inpt = prompt("please enter the title: ");


function titleCase(n) {
   let words = n.split(" ");
   let titlecase;


   for (let i = 0; i < words.length; i++) {

      words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);

      titlecase = words.join(" ");
   }

   return titlecase;
}

console.log(titleCase(inpt));