// Write a function to find the maximum and minimum values in an array.

let arr = [4, 8, 2, 6];
let min = arr[0];
let max = arr[0];

for(let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    } else if (max < arr[i]) {
        max = arr[i];
    }
}

console.log(min);
console.log(max);