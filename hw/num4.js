let prompt = require('prompt-sync')();
let totalBoxes = prompt('Total Boxes : ');
let boxStacks = prompt('Boxes in each stack : ');

let totalStacks = parseFloat(totalBoxes/boxStacks);
console.log(Math.ceil(totalStacks));