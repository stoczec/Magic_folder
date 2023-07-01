// // const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];
// // const arrNew = [];

// // // for (let i = 0; i < arr.length; i++) {
// // //     if (typeof arr[i] === "string") {
// // //         arrNew.push((arr[i] = "hello"));
// // //     } else {
// // //         arrNew.push(arr[i]);
// // //     }
// // // }

// // // console.log(arrNew);

// // for (let i = 0; i < arr.length; i++) {
// //     if (typeof arr[i] === "string") {
// //         null;
// //     } else {
// //         arrNew.push(arr[i]);
// //     }
// // }
// // console.log(arrNew);

// arr.push(65, 7, "good afternoon");
// arr.shift(65, 7, "good afternoon");
// arr.pop(65, 7, "good afternoon");
// arr.unshift(65, 7, "good afternoon");

// // Callback-функция (функция обратного вызова) - функция, переданная в другую функцию в качестве аргумента

// // Дан массив. Сформировать новый массив, в который попадут все числа из исходного массива, умноженные на 2

// const nums = [1, 2, 3, 4, 5];

// const doubled_nums = [];
// const doubledNums = () => {
//     for (let i = 0; i < nums.length; i++) {
//         doubled_nums.push(nums[i] * 2);
//     }
// };

// doubledNums();

// // Универсальная функция

// const changeNums = (arr, instruction) => {
//     for (let i = 0; i < nums.length; i++) {
//         arr.push(instruction(nums[i]));
//     }
// };

// const mult_num = [];
// const pow_num = [];

// const multNum = (a) => a * 2;
// const powNum = (a) => a ** 2;

// changeNums(mult_num, multNum);
// changeNums(pow_num, powNum);

// console.log(mult_num);
// console.log(pow_num);
