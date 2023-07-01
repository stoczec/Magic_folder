// https://docs.google.com/document/d/1O5hNx5wnfLvVkdesKo_QVFh4H5IQCM4E/edit#

/* Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50
(т.е. 100, 90, 80, 70, 60, 50).
Добавить созданные параграфы в div с классом numbers. */

const numbers = document.createElement('div');
numbers.classList.add('numbers');
document.body.append(numbers);

for (let i = 100; i >= 50; i -= 10) {
  const paragraph = document.createElement('p');
  paragraph.innerText = i;
  numbers.append(paragraph);
}

// -------------------------------------------------------------------------------
/* Написать цикл, который проходится по массиву строк, для каждой строки создает параграф
и добавляет его в div с классом strings_container.
Строки взять произвольные. */

const strings_container = document.createElement('div');
strings_container.classList.add('strings_container');
document.body.append(strings_container);

const strings = ['Hallo', 'Moin', 'entschuldigung', "Wie get's?", 'Hause'];

for (let i = 0; i < strings.length; i++) {
  const para = document.createElement('p');
  para.innerText = strings[i];
  strings_container.append(para);
}

// -------------------------------------------------------------------------------
/* Написать цикл, который проходится по массиву с объектами - у объектов свойства
first_name, last_name и  age (данные взять произвольные) -
и создает карточки только для совершеннолетних пользователей.
Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
Добавить все карточки в div с классом users_container. */

const users = [
  { first_name: 'Ivan', last_name: 'Ivanov', age: 15 },
  { first_name: 'Petr', last_name: 'Petrov', age: 37 },
  { first_name: 'Anna', last_name: 'Ivanova', age: 56 },
];

const users_container = document.createElement('div');
users_container.classList.add('users_container');
document.body.append(users_container);

for (let i = 0; i < users.length; i++) {
  const userCard = document.createElement('div');
  const userFirstName = document.createElement('p');
  const userLastName = document.createElement('p');
  const userAge = document.createElement('p');

  userCard.append(userFirstName, userLastName, userAge);
  users_container.append(userCard);

  userFirstName.innerText = users[i].first_name;
  userLastName.innerText = users[i].last_name;
  userAge.innerText = users[i].age;
}
