// 1. Дан массив. Вывести все числа в консоль, используя цикл for
// const arrNum = [1, 2, 5, 32, 4, 17];
// const arrStr = ["addf", "ajgf", "alpf", "afrf"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// 2. Вывести в консоль каждый второй элемент массива, умноженный на 2 => 2, 10, 8
// for (let i = 0; i < arr.length; i+=2) {
//     console.log(arr[i] * 2);
// }

// 3. Написать функцию, которая принимает массив в качестве аргумента и выводит в консоль все элементы этого массива
// const getArrElem = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };

// getArrElem(arr);
// getArrElem(arr);
// getArrElem([1, 2, 3]);
// 4. Написать функцию, которая принимает массив и индекс элемента. И выводит в консоль элемент из массива по переданному индексу
// const getArrElem = (arr, index) => {
//     console.log(arr[index]);
// };
// getArrElem(arrStr, 0);
// getArrElem(arrNum, 1);

// Объект Math

// const a = Math.max(4, 2, 9, -10, 11); // 11
// const b = Math.min(4, 2, 9, -10, 11); // -10

// const c = Math.ceil(7.88); // 8 - округляет вверх
// const d = Math.floor(7.88); // 7 - округляет вниз
// const e = Math.round(7.88); // 8 - округляет по правилам математики

// const f = Math.pow(2, 3); // 8
// const g = Math.sqrt(4); // 2

// const random = Math.floor(Math.random() * 10) + 1; // const random = Math.round(Math.random() * 10);

// // console.log(a, b, c, d, e, f, g, random);
// const random1 = Math.floor((Math.random() + 0.1) * 10); //const random1 = Math.ceil((Math.random()) * 10)

// const random2 = Math.floor((Math.random() + 0.1) * 10) + 1; // const random = Math.round(Math.random() * 10 + 2);

// // console.log(random2);

// const random3 = Math.floor(Math.random() * 6 + 1);
// const random4 = Math.floor(Math.random() * 6 + 1);

// const genNum = () => {
//     return Math.round(Math.random() * 5 + 1);
// };

// console.log(`${random3} x ${random4}`);
// console.log(`${genNum()} x ${genNum()}`);

// 6. Создать функцию, которая принимает 5 чисел и возвращает самое большое

// const getNum = (a, b, c, d, e) => {
//     return Math.max(a, b, c, d, e);
// };

// console.log(getNum(1, 5, 9, 85, 6));

// const nums = [16, 9, 81, 4];
// const nums_sqrt = [];

// const getNum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         nums_sqrt.push(Math.sqrt(arr[i]));
//     }
//     return nums_sqrt;
// };

// console.log(getNum(nums));

// const arrStr = ["hello", "hi", "good morning", "goodafternoon"];
// const arrStr1 = [];

// for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i].length > 6) {
//         arrStr1.push(arrStr[i]);
//     }
// }

// console.log(arrStr1);

// 9. Дан массив с числами. Сформировать новый массив из чисел больше 0
// const new_nums = [1, 5, -100, 98, -3, 15];
// const positive_nums = [];
// for (let i = 0; i < new_nums.length; i++) {
//     if (new_nums[i] > 0) {
//         positive_nums.push(new_nums[i]);
//     }
// }
// console.log(positive_nums);

// const new_nums = [1, 5, -100, 98, -3, 15];
// const positive_nums = [];

// for (let i = 0; i < new_nums.length; i++) {
//     if (i > 0) {
//         positive_nums.push(new_nums[i]);
//     }
// }
// console.log(positive_nums);
