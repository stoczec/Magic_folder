// 1. Написать функцию, которая принимает на вход массив чисел и callback функцию.
// Callback функция должна принимать на вход каждый элемент массива и возвращать его квадрат.
// Функция должна вернуть новый массив, состоящий из квадратов элементов первоначального массива.
const arrayNumbers = [15, 14, 4, 9, 10, 11, 12, 19, 9, 13];

const callbackElemPow = (element) => {
    const powNumber = Math.pow(element, 2);
    return powNumber;
};

const newArrayElemPow = (array, callback) => {
    const newArray = array.map((element) => {
        return callback(element);
    });
    return newArray;
};

// console.log(newArrayElemPow(arrayNumbers, callbackElemPow));

// 2.Написать функцию, которая принимает на вход два числа и callback функцию.
// Callback функция должна принимать на вход эти два числа и возвращать результат их суммирования.
// Функция должна вернуть результат выполнения callback функции.

const callbackSumNumbers = (number1, number2) => {
    const sum = number1 + number2;
    return sum;
};

const sumNumbers = (number1, number2, callback) => {
    const sum = callback(number1, number2);
    return sum;
};

// console.log(sumNumbers(5, 10, callbackSumNumbers));
// 3. Написать функцию, которая принимает на вход массив объектов и callback функцию.
// Callback функция должна принимать на вход каждый объект массива и возвращать значение определенного свойства объекта
// (например, свойства "имя" или "возраст"). Функция должна вернуть новый массив,
//  состоящий из значений определенного свойства каждого объекта первоначального массива.

const people = [
    {
        first_name: 'Ivan',
        last_name: 'Ivanov',
        age: 20,
        city: 'Moscow',
        country: 'Russia',
        active: true,
        rate: 15,
        hours: 100,
    },
    {
        first_name: 'Petr',
        last_name: 'Petrov',
        age: 12,
        city: 'Berlin',
        country: 'Germany',
        active: false,
        rate: 17,
        hours: 90,
    },
    {
        first_name: 'irina',
        last_name: 'Alexandrova',
        age: 46,
        city: 'Paris',
        country: 'France',
        active: true,
        rate: 20,
        hours: 150,
    },

    {
        first_name: 'Denis',
        last_name: 'Sokolov',
        age: 30,
        city: 'Rome',
        country: 'Italy',
        active: false,
        rate: 30,
        hours: 40,
    },
];

const callbackElem = (element) => {
    const elemValue = element.age;
    return elemValue;
};

const arrayOfAge = (array, callback) => {
    const newArray = array.map((element) => {
        return callback(element);
    });
    return newArray;
};

// console.log(arrayOfAge(people, callbackElem));
