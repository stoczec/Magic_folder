// Циклы

// 1.  Выведите с помощью цикла столбец чисел от 1 до 100. Показать решение.

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// 2.  Выведите с помощью цикла столбец чисел от 100 до 1. Показать решение.

// for (let i = 100; i > 0; i--) {
//     console.log(i);
// }

// 3.  Выведите с помощью цикла столбец четных чисел от 1 до 100. Показать решение.
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// 4. Заполните массив 10-ю иксами с помощью цикла. Показать решение.
// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push("x");
// }
// console.log(arr);

// 5. Заполните массив числами от 1 до 10 с помощью цикла. Показать решение.
// const arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);

// 6.Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части. Показать решение.

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

// 7.Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. Показать решение.

// const arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 10 + 1));
// }
// console.log(arr);

// 8.Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. Показать решение.

// const arr = [1, 0, -8, 85, 63, -56, 158, 2, -9, 398];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// 9.Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите. Показать решение.

// const arr = [1, 0, -8, 85, 5, 63, -56, 158, 2, -9, 398, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         console.log("Есть");
//         break;
//     }
//     console.log(arr[i]);
// }

// 10.Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. Показать решение.

// const arr = [1, 0, -8, 85, 5, 63, -56, 158, 2, -9, 398, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
// }

// 11.Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. Показать решение.

// const arr = [1, 0, -8, 85, 5, 63, -56, 158, 2, -9, 398, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 2);
//     console.log(sum);
// }

// 12.Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество). Показать решение.

// const arr = [1, 0, -8, 85, 5, 63, -56, 158, 2, -9, 398, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
// }

// console.log(sum / arr.length);

// 13.

// for (let i = 1; i > 0; i++) {
// let a = prompt("First number");
// let b = prompt("Second number");
// let c = "";
// if (Number(a) / 1 === Number(a)) {
//     a = Number(a);
// }
// if (Number(b) / 1 === Number(b)) {
//     b = Number(b);
// }
// if (typeof a === typeof c) {
//     alert("First number is NaN!");
// } else if (typeof b === typeof c) {
//     alert("Second number is Nan!");
// } else if (a === b) {
//     alert(`${a} = ${b}`);
// } else if (a > b) {
//     alert(`${a} > ${b}`);
// } else if (a < b) {
//     alert(`${a} < ${b}`);
// }

// const divColor = document.createElement("div");
// divColor.innerText = "ABRACADABRA";
// divColor.style.border = "1px solid black";
// divColor.style.width = "200px";
// document.body.append(divColor);

// const divButton = document.createElement("button");
// divButton.innerText = "Push!";
// divButton.style.width = "50px";
// divButton.style.height = "25px";
// divButton.style.margin = "5px";
// divColor.append(divButton);

// divButton.addEventListener("click", function () {
//     console.log("You push the button!");
// });

// divColor.addEventListener("mouseover", function () {
//     divColor.style.backgroundColor = "red";
// });
// divColor.addEventListener("mouseout", function () {
//     divColor.style.backgroundColor = "blue";
// });
//---------------------------------------------------------------------------------
// Задача: Лучшее время для покупки и продажи акций

// Дан массив prices, где prices[i] — цена акции на i-й день.

// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.

// Напишите функцию, которая возвращает максимальную прибыль, которую можно получить от сделки. Если прибыль получить нельзя, вернуть 0.

// Пример 1:
// Ввод: prices = [7,1,5,3,6,4]
// Вывод: 5
// Объяснение: Обратите внимание, что покупка во 2й день и продажа в 1й день не возможны, потому что вы должны купить перед продажей.

// Пример 2:
// Ввод: prices = [7,6,4,3,1]
// Вывод: 0

// Пример 3:
// Ввод: prices = [7,3,5,1,10,4]
// Вывод: 9

