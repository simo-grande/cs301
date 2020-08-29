const list = [5, 3, 8, 7, 2];


function multiply(arr, m) {
    let temp = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        temp[j] = arr[i] * m;
        j++;
    }
    return temp;
}


console.log(multiply(list, 2));
