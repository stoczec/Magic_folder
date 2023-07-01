// Условия ветвления

// let number = Number(prompt("Enterthe number"));

// if (number > 0) {
//     console.log("number > 0");
// } else if (number < 0) {
//     console.log("number < 0");
// }else{
//     console.log("number = 0");
// }

// let num1 = 123;
// let num2 = "123";

// if (num1 === num2) {  // false
//     console.log("yes");
// }

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// if (num1 > num2) {
//     console.log("первое число больше второго");
// } else if(num1 < num2){
//     console.log("второе число больше первого");
// }else{
//     console.log("оба числа равны");
// }

// Массивы

// let fruits = ["Apple", "Banana"];

// console.log(fruits.length);

// let first = fruits[0];

// console.log(fruits[fruits.length - 1]);

// fruits.push("Orange"); // add element in last
// console.log(fruits.length);
// console.log(fruits);

// fruits.pop(); // delete last element

// fruits.unshift("Kokos"); // add element in begin
// console.log(fruits);

// fruits.shift(); // delete first element
// console.log(fruits);

// let pos = fruits.indexOf("Banana"); // return index of element
// console.log(pos);

// fruits.splice(pos, 1); // delete any element
// console.log(fruits);

// let arr = [];
// let num1 = Number(prompt("Enter the number"));
// let num2 = Number(prompt("Enter the number"));
// let num3 = Number(prompt("Enter the number"));

// arr.push(num1, num2, num3);

// console.log(arr);

// //Задание:

// 1.	Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.	Добавьте «Рок-н-ролл» в конец.
// 3.	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4.	Удалите первый элемент массива и покажите его.
// 5.	Вставьте Рэп и Регги в начало массива.

// 1.	Создайте массив styles с элементами «Джаз» и «Блюз».

// let styles = ["Jazz", "Blues"];
// console.log(styles);

// // 2.	Добавьте «Рок-н-ролл» в конец.

// styles.push("Rock-n-roll");
// console.log(styles);

// // 3.	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.

// let avg = styles.length % 2;

// if (avg == 0) {
//     styles[styles.length / 2] = "Classic";
// } else {
//     styles[styles.length / 2 - 0.5] = "Classic";
// }

// console.log(styles);

// // 4.	Удалите первый элемент массива и покажите его.

// styles.shift();
// console.log(styles);

// // 5.	Вставьте Рэп и Регги в начало массива.

// styles.unshift("Rap", "Reggy");
// console.log(styles);

//Задание: Написать программу, в которой объявлен массив с 5 числовыми элементами.
//Программа должна заполнить новый пустой массив квадратами чисел из первого массива.

// let arr = [2, 4, 6, 8, 10];
// console.log(arr);

// let arr2 = [
//     arr[0] * arr[0],
//     arr[1] * arr[1],
//     arr[2] * arr[2],
//     arr[3] * arr[3],
//     arr[4] * arr[4],
// ];
// console.log(arr2);

// Циклы

// for (let index = 0; index <= 5; index++) {
//     // начало, условие,шаг
//     console.log(index);
//     if (index == 2) {
//         break;
//     }
// }

// for (let index = 0; index <= 5; index++) {
//     if (index == 2) {
//         continue;
//     }
//     console.log(index);
// }

// let arr = [];
// for (let index = 0; index < 2; index++) {
//     arr.push(Number(prompt()));
// }

// console.log(arr);

// let arr2 = [];
// for (let index = 0; index < 2; index++) {
//     arr2.push(Math.pow(arr[index], 2));
// }
// console.log(arr2);

let arr = [-1, 0, -55, 98, -56, 6, -7, 89, -25, 36, 456];

for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
        console.log(arr[index]);
    }
}
