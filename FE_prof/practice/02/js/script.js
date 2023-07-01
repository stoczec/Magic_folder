// const numbers = [];
// let sum = 0;
// const funcNewArray = () => {
//     for (let i = 0; i < 10; i++) {
//         numbers.push(Math.round(Math.random() * 20));
//     }
// };

// funcNewArray();
// numbers.forEach((el) => (sum += el));
// console.log(numbers);
// console.log(sum);
//-----------------------------------------------------------------
// const arrayObjects = [];
// let obj = {};
// const funcNewArray = () => {
//     for (let i = 0; i < 10; i++) {
//         obj = { age: Math.round(Math.random() * 30) };
//         arrayObjects.push(obj);
//     }
// };
// funcNewArray();
// console.log(arrayObjects);
// const ageArray = [];
// arrayObjects.forEach((el) => (el.age > 18 ? ageArray.push(el.age) : el));
// console.log(ageArray);
//-----------------------------------------------------------------
//Создайте новый массив из элементов существующего,
//в котором каждый элемент умножен на 2:

// const numbers = [];
// const randomNumbers = () => {
//     for (let i = 0; i < 10; i++) {
//         numbers.push(Math.round(Math.random() * 20));
//     }
// };
// randomNumbers();
// const multiNumbers = [];
// const divisionNumbers = [];
// numbers.forEach((el) => multiNumbers.push(el * 2));
// numbers.forEach((el) => (el % 2 == 0 ? divisionNumbers.push(el) : el));

// console.log(numbers);
// console.log(divisionNumbers);
// console.log(multiNumbers);

//Дан массив с числами.
//С помощью созданной нами функции each увеличьте каждый элемент в два раза.

const numbers = [];
const randomNumbers = () => {
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.round(Math.random() * 20));
    }
};
randomNumbers();

const each = (array, callback) => {
    const result = [];
    for (const el of array) {
        result.push(callback(el));
    }
    return result;
};

const answer = each(
    numbers,
    (multiNumbers = (num) => {
        return num * 2;
    })
);
console.log(numbers);
console.log(answer);

//Дан массив со строками. С помощью созданной нами функции each
//переверните символы каждой строки в обратном порядке.

const arrStr = ["hello", "bye", "guten morgen", "Dmytro"];
const backStr = (str) => {
    const strSplit = str.split("");
    const strReverse = strSplit.reverse();
    const strJoin = strReverse.join("");
    return strJoin;
};

const eachStr = (array, callback) => {
    const result = [];
    for (const el of array) {
        result.push(callback(el));
    }
    return result;
};

console.log(eachStr(arrStr, backStr));

//Дан массив со строками. С помощью созданной нами функции each
//сделайте заглавным первый символ каждой строки.
const upFirstLetter = (str) => {
    const firstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    return firstLetter;
};

const eachStr1 = (array, callback) => {
    const result = [];
    for (const el of array) {
        result.push(callback(el));
    }
    return result;
};

console.log(eachStr1(arrStr, upFirstLetter));
