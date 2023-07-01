// ДЗ
// Массив numbers
const numbers = [55, -9, 8, 90, -3, -1, 87];
// 1. Сформировать массив из последних цифр элементов массива
const lastNum = numbers.map((el) => Math.abs(el % 10));
console.log(lastNum);
// 2. Сформировать массив из чисел умноженных на 10
const multNum = numbers.map((el) => el * 10);
console.log(multNum);
// 3. Сформировать массив, где отрицательные числа станут положительными
const negNum = numbers.map((el) => (el < 0 ? (el = Math.abs(el)) : el));
console.log(negNum);
// Массив arr
const arr = [1, "bye", 66, 89, true, undefined, "hi", 78, "good morning"];
// 1. Сформировать массив, в котором все элементы будут заменены на 0
const zeroNum = arr.map((el) => (el = 0));
console.log(zeroNum);
// 2. Сформировать массив, где все булевые значения будут заменены на 10
const booleanNum = arr.map((el) => (typeof el == "boolean" ? (el = 10) : el));
console.log(booleanNum);
// 3. Сформировать массив, где строки короче 4 символов будут заменены на строку 'too short string'
const shortString = arr.map((el) =>
    typeof el == "string" && el.length < 4 ? (el = "too short string") : el
);
console.log(shortString);
