let nums1 = [
    3, 12, 6, 60, 69, 900, 7, 1, 12, 9, 2, 39, 5, 90, 35, 11, 29, 4, 8, 13, 14,
    15, 16, 17, 18, 1569,
];

const str = ["a", "c", "Abfd", "kDa", "dwdwdw", "Dkl"];

let people1 = [
    { name: "John", age: 23 },
    { name: "John", age: 25 },
    { name: "Zary", age: 30 },
    { name: "Peter", age: 20 },
    { name: "Sarah", age: 28 },
];

let products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1.2 },
    { name: "Orange", price: 1.8 },
    { name: "Pineapple", price: 2.5 },
    { name: "kiwi", price: 0.5 },
    { name: "Lemon", price: 1.35 },
    { name: "melon", price: 2.23 },
];

// 1 Отсортируйте массив чисел в порядке убывания.
const nums_sort = nums1.map((el) => el).sort((a, b) => b - a);
// console.log(
//     `1. Отсортируйте массив чисел в порядке убывания.\n     ${nums_sort}`
// );
// 2 Отсортируйте массив строк в порядке возрастания длины строки.
const string_sort = str.map((el) => el).sort((a, b) => a.length - b.length);
// console.log(
//     `2. Отсортируйте массив строк в порядке возрастания длины строки.\n     ${string_sort}`
// );
// 3 Отсортируйте массив объектов по возрастанию значения свойства "age".
const age_sort = [...people1].sort((a, b) => a.age - b.age);
// console.table(age_sort);
// 4 Отсортируйте массив объектов по убыванию значения свойства "price".
const price_sort = [...products].sort((a, b) => b.price - a.price);
// console.table(price_sort);
// 5 Отсортируйте массив чисел в порядке возрастания, но сначала перемешайте его случайным образом.
const random_nums_sort = [...nums1]
    .sort((a, b) => 0.5 - Math.random())
    .sort((a, b) => a - b);
// console.log(random_nums_sort);
//6 Отсортируйте массив строк в обратном алфавитном порядке.
const string_reverse = [...str].sort().reverse();
// console.log(string_reverse);
//7 Отсортируйте массив объектов по возрастанию значения свойства "name".
const name_sort = [...people1].sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
);
// console.log(name_sort);
//8 Отсортируйте массив объектов по убыванию значения свойства "price".
// ЭЭЭЭЭЭЭЭЭ
// Было уже
// 9 Отсортируйте массив чисел в порядке возрастания, но поместите все четные числа в начало массива,
// а нечетные числа - в конец.
const nums_sort_even = [...nums1]
    .sort((a, b) => a - b)
    .sort((a, b) => (a % 2 < b % 2 ? -1 : a % 2 > b % 2 ? 1 : 0));
// console.log(nums_sort_even);
// 10 Отсортируйте массив строк в порядке возрастания длины строки, но поместите все строки, которые
// начинаются с буквы "A" или "a", в начало массива, а остальные строки - в конец.
const str_sort_firstLetter = [...str]
    .sort((a, b) => a.length - b.length)
    .sort((a, b) =>
        a[0].toLowerCase() === "a" && b[0].toLowerCase() !== "a"
            ? -1
            : a[0].toLowerCase() !== "a" && b[0].toLowerCase() === "a"
            ? 1
            : 0
    );
// console.log(str_sort_firstLetter);
// Отсортируйте массив объектов по убыванию значения свойства "name", но если значение свойства "name" для
// двух объектов равно, то отсортируйте эти объекты по возрастанию значения свойства "age".
const people_sort = [...people1]
    .sort((a, b) => (b.name < a.name ? -1 : 1))
    .sort((a, b) => (a.name == b.name && a.age < b.age ? -1 : 1));
// console.log(people_sort);

// Отсортируйте массив строк в порядке возрастания длины строки, но если две строки имеют одинаковую длину,
// то отсортируйте их в лексикографическом порядке.
let words = [
    "apGple",
    "pear",
    "orange",
    "banaFna",
    "ananas",
    "abfnas",
    "Agrapefruit",
    "ea",
    "ae",
];
const arr_str = [...words]
    .sort((a, b) => a.length - b.length)
    .sort((a, b) => (a.length == b.length && a < b ? -1 : 1));
// console.log(arr_str);

// Отсортируйте массив чисел в порядке возрастания, но если число делится на 3 без остатка, то поместите его
// в начало массива, а если число не делится на 3 без остатка, то поместите его в конец массива.
const nums_increase = [...nums1]
    .sort((a, b) => a - b)
    .sort((a, b) => (a % 3 < b % 3 ? -1 : 1))
    .sort((a, b) => (a % 3 > 0 && b % 3 > 0 && a < b ? -1 : 1));
// console.log(nums_increase);
// Отсортируйте массив объектов по возрастанию значения свойства "date", но если два объекта имеют одинаковую
// дату, то отсортируйте их по возрастанию значения свойства "price".

