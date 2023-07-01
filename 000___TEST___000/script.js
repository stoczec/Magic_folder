// // Задан массив users с первоначальными данными:
// let users = [
//   { id: 1, name: 'Steven', salary: '5000' },
//   { id: 2, name: 'Neena', salary: '10000' },
//   { id: 3, name: 'John', salary: '4500' },
// ];

// // Напишите 3 функции, которые будут менять этот массив:
// // Функция addUser(name, salary). Функция должна добавить нового пользователя как последний элемент в массив users.
// // Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)
// const addUser = (name, salary) => {
//   const newId = users[users.length - 1].id + 1;
//   const newUser = {
//     id: newId,
//     name: name,
//     salary: salary,
//   };
//   users.push(newUser);
// };

// addUser('Ivan', '5000');
// addUser('Petr', '5000');
// addUser('Dima', '5000');
// // console.log(users);
// // Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users
// const removeUser = (id) => {
//   const check = users.map((el) => el.id).includes(id);
//   if (check) {
//     return users.splice(id - 1, 1);
//   } else {
//     return 'User not found';
//   }
// };
// console.log(removeUser(2));
// console.log(users);
// console.log(removeUser(2));
// console.log(users);
// // Функция changeUser(id, name, salary). Функция должна по id найти заданный элемент и переопределить значение name и salary на значение, указанные в аргументе в момент вызова

// // Примечание:
// // Все функции должны менять исходный массив users
// // Необходимо реализовать обработку случая, если в функции передать неизвестный id (реализовать процесс на ваше усмотрение).
// // Будет достаточно реализовать сообщение об ошибке в консоли.
// // В приложенном результате продемонстрировать вызовы всех функции на произвольных примерах.

// const changeUser = (id, name, salary) => {
//   const index = users.findIndex((el) => el.id === id);
//   if (index < 0) {
//     return 'Error';
//   }
//   users[index].name = name;
//   users[index].salary = salary;
// };

// console.log(changeUser(1, 'Vasya', '1'));
// console.log(users);

const arr = [1, 2, 3, 2, 1];
const arr2 = arr.map((el) => el).reverse();
const x = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let m = 0; m < arr2.length; m++) {
      if (arr2[m] !== arr[i]) {
        return 'NO';
      }
    }
    return 'YES';
  }
};
console.log(x());
// console.log(arr === arr.map((el) => el).reverse() ? 'true' : 'false');
