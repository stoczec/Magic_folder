// Дан массив numbers
const numbers = [55, 43, 1, -7, 88, 13, -83, 15, 184];
// 1. С помощью цикла for выведите все числа из массива numbers в консоль
let str = "";
const putOutNumbers = (array) => {
    for (const value of array ) {
        str += value + " ";
    }
    console.log(str);
};
putOutNumbers(numbers);

// 2. Сформировать новый массив, в который попадут только отрицательные числа из массива numbers
// const negNumbersArray = [];
// let str1 = "";

// const negNumbers = (array) => {
//     for (let value of array) {
//         if (value < 0) {
//             negNumbersArray.push(value);
//             str1 += negNumbersArray[negNumbersArray.length - 1] + " ";
//         }
//     }
//     console.log(str1);
// };
// negNumbers(numbers);

// // 3. Сформировать новый массив, в который попадут только четные числа из массива numbers
// const evenNumbersArray = [];
// let str2 = "";
// const evenNumbers = (array) => {
//     for (let value of array) {
//         if (value % 2 === 0) {
//             evenNumbersArray.push(value);
//             str2 += evenNumbersArray[evenNumbersArray.length - 1] + " ";
//         }
//     }
//     console.log(str2);
// };
// evenNumbers(numbers);
// // 4. Сформировать новый массив, в который попадут только положительные числа из массива numbers, заканчивающиеся на цифру 4
// const evenEndFourNumbersArray = [];
// let str3 = "";
// const evenEndFourNumbers = (array) => {
//     for (let value of array) {
//         if (value > 0 && value % 10 === 4) {
//             evenEndFourNumbersArray.push(value);
//             str3 +=
//                 evenEndFourNumbersArray[evenEndFourNumbersArray.length - 1] +
//                 " ";
//         }
//     }
//     console.log(str3);
// };
// evenEndFourNumbers(numbers);
// // 5. *Напишите цикл, который считает сумма чисел из массива numbers
// let sum = 0;
// const sumNumberArray = (array) => {
//     for (let value of array) {
//         sum += value;
//     }
//     console.log(sum);
// };
// sumNumberArray(numbers);
// // 6. *Напишите цикл, который считает сумму чисел от 1 до 10
// const numArray = [];
// const sumNumArray = () => {
//     let num = 0;
//     let sum = 0;
//     for (let i = 0; i < 10; i++) {
//         num = Math.round(Math.random() * 9 + 1);
//         numArray.push(num);
//         for (let j = 1; j < numArray.length; j++) {
//             if (numArray[j - 1] === num) {
//                 numArray.splice(j - 1, 1);
//                 i--;
//             }
//         }
//     }
//     for (let value of numArray) {
//         sum += value;
//     }
//     console.log(sum);
// };
// sumNumArray();