// Отсортируйте массив строк в порядке возрастания, но поместите все строки, которые содержат символы "a" и "e",
// в начало массива, а остальные строки - в конец.
const str_sort_bushtabiren = [...words]
    .sort((a, b) => (a > b ? -1 : 1))
    .sort((el) => (el.indexOf("a") >= 0 && el.indexOf("e") >= 0 ? -1 : 0));
// console.log(str_sort_bushtabiren);

// Отсортируйте массив чисел в порядке убывания, но поместите все числа, которые являются четными и положительными,
// в начало массива, а все остальные числа - в конец.
const nums_even = [...nums1]
    .sort((a, b) => b - a)
    .sort((a, b) => (a % 2 < b % 2 ? -1 : 1));
// console.log(nums_even);
// Отсортируйте массив объектов по возрастанию значения свойства "length" для свойства "name", но если два объекта
// имеют одинаковое значение свойства "length", то отсортируйте их по возрастанию значения свойства "price".
const products_length_sort = [...products]
    .sort((a, b) => a.name.length - b.name.length)
    .sort((a, b) => (a.name.length == b.name.length ? a.price - b.price : 0));
// console.log(products_length_sort);
// Отсортируйте массив строк в порядке возрастания, но поместите все строки, которые содержат только буквы верхнего
// регистра, в начало массива, а все остальные строки - в конец.
const func_toUpperCase = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            return 1;
        }
    }
    return 0;
};
const str_upper = [...words]
    .sort((a, b) => a.length - b.length)
    .sort((a, b) => func_toUpperCase(b) - func_toUpperCase(a));
// console.log(str_upper);
// Отсортируйте массив чисел в порядке убывания, но поместите все числа, которые являются простыми числами, в начало
// массива, а все остальные числа - в конец.

const func_simple_number = (number) => {
    if (number === 3 || number === 5 || number === 7) {
        return 1;
    }
    const arr_numbers = [2, 3, 5, 7];
    for (const i of arr_numbers) {
        if (number % i == 0) {
            return 0;
        }
    }
    return 1;
};

const array_simple_numbers = [...nums1]
    .sort((a, b) => a - b)
    .sort((a, b) => func_simple_number(b) - func_simple_number(a));

// console.log(array_simple_numbers);

// Отсортируйте массив объектов по убыванию значения свойства "length" для свойства "name", но если два объекта имеют
// одинаковое значение свойства "length", то отсортируйте их по убыванию значения свойства "date".

// Отсортируйте массив чисел в порядке возрастания, но если число содержит цифру "9", то поместите его в конец массива.
// Пример массива: [39, 42, 123, 109, 56, 981, 27].
const func_number_to_string = (number) => {
    let number_to_string = String(number);
    for (const i of number_to_string) {
        if (i === "9") {
            return 1;
        }
    }
    return 0;
};

const array_sort_numbers_9 = [...nums1]
    .sort((a, b) => a - b)
    .sort((a, b) => func_number_to_string(a) - func_number_to_string(b));

// console.log(array_sort_numbers_9);
// Отсортируйте массив строк в порядке возрастания, но если строка начинается с буквы "a",
// то поместите ее в начало массива. Пример массива: ['ant', 'bat', 'cat', 'apple', 'elephant', 'dog'].

// Отсортируйте массив объектов по возрастанию значения свойства "date", но если два объекта имеют одинаковую дату,
// то отсортируйте их по возрастанию значения свойства "price". Пример массива:
const products_new = [
    { name: "Product 1", price: 10, date: "2022-03-01" },
    { name: "Product 2", price: 20, date: "2022-02-01" },
    { name: "Product 3", price: 5, date: "2022-11-01" },
    { name: "Product 4", price: 15, date: "2022-02-31" },
    { name: "Product 5", price: 10, date: "2022-02-31" },
];

const func = (str) => {
    const str1 = str.split("");
    str1.splice(4, 1);
    str1.splice(6, 1);
    let str2 = Number(str1.join(""));

    return str2;
};
const array_sort_date_price = [...products_new]
    .sort((a, b) => func(a.date) - func(b.date))
    .sort((a, b) => (func(a.date) === func(b.date) ? a.price - b.price : 0));
// console.log(array_sort_date_price);
// Отсортируйте массив чисел в порядке убывания, но поместите все числа,
// которые делятся на 3 без остатка, в начало массива. Пример массива: [7, 21, 3, 14, 27, 9, 2, 12].
// Отсортируйте массив объектов по возрастанию значения свойства "length" для свойства "name",
// но если два объекта имеют одинаковое значение свойства "length", то отсортируйте их по возрастанию значения свойства "age".
// Пример массива:
const people_new = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 },
    { name: "Dave", age: 25 },
];

const map = new Map();
map.set("name", "Dmytro");
map.set("age", 75);
map.set(75, "age");
// console.table(map);
// console.table(people_new);

for (let i = 0; i < 10; i++) {
    console.log("hfehbfh");
}
