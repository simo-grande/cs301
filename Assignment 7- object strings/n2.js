const prompt = require('prompt-sync')();

let usr1 = prompt("Enter the first string: ");
let usr2 = prompt("Enter the second string: ");

function getPrefix(inp, inp2) {
    let result = "";
    for (let i = 0; i < inp.length; i++) {
        if (inp[i] === inp2[i]) {
            result += inp2[i];
        }
        else {
            break;
        }
    }
    return result;
}
console.log(getPrefix(usr1, usr2));