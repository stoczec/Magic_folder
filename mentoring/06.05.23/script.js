// Написать программу, которая через prompt считывает число и
// выводит в консоль число равное 10% от введенного числа

const num = +prompt('Enter number');
console.log(num * 0.1);

// Написать программу, которая получает два числа и выводит наименьшее
const num1 = +prompt('Enter first number');
const num2 = +prompt('Enter second number');
if (num1 < num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений:
// ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
const number = +prompt('Enter number');
if (number < 100) {
    console.log('Число меньше 100');
} else if (number > 100) {
    console.log('Число больше 100');
} else {
    console.log('Число равно 100');
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах)
//  и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний,
// или ‘Hi, <name>’, если пользователь несовершеннолетний.

const name = prompt('Enter your name');
const age = +prompt('Enter your age');
if (age >= 18) {
    console.log('Hello, ' + name);
} else {
    console.log('Hi, ' + name);
}
