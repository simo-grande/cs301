const prompt = require('prompt-sync')();
let usr1 = prompt("Enter the first word: ");
let usr2 = prompt("Enter the scond word: ");

function suffix(inp1, inp2) {
    let result = "";
    let j = inp2.length - 1;

    for (let i = inp1.length - 1; i >= 0; i--) {

        if (inp1[i] === inp2[j]) {
            result += inp2[j]

            j--;
        }
        else {
            break;
        }

    }
    result = result.split("");
    let otp = result.reverse();
    otp = otp.join("");
    return otp;
}
console.log(suffix(usr1, usr2));