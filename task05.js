// Write a function to find the second-largest element in an array of numbers.

let arr = [1, 2, 3, 2, 4];
let largest = arr[0];
let secondlargest;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondlargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondlargest && arr[i] < largest) {
    secondlargest = arr[i];
  }
}

console.log(largest);
console.log(secondlargest);
