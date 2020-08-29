function addEnds(list) {
        let sum = 0;
        for (let i = 0; i < list.length; i++) {

                sum = list[0] + list[list.length - 1];
        }
        return sum;
}

let arr = [20, 8, 9, 5, 20];
console.log(addEnds(arr));