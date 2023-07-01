const arr = [1, 2, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let count = 0;
const func = (array, num) => {
  let startIndx = 0;
  let endIndx = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && startIndx <= endIndx) {
    count += 1;
    middle = Math.floor((startIndx + endIndx) / 2);
    if (array[middle] === num) {
      found = true;
      position = middle;
      return position;
    }
    if (num < array[middle]) {
      endIndx = middle - 1;
    } else {
      startIndx = middle + 1;
    }
  }
  return position;
};

console.log(func(arr, 20));
console.log(count);
