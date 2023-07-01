// // // 1. Метод forEach - пеербор массива
// // //  - Для каждого элемента массива чисел, вывести квадрат числа
// // const arrNumbers = [4, 9, 16, 25, 36, 49, 64];
// // const newArrNumbers = (arr) => {
// //     arr.forEach((el) => console.log(Math.pow(el, 2)));
// // };
// // // newArrNumbers(arrNumbers);
// // //  - Написать функцию, которая принимает массив и множитель,
// // // нужно вывести в консоль результаты произведения эл-тов массива на этот множитель.
// // const funcArrNums = (arr, number) => {
// //     arr.forEach((el) => console.log(el * number));
// // };
// // // funcArrNums(arrNumbers, 2);
// // //  - Есть массив объектов (товары). Увеличить у каждого товара цену на 5% от текущей.
// // const products = [
// //     { title: 'Banana', price: 2 },
// //     { title: 'Kiwi', price: 1 },
// //     { title: 'Tomato', price: 3 },
// // ];
// // const func = (array) => {
// //     array.forEach((el) => console.log(el.price * 1.05));
// // };
// // func(products);
// // //  - Есть массив объектов (товары). Для всех товаров категории "Инструмент" уменьшить цену на 5% от текущей.
// // //  - Получить массив из всех названий товаров (использовать forEach)
// // //  - Получить массив из УНИКАЛЬНЫХ категорий товара (тоже через forEach)
// // //  - Реализовать свой forEach

// const btn = document.querySelector('.btn');
// const root = document.querySelector('.root');

// const createParagraph = (color) => {
//     const paragraph = document.createElement('p');
//     paragraph.innerText =
//         ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore veritatis animi fugit ratione, dolorum quam corporis fuga,excepturi praesentium aspernatur reiciendis. Vero debitis qui explicabo inventore illum assumenda quaerat.';
//     paragraph.style.color = color;
//     root.append(paragraph);
// };

// let countParagraphs = 0;
// btn.addEventListener('click', () => {
//     if (root.innerHTML === '') {
//         createParagraph('blue');
//         return countParagraphs++;
//     }
//     if (countParagraphs === 1) {
//         createParagraph('green');
//         return countParagraphs++;
//     }
//     if (countParagraphs === 2) {
//         root.innerHTML = '';
//         return (countParagraphs = 0);
//     }
// });

// // const mainFunction = (array, callback) => {
// //     console.log(callback());
// // };

// // const sumNumbers = (number1, number2) => {
// //     const sum = number1 + number2;
// //     return sum;
// // };

// // const minusNumbers = (number1, number2) => {
// //     const sum = number1 - number2;
// //     return sum;
// // };

// // mainFunction(2, 5, sumNumbers);
// // mainFunction(15, 9, minusNumbers);

// const numbers = [1, 2, 3, 4, 5];

// console.log(5 in numbers);
// ELEM_BLOCK ========== SEPARATOR ========== //
// Написать функцию кэширования. Предположим, у нас есть функция,
// которая выполняет сложные и долгие математические вычисления для одного аргумента (вычисление факториала).
// Задача повышенной сложности.

// Нужно написать функцию-"обертку", которая будет вести кэш. То есть, нам нужно при каждом вызове функции factorial,
// запоминать в этот "кэш" аргумент этой функции, и результат. Если при вызове функции factorial мы видим что аргумент есть в кэше
//  - то возвращаем значение из кэша. Если в кэше такого значения нет - то вычисляем ответ, возвращаем его, и также запоминаем в кэш.
//  - для кэша, рекомендуется использовать объект, в котором ключами будут аргументы функции-факториала
//  - проверка существования свойства в объекте, когда название свойства неизвестно:

//  let obj = { prop1: 'val1', prop2: 'val2' };
//  console.log(obj['prop1']); // выведет val1
//  console.log(obj['prop100']); // выведет undefined

// const cash = {};
// const wrapper = (obj) => {
//   return function factorial(a) {
//     let result = 1;
//     if (a in obj) {
//       return obj[a];
//     } else {
//       for (let i = 1; i <= a; i++) {
//         result = result * i;
//       }
//     }

//     return (obj[a] = result);
//   };
// };
// const addAndCheckCash = wrapper(cash);

// console.log(addAndCheckCash(1));
// console.log(cash);
// //------------- CHECK
// console.log(addAndCheckCash(3));
// console.log(cash);
// ELEM_BLOCK ========== SEPARATOR ========== //
// Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив,
// содержащий только уникальные значения из исходного массива. При решении задачи необходимо использовать кэш
// для отслеживания уже встреченных значений и проверять, было ли значение уже добавлено в новый массив.
// const numbers = [1, 2, 5, 9, 55, 6, 2, 4, 66, 2, 9, 44, 156, 566, 1];
// const wrapper = (array) => {
//   return () => {
//     const newArray = [];
//     array.forEach((el) => {
//       if (!newArray.includes(el)) {
//         newArray.push(el);
//       }
//     });
//     return newArray;
//   };
// };
// console.log(wrapper(numbers)());
// ELEM_BLOCK ========== SEPARATOR ========== //
// Напишите функцию, которая принимает на вход строку и возвращает самое часто встречающееся слово в этой строке.
// При решении задачи необходимо использовать кэш для подсчета количества встреч каждого слова в строке.
const sentence =
  'The quick brown fox jumps over the lazy dog. The dog barks loudly.';
let objCash = {};

const wrapper = (str) => {
  const arrayWords = str.split(/[ ,.]/).filter((el) => el !== '');
  return (obj) => {
    obj = {};
    for (const word of arrayWords) {
      !(word.toLowerCase() in obj)
        ? (obj[word.toLowerCase()] = 1)
        : obj[word.toLowerCase()]++;
    }
    return () => {
      const arrayValues = Object.values(obj);
      let count = 1;
      for (const values of arrayValues) {
        values > count ? (count = values) : '';
      }
      for (const key in obj) {
        if (obj[key] === count) {
          return key;
        }
      }
    };
  };
};
// console.log(wrapper(sentence)(objCash)());

// ELEM_BLOCK ========== SEPARATOR ========== //
// Напишите функцию, которая принимает на вход массив объектов и возвращает новый массив,
// содержащий объекты с уникальными значениями определенного свойства. При решении задачи необходимо использовать кэш
// для отслеживания уже встреченных значений свойства и проверять, было ли значение уже добавлено в новый массив.

let changeValue = (arg1, arg2) => (arg1 ? Math.pow(arg2, 2) : Math.sqrt(arg2));
console.log(changeValue(true, 25));

console.log();
