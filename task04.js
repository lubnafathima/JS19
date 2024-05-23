// Write a function to remove duplicate elements from an array.
let arr = [4, 8, 4, 8, 6];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let isUnique = true;
  for (let j = 0; j < newArr.length; j++) {
    if (arr[i] === newArr[j]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
