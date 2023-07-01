// https://docs.google.com/document/d/172ZZBP_jxPihvXRxTSWBoiyIbJhTfNZs/edit

// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
const leastArgument = (numberOne, numberTwo) => {
  return numberOne < numberTwo ? numberOne : numberTwo;
};
console.log(leastArgument(2, 5));
// ----------------------------------------------------------------
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
const outputsEvenNumbers = (numberOne, numberTwo) => {
  let large = 0;
  let small = 0;
  numberOne > numberTwo
    ? (large = numberOne) && (small = numberTwo)
    : (large = numberTwo) && (small = numberOne);
  for (let index = large; index >= small; index--) {
    index % 2 === 0 ? console.log(index) : null;
  }
};
outputsEvenNumbers(2, 10);
// ----------------------------------------------------------------
/* Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
  и возвращает число в указанной степени. 
  Значение степени должно быть указано по умолчанию 2.*/
const power = (number, pow = 2) => {
  return number ** pow;
};
console.log(power(2, 3));
// ----------------------------------------------------------------
// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
const sumNumbers = (number) => {
  let sum = 0;
  for (let index = 1; index <= number; index++) {
    sum += index;
  }
  return sum;
};
console.log(sumNumbers(10));
// ----------------------------------------------------------------
/*Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. 
Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).*/

const sumEvenAndOdd = (n, m) => {
  let even = 0;
  let odd = 0;
  for (let index = n; index <= m; index++) {
    index % 2 === 0 ? (even += index) : (odd += index);
  }
  return console.log(even, odd);
};
sumEvenAndOdd(2, 10);
// ----------------------------------------------------------------
/* Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. 
Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - 
функция возвращает первый из этих элементов. 
Пример: [ 'one', 'two', 'three' ] => 'three' */
const strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
const longestString = (array) => {
  let str = '';
  if (array.length === 0) {
    return null;
  } else {
    for (let index = 0; index < array.length; index++) {
      array[index].length > str.length ? (str = array[index]) : null;
    }
  }
  return str;
};
console.log(longestString(strings));
