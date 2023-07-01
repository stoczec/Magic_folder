// 1. Написать функцию, которая принимает на вход массив строк и callback функцию.
// Callback функция должна принимать на вход каждую строку и возвращать количество букв в строке.
// Функция должна вернуть новый массив, состоящий из количества букв в каждой строке первоначального массива.
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const fruits1 = ['appewsle', 'banana', 'cherry', 'date', 'elderberry'];
const fruits2 = ['apple', 'banewfana', 'cherry', 'date', 'elderbweferry'];
const fruits3 = ['apple', 'banana', 'cherewfwry', 'date', 'elderberry'];

const func_count_letter_array = (array, callback) => {
    const new_array = array.map((el) => {
        return callback(el);
    });
    return new_array;
};

const func_count_letter_callback = (string) => {
    const string_length = string.length;
    return string_length;
};

// console.log(func_count_letter_array(fruits, func_count_letter_callback));

// 3. Написать функцию, которая принимает на вход массив чисел и callback функцию.
// Callback функция должна принимать на вход каждый элемент массива и возвращать true, если элемент является простым числом, и false в противном случае.
// Функция должна вернуть новый массив, состоящий только из простых чисел первоначального массива.

const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}
const func_simple_number_array = (array_numbers, calback) => {
    const new_array = array_numbers
        .map((el) => {
            return calback(el) === true ? el : null;
        })
        .filter((el) => {
            return el !== null;
        });
    return new_array;
};

// const func_simple_number_callback = (el) => {
//     const simple_number = [2, 3, 5, 7];
//     let check_first = false;
//     simple_number.forEach((el_simple_number) => {
//         if (el === el_simple_number) {
//             check_first = true;
//         }
//         return check_first;
//     });

//     if (check_first) {
//         return check_first;
//     } else {
//         let check_second = true;
//         simple_number.forEach((el_simple_number) => {
//             if (el % el_simple_number === 0) {
//                 check_second = false;
//             }
//             return check_second;
//         });
//         return check_second;
//     }
// };

const func_simple_number_callback = (el) => {
    const simple_number = [2, 3, 5, 7];
    if (simple_number.includes(el) === true) {
        return true;
    } else {
        let check = true;
        simple_number.forEach((num) => {
            if (el % num === 0) {
                check = false;
            }
            return check;
        });
        return check;
    }
};

// for (let i = 2; i < 100; i++) {
//     const arr = [2, 3, 5, 7];
//     let check = true;
//     arr.forEach((el) => {
//         if (i === el) {
//             console.log(i);
//             check = false;
//         } else if (i % el === 0) {
//             check = false;
//         }
//     });
//     check ? console.log(i) : null;
// }

// console.log(func_simple_number_array(numbers, func_simple_number_callback));

// 4. Написать функцию, которая принимает на вход объект и callback функцию.
// Callback функция должна принимать на вход ключ и значение каждого свойства объекта и возвращать сумму длин ключа и значения.
// Функция должна вернуть новый объект, в котором каждое свойство заменено на свою сумму длин ключа и значения.
const user = { name: 'Dmytro', second_name: 'Geraschenko', age: '39' };

const func_sum_length = (object_, callback_) => {
    const new_object = {};
    for (let key in object_) {
        new_object[key] = callback_(key, object_[key]);
    }
    return new_object;
};

const func_callback = (key, value) => {
    const sum = key.length + value.length;
    return sum;
};

// console.log(func_sum_length(user, func_callback));

// 5. Написать функцию, которая принимает на вход массив объектов и callback функцию.
// Callback функция должна принимать на вход каждый объект массива и возвращать true,
//если у объекта есть свойство "name", и false в противном случае.
// Функция должна вернуть новый массив, состоящий только из объектов, у которых есть свойство "name".

const data = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Mary', age: 30, gender: 'female' },
    { age: 20, gender: 'male' },
    { name: 'Sarah', age: 27, gender: 'female' },
    { age: 18, gender: 'male' },
];

const func_name_true = (array_objects, callback) => {
    const new_array = array_objects
        .map((el) => (callback(el) ? el : ''))
        .filter((el) => el != '');
    return new_array;
};
const func_name_true_callback = (el) => Reflect.has(el, 'name');

console.log(func_name_true(data, func_name_true_callback));

// const data = [
//     {
//         name: 'John',
//         age: 25,
//         gender: 'male',
//         address: { city: 'Paris', street: 'Lenina' },
//         // frends: [
//         //     { name: 'Mary', age: 30, gender: 'female' },
//         //     { age: 20, gender: 'male' },
//         //     { name: 'Sarah', age: 27, gender: 'female' },
//         //     { age: 18, gender: 'male' },
//         // ],
//     },
//     { name: 'Mary', age: 30, gender: 'female' },
//     { age: 20, gender: 'male' },
//     { name: 'Sarah', age: 27, gender: 'female' },
//     { age: 18, gender: 'male' },
// ];

// const data1 = ['2fewfeg', '2fewfeg', '2fewfeg', '2fewfeg', '2fewfeg'];

// // for (let i = 0; i < data.length; i++) {
// //     console.log(data[3].age.);
// // }

// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//     sum = sum + data[i].age;
// }

// // console.log(sum);
// // console.log(data[0].frends[1].name);

// // Напишите цикл for, который выводит консоль каждое второе число от 0 до 10

// // for (let i = 0; i <= 10; i += 2) {
// //     console.log(i);
// // }
// // Напишите цикл for, который выводит в консоль  все числа от 55 до 20

// // for (let i = 55; i >= 20; i--) {
// //     console.log(i);
// // }

// //Дан массив numbers. Вывести в консоль все числа из массива
// //Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

// const numberss = [3, 5, 11, 2, 8, 1, 6];

// // for (let i = 0; i < numberss.length; i++) {
// //     console.log(numberss[i]);
// // }

// const numbers_squared = [];

// for (let i = 0; i < numberss.length; i++) {
//     numbers_squared.push(Math.pow(numberss[i], 2));
// }
// console.log(`hgefwg ${numbers_squared}`);
