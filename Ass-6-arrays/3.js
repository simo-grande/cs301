function getMiddle(arr) {
    let temp = 0;
    let val = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        temp = arr[val];
    } else {
        temp = (arr[val] + arr[val - 1]) / 2;
    }
    return temp;
}


let list = [1, 2, 3, 4, 55, 6, 7, 8, 9];
console.log(getMiddle(list));