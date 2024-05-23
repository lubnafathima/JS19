// Implement a function to reverse the elements of an array.

let arr = [4, 8, 2, 6];
let reverseArr = [];

function reverse() {
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

console.log(reverse());