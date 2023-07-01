// Напишите функцию, которая принимает на вход массив целых чисел
// и возвращает наибольшую сумму двух чисел из этого массива, которые не являются соседними.
const arrayOfNumbers = [1, 5, 3, 9, 4, 6, 55];

function getMaxSumTwoNumbers(array) {
  let maxSum = 0; // Наибольшая сумма двух чисел
  let currentMaxSum = 0; // При прохождении по массиву, текущая наибольшая сумма двух чисел
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let currentIndex = i;
      if (
        currentIndex - 1 !== j && // левый соседний элемент
        currentIndex + 1 !== j && // правый слседний элемент
        currentIndex !== j // текущий элемент
      ) {
        currentMaxSum = array[i] + array[j]; // формируем сумму из текущего элемента и элемента, который удовлетворяет условию выше
        currentMaxSum > maxSum ? (maxSum = currentMaxSum) : '';
      }
    }
  }
  return maxSum;
}

console.log(getMaxSumTwoNumbers(arrayOfNumbers));
