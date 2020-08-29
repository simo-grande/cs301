const prompt = require('prompt-sync')();
let usrInput = prompt("Enter numbers from 1 - 12 : ");

const dayList = [" On the first day of Christmas, my true love gave to me: ", " On the second day of Christmas, my true love gave to me:", " On the third day of Christmas, my true love gave to me: ", " On the fourth day of Christmas, my true love gave to me: ", " On the fifth day of Christmas, my true love gave to me:", " On the sixth of Christmas, my true love gave to me:", " On the seventh day of Christmas, my true love gave to me: ", " On the eighth day of Christmas, my true love gave to me:", " On the ninth of Christmas, my true love gave to me:", " On the tenth of Christmas, my true love gave to me:", " On the eleventh of Christmas, my true love gave to me:", " On the twelveth of Christmas, my true love gave to me: "]
const gifts = [" a partridge in a pear tree", " two turtle doves", " three French hens", " four calling bird", " five golden rings", " six geese a layin", " seven swans a swimming", " eight maids a milking", " nine ladies dancing", " ten lords a leaping", " eleven pipers piping", " twelve drummers drumming"]

function xmasCarol(arr, n, out) {
    let temp = [];
    let phrase = " ";
    let j = 0;
    for (let i = n - 1; i >= 0; i--) {

        temp[j] = arr[i];
        phrase = temp.join(",");
        j++;
    }
    return out[n - 1] + phrase;
}

console.log(xmasCarol(gifts, usrInput, dayList));