// let array = [10, 20, 30, 40, 50, 60, 70];
// let arr = array;
// console.log(arr.reverse());
// console.log(array.reverse());
// let [a, b, c, d, ...ostatok] = array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(ostatok);
//             0,1,2,3,4,5
// const array = [7, 6, 4, 3, 1, 5, 9, 96, 100];
// const myFunk = (arr) => {
//     let min = arr[0];
//     let difference = 0;
//     let index = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             index = i;
//         } else if (index == arr.length - 1) {
//             difference = min;
//             break;
//         }
//     }
//     for (let j = index + 1; j < arr.length; j++) {
//         if (arr[j] - arr[index] > difference) {
//             difference = arr[j] - arr[index];
//         }
//     }
//     return difference;
// };

// console.log(myFunk(array));
//---------------------------------------------------------------------------------
// Тема объекты
// Создать объект "человек", содержащий информацию о имени, возрасте, поле и городе проживания.
// Добавить метод объекта "человек", который выводит эту информацию в консоль.
// Создать массив из нескольких объектов "человек".
// Используя цикл, вывести в консоль информацию о каждом человеке из массива.
// Добавить в объект "человек" свойство "интересы", которое является массивом из нескольких строк.
// Добавить метод объекта "человек", который выводит в консоль список их интересов.

// const person = {
//     name: "Dmytro",
//     age: 38,
//     gender: "male",
//     city: "Mariupol",
// };

// const personOne = {
//     name: "Nastya",
//     age: 27,
//     gender: "female",
//     city: "Mariupol",
// };

// person.introdusing = () => {
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.gender);
//     console.log(person.city);
// };

// person.introdusing();

// const humans = [person, personOne];

// for (let i = 0; i < humans.length; i++) {
//     humans[i].intresting = ["coding", "coking"];
//     humans[i].interes = () => {
//         console.log(humans[i].intresting);
//     };
//     humans[i].interes();
// }
//---------------------------------------------------------------------------------
// на СВОЙСТВА style
// Создать элемент div с помощью JavaScript и задать ему ширину и высоту.
// Используя свойство style, изменить цвет фона элемента div на зеленый.
// Добавить элементу div границу с толщиной 2 пикселя и цветом черным.
// Используя свойство style, изменить шрифт текста внутри элемента div на Arial с размером 14 пикселей.
// Создать два элемента div и задать им разные цвета фона.
// Используя свойство style, добавить им отступы сверху и снизу в 20 пикселей.

// const divOne = document.createElement("div");
// document.body.append(divOne);
// divOne.innerText = "DIV 1";
// divOne.style.width = "100px";
// divOne.style.height = "100px";
// divOne.style.backgroundColor = "green";
// divOne.style.border = "2px solid black";
// divOne.style.fontSize = "14px";
// divOne.style.fontFamily = "Arial";
// divOne.style.margin = "20px 0";

// const divTwo = document.createElement("div");
// document.body.append(divTwo);
// divTwo.innerText = "DIV 2";
// divTwo.style.width = "100px";
// divTwo.style.height = "100px";
// divTwo.style.backgroundColor = "blue";
// divTwo.style.border = "2px solid black";
// divTwo.style.fontSize = "14px";
// divTwo.style.fontFamily = "Arial";
// divTwo.style.margin = "20px 0";

// let check = true;
// const divChangeColorOver = () => {
//     if (check) {
//         divOne.style.backgroundColor = "red";
//     } else {
//         divOne.style.backgroundColor = "violet";
//     }
//     check = !check;
// };

// divOne.addEventListener("mouseover", divChangeColorOver);

// const qwerty = document.createElement("img");
// document.body.append(qwerty);
// document.body.append(qwerty);
// const elem = document.getElementById("123");
// elem.style.width = "100px";
// qwerty.style.height = "100px";
const img = document.querySelectorAll("img");
// const funk_img_big = () => {
//     img.classList.toggle("big__img");
// };

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener(
        "click",
        (funk_img_big = () => {
            img[i].classList.toggle("big__img");
        })
    );
}


