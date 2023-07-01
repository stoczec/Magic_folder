// LET vs CONST

// let a = 5;
// a = 25;

// const b = 10;
// b = 55; // так делать нельзя

// ЦИКЛЫ

// 1. Вывести в консоль все числа от 0 до 10

// for(let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// 2. Вывести в консоль все числа от 55 до 155

// for(let i = 55; i <= 155; i++) {
//   console.log(i)
// }

// 3. Вывести в консоль все числа от 10 до 20 с шагом 2 (каждое второе число)

// for(let i = 10; i <= 20; i += 2) {
//   console.log(i)
// }

// 4. Вывести в консоль все числа от 20 до 0

// for(let i = 20; i >= 0; i--){
//   console.log(i)
// }

// 5. Вывести в консоль все числа от 100 до 25 с шагом 10

// for(let i = 100; i >= 25; i -= 10){
//   console.log(i)
// }

// 6. Написать функцию, при вызове которой в консоль выводятся числа от 0 до 10

// function showNumbers(){
//   for(let i = 0; i <= 10; i++) {
//     console.log(i)
//   }
// }

// showNumbers();

// ФУНКЦИИ

// 1. Объявление функции через function (function declaration)

// Пример 1. Написать функцию, которая принимает числовой аргумент и возвращает это число, умноженное на 2

// function multNumber(num) {
//   return num * 2
// }

// console.log(multNumber(2)); // 4
// console.log(multNumber(3)); // 6
// console.log(multNumber(10)); // 20

// Пример 2. Написать функцию, которая принимает два числовых аргумента и возвращает их сумму

// function sumNumbers(num1, num2){
//   return num1 + num2
// }

// console.log(sumNumbers(2, 6)); // 8
// console.log(sumNumbers(10, 9)); // 19
// console.log(sumNumbers(0, 9)); // 9

// Пример 3. Написать функцию, которая принимает числовой аргумент и выводит в консоль числа от 0 до переданного в функцию числа

// showNumbers(25); // 0 - 25

// function showNumbers(num){
//   for(let i = 0; i <= num; i++){
//     console.log(i)
//   }
// }

// showNumbers(25); // 0 - 25

// 2. Стрелочные функции (arrow functions)

// Пример 1. Написать функцию, которая принимает числовой аргумент и возвращает это число, умноженное на 2

// const multNumber = num => num * 2;

// Пример 2. Написать функцию, которая принимает два числовых аргумента и возвращает их сумму

// const sumNumbers = (num1, num2) => num1 + num2;

// Пример 3. Написать функцию, которая принимает числовой аргумент и выводит в консоль числа от 0 до переданного в функцию числа

// showNumbers(10); // вызывать стрелочную функцию нельзя до ее инициализации

// const showNumbers = num => {
//   for(let i = 0; i <= num; i++){
//     console.log(i)
//   }
// }

// showNumbers(10);

// ПРАКТИКА

// 1. Написать функцию, которая принимает числовое значение и возвращает это число увеличенное на 10

// const addTen = a => a + 10;

// // console.log(addTen(25)); // 35

// // 2. Написать функцию, которая принимает три числа и возвращает их произведение

// const numbers = (a, b, c) => a * b * c;

// // console.log(numbers(2, 2, 3)); // 12

// // 3. Написать функцию, которая принимает два числа a и b (b > a) и выводит числа в консоль от меньшего к большему (от a до b)

// const getNumbers = (a, b) => {
//   for(let i = a; i <= b; i++){
//     console.log(i)
//   }
// }

// getNumbers(45, 91); // 3 - 9

//ДЗ
// 1. Написать цикл for, который выводит в консоль числа от 75 до 89
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
document.body.append(p1);
document.body.append(p2);
document.body.append(p3);
document.body.append(p4);
const arr = [];
for (let i = 75; i <= 89; i++) {
    arr.push(i);
}
p1.innerText = arr.join(", ");
console.log(arr.join(", "));

// 2. Написать цикл for, который выводит в консоль каждое третье число в диапазоне от 80 до 12 (включительно)
const arr1 = [];
for (let i = 80; i >= 12; i -= 3) {
    arr1.push(i);
    if (i === 14) {
        arr1.push(i - 2);
    }
}
p2.innerText = arr1.join(", ");
console.log(arr1.join(", "));
// 3. Написать функцию, которая принимает два числа (основание и степень) и возвращает основание, возведенное в степень
let randomNum = Math.floor(Math.random() * 100) + 1;
let extentNum = Math.floor(Math.random() * 10) + 1;
const exponNum = (base, extent) => {
    return base ** extent;
};
p3.innerText = `Число ${randomNum}, возведенное в степень ${extentNum}, равно ${exponNum(
    randomNum,
    extentNum
).toLocaleString()}.`;
console.log(
    `Число ${randomNum}, возведенное в степень ${extentNum}, равно ${exponNum(
        randomNum,
        extentNum
    ).toLocaleString()}.`
);
// 4. Написать функцию, которая принимает число и возвращает 10% от этого числаs
const persent = (num) => {
    return num * 0.1;
};
p4.innerText = `10% от числа ${randomNum} равно ${persent(randomNum).toFixed(
    2
)}`;
console.log(`10% от числа ${randomNum} равно ${persent(randomNum).toFixed(2)}`);
