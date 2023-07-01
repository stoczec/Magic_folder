const numbers = [23, 65, -1, 98, -7, 77, 37, -8, 544, 17];
const greetings = ["Hello", "Hi", "hey", "good afternoon", "good evening"];

const negativeNumbers = numbers.filter((el) => el < 0);
// console.log(negativeNumbers);

// 2. Сформировать новый массив из numbers, в который войдут все положительные числа, оканчивающиеся на 7
const positiveNumbers = numbers.filter((el) => el > 0 && el % 10 == 7);
// console.log(positiveNumbers);
// 3. Сформировать новый массив из greetings, в который попадут только приветсвия длиннне 5 символов
const newGreetings = greetings.filter((el) => el.length > 5);
// console.log(newGreetings);

const caps_greeting = greetings.map((el) => el.toUpperCase());
const low_greeting = greetings.map((el) => el.toLowerCase());
// console.log(caps_greeting);
// console.log(low_greeting);
// 6. Сформировать новый массив, в который попадут только те приветствия, которые начинаются с маленькой буквы
const newLowGreetings = greetings.filter((el) => el === el.toLowerCase());
// console.log(newLowGreetings);

const h_greetings = greetings.filter((el) => el[0].toLowerCase() === "h");
// console.log(h_greetings);

// 8. Сформировать новый массив, в который попадут приветствия длиннее 5 символов, поднятые в верхний регистр
// => ['GOOD AFTERNOON', 'GOOD EVENING']
const longGreetings_5 = greetings
    .filter((el) => el.length > 5)
    .map((el) => el.toUpperCase());
// console.log(longGreetings_5);
// 9. Сформировать новый массив, в который попадут все приветствия с первой большой буквой
const upFirstLetterGreetings = greetings.map(
    (el) => el[0].toUpperCase() + el.slice(1)
);
// console.log(upFirstLetterGreetings);
// 10. Из массива greetings вернуть элементы, длина которых больше 6
const greetings_6_filter = greetings.filter((el) => el.length > 6);
const greetings_6_find = greetings.find((el) => el.length > 6);
// 11. Отсортировать элементы в массиве numbers от меньшего к большему
numbers.sort((a, b) => a - b); // исходный массив numbers мутирует

// 12. Отсортировать элементы в массиве numbers от большего к меньшему
numbers.sort((a, b) => b - a); // обновленный массив numbers мутирует


