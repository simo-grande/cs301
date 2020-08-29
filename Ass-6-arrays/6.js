function rotateLeft(arr) {
  let temp = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {


    temp[j] = arr[i + 1];
    j++;
    temp[arr.length - 1] = arr[0];

  } return temp;
}
let list = [15,11,12,13,14];
console.log(rotateLeft(list));