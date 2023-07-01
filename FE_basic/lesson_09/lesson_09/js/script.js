// Объекты

// let user = {
//     name: "John",
//     age: 30,
//     "likes cars": true,
// };

// console.log(user.name);
// console.log(user.aeg);

// user.isAdmin = true;

// console.log(user);

// delete user.age;

// console.log(user["likes cars"]);

// user["likes cars"] = false;

// console.log(user);

// let key = "is married";

// user[key] = false;

// console.log(user);

//   Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {};

// user.name = "John";
// user.surename = "Smith";
// user.name = "Pete";
// delete user.name;

// let user = {
//     name: "John",
//     surname: "Smith",
//     age: 30,
//     "likes cars": true,
// };

// for(let key in user){
//     console.log(key);
//     console.log(user[key]);
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Swizerland",
//     "+44": "UK",
//     //..,
//     "+1": "USA"
// };

// for(let code in codes){
//     console.log(code);
// }

// let numbers = [4, 1, 12, 15, 25, 96];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }

// console.log(sum);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }

// Функции

// let msg = "хало";

// function showMessage(){
//     console.log("Hello");
//     let message = "hello";
//     console.log(message);
//     console.log(msg);
// }

// showMessage();

// function showMessage(from, text = "hello"){
//     console.log(from + " " + text);
// }

// showMessage(,);
// showMessage("Dmytro", "no hello");

// function sum(a, b){
//     return a + b;
// }

// let result = sum(3, 6);

// console.log(result);

// function checkAge(age){
//     if (age > 18) {
//         return true;
//     }else{
//         return false;
//     }
// }

// let age = Number(prompt("How you are old?"));

// if (checkAge(age)) {
//     console.log("Access allowed ");
// }else{
//     console.log("Access is denied");
// }

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// let a = Math.floor(Math.random() * 10);
// let b = Math.floor(Math.random() * 10);
// console.log(a, b);
// console.log(min(a, b));

// function number(y){
//     if (y % 2 === 0) {
//         console.log("Yes");
//     }else{
//         console.log("No");
//     }
// }

// let x = Number(prompt("Enter number:"));

// number(x);

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}

console.log(pow(2, 4));
