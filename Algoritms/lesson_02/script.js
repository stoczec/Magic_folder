const arr = [1, 1, 8, 2, 2, 25, 8];

let check = 0;
let result = -1;

// for (let i = 0; i < arr.length; i++) {
//   let check = arr.includes(arr[i]);
//   if (arr[i] === arr.includes(arr[i + 1])) {
//     arr[i] = false;
//   } else {
//     arr[i] = true;
//   }
//   console.log(arr);
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       check++;
//     }
//   }
//   if (check === 1) {
//     result = arr[i];
//   }
//   check = 0;
// }

// console.log(result);

let xor = 0;
for (let i = 0; i < arr.length; i++) {
  xor = xor ^ i;
}
console.log(xor);
