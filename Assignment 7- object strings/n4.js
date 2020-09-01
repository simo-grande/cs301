const prompt = require('prompt-sync')();
let inpt = prompt("Enter a string to be switched: ");

function switchCase(s) {
    let swichedString = "";
    for (let i = 0; i < s.length; i++) {
        let x;
        if (s[i] === s[i].toUpperCase()) {

            x = s[i].toLowerCase();
            swichedString += x;
        }
        else if (s[i] === s[i].toLowerCase()) {
            x = s[i].toUpperCase();

            swichedString += x;

        }

    }
    return swichedString;
}

console.log(switchCase(inpt));