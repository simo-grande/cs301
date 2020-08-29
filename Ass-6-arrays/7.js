function rotateRight(arr) {
  let temp = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
 

    temp[j] = arr[i - 1];
    j++;
    temp[0] = arr[arr.length - 1];

  } return temp;
}
let list = [22,33,44,55,11];
console.log(rotateRight(list));

