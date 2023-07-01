const arrayNumbers = [8, 3, 5, 2, 5, 3, 8];
// Найдите сумму всех элементов в массиве.
const sumAllElements = (array) => {
  let sum = 0;
  for (const el of array) {
    sum += el;
  }
  return sum;
};
// Найдите наибольшее число в массиве.
const greatersElement = (array) => {
  let num = null;
  for (const el of array) {
    el > num ? (num = el) : '';
  }
  return num;
};
// Найдите наименьшее число в массиве.
const leastElement = (array) => {
  let num = array[0];
  for (const el of array) {
    el < num ? (num = el) : '';
  }
  return num;
};
// Посчитайте количество отрицательных чисел в массиве.
const countNegativeElement = (array) => {
  let num = 0;
  for (const el of array) {
    el < 0 ? num++ : '';
  }
  return num;
};
// Проверьте, все ли элементы в массиве являются положительными числами.

const checkPositiveElements = (array, callback) => {
  if (arrayNumbers.find(callback) < 0) {
    return false;
  } else {
    return true;
  }
};
const callbackFunc = (element) => {
  return element < 0;
};
// Отсортируйте массив в порядке возрастания.
const sortArrayUp = arrayNumbers.map((el) => el).sort((a, b) => a - b);
// Отсортируйте массив в порядке убывания.
const sortArrayDown = arrayNumbers.map((el) => el).sort((a, b) => b - a);
// Извлеките все уникальные элементы из массива.
const uniqElement = (array) => {
  const uniqElementArray = [];
  for (const el of array) {
    !uniqElementArray.includes(el) ? uniqElementArray.push(el) : '';
  }
  return uniqElementArray;
};
// Проверьте, является ли массив палиндромом (т.е. читается одинаково слева направо и справа налево).
const checkPolyndrom = (array) => {
  for (let i = 0; i < Math.ceil(array.length / 2); i++) {
    if (array[i] !== array[array.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};
// Объедините два массива в один, чтобы получить новый массив, содержащий элементы обоих исходных массивов.
const newArray = [1, 1, 1, 1];
const unitedArray = (array1, array2) => {
  for (const el of array1) {
    array2.push(el);
  }
  return array2;
};
