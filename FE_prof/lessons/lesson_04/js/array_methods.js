// Данн массив с разными типами данных

const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];

// 2. Сформировать новый массив, в который попадут все значения из исходного массива, но все строки будут заменены на строку 'hello'

const new_arr = [];
// for (let i = 0; i < arr.length; i++) {
//     typeof arr[i] === "string" ? new_arr.push("hello") : new_arr.push(arr[i]);
// }

// arr.forEach((el) =>
//     typeof el === "string" ? new_arr.push("hello") : new_arr.push(el)
// );
// console.log(new_arr);

// 3. Сформировать новый массив, в который попадут все элементы кроме строк

// const new_arr3 = [];
// // for (let i = 0; i < arr.length; i++) {
// //     typeof arr[i] !== "string" ? new_arr3.push(arr[i]) : "";
// // }
// arr.forEach((el) => (typeof el !== "string" ? new_arr3.push(el) : ""));
// console.log(new_arr3);

// arr.forEach((el) => (el > 0 ? new_arr.push(el) : null));
// console.log(new_arr);

// const arrNew = (arr.map = (el) => {
//     if (typeof el === "string") {
//         return "hello";
//     } else {
//         return el;
//     }
// });
// console.log(arrNew);

// const arr_new = arr.map((el) => (typeof el === "string" ? "hello" : el));

const numbers = [55, -9, 8, 90, -3, -1, 87];

const arr_new = numbers.map((el) => (el % 10 == 5 ? el * 3 : null));

console.log(arr_new);