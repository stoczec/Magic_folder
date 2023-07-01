const people = [
    {
        first_name: "Ivan",
        last_name: "Ivanov",
        age: 20,
        city: "Moscow",
        country: "Russia",
        active: true,
        rate: 15,
        hours: 100,
    },
    {
        first_name: "Petr",
        last_name: "Petrov",
        age: 12,
        city: "Berlin",
        country: "Germany",
        active: false,
        rate: 17,
        hours: 90,
    },
    {
        first_name: "irina",
        last_name: "Alexandrova",
        age: 46,
        city: "Paris",
        country: "France",
        active: true,
        rate: 20,
        hours: 150,
    },

    {
        first_name: "Denis",
        last_name: "Sokolov",
        age: 30,
        city: "Rome",
        country: "Italy",
        active: false,
        rate: 30,
        hours: 40,
    },
];

// 1.  Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)".
//Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

const usStr = people.map(
    ({ first_name, last_name, city, country }) =>
        `${first_name} ${last_name} (${city}, ${country})`
);
// console.log(usStr);

// 2. Сформируйте массив из объектов, в которых first_name начинается
//с буквы I (регистр может быть любым)
const i_people = people.filter(
    ({ first_name }) => first_name[0] === "I" || first_name[0] === "i"
);

const i_people2 = people.filter(
    ({ first_name }) => first_name[0].toUpperCase() === "I"
);

const i_people3 = people.filter(({ first_name }) =>
    first_name.toUpperCase().startsWith("I")
);

const arr = people.find(({ country }) => country === "Germany");
// console.log(arr);
// 4. Сформировать массив из имен и фамилий активных пользователей старше 30 лет (>=)
const arr1 = people
    .filter(({ active, age }) => active && age >= 30)
    .map(({ first_name, last_name }) => `${first_name} ${last_name}`);
// console.log(arr1);
// 5. Сформировать массив из имен и фамилий активных пользователей.
//При этом длина сформированной строки (имя + фамилия) должна быть больше 12 символов
const arr2 = people
    .filter(({ active }) => active)
    .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
    .filter((el) => el.length > 12);

// console.log(arr2);

const numbers = [1, 4, 32, 3, 56, 8, 44];
const sort_num = numbers.map((el) => el).sort((a, b) => a - b);
const sort_num1 = numbers.slice().sort((a, b) => a - b);
const sorted_numbers2 = [...numbers].sort((a, b) => a - b);
const numbers_copy = [...numbers]; // создаем копию массива

// console.log(sort_num);
// console.log(sort_num1);
// console.log(numbers);
// 7. Создать новый массив, в котором пользователи из массива people будут отсортированы в порядке уменьшения зарплаты.
//Зарплата рассчитывается перемножением ставки на кол-во часов
const new_arr = [...people].sort((a, b) => b.rate * b.hours - a.rate * a.hours);

console.log(new_arr);
