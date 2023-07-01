const users = [
  {
    _id: 1,
    firstName: 'Leanne',
    secondName: 'Graham',
    age: 25,
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
  },
  {
    _id: 2,
    firstName: 'John',
    secondName: 'Doe',
    age: 30,
    username: 'johndoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    website: 'johndoe.com',
  },
  {
    _id: 3,
    firstName: 'Emily',
    secondName: 'Smith',
    age: 28,
    username: 'emilysmith',
    email: 'emilysmith@example.com',
    phone: '987-654-3210',
    website: 'emilysmith.net',
  },
  {
    _id: 4,
    firstName: 'Michael',
    secondName: 'Johnson',
    age: 35,
    username: 'mjohnson',
    email: 'mjohnson@example.com',
    phone: '555-123-4567',
    website: 'mjohnson.com',
  },
  {
    _id: 5,
    firstName: 'Sophia',
    secondName: 'Brown',
    age: 27,
    username: 'sophiabrown',
    email: 'sophiabrown@example.com',
    phone: '789-456-1230',
    website: 'sophiabrown.org',
  },
  {
    _id: 6,
    firstName: 'David',
    secondName: 'Wilson',
    age: 32,
    username: 'dwilson',
    email: 'dwilson@example.com',
    phone: '333-555-7777',
    website: 'dwilson.com',
  },
  {
    _id: 7,
    firstName: 'Olivia',
    secondName: 'Davis',
    age: 31,
    username: 'odavis',
    email: 'odavis@example.com',
    phone: '444-888-2222',
    website: 'odavis.net',
  },
  {
    _id: 8,
    firstName: 'Daniel',
    secondName: 'Anderson',
    age: 29,
    username: 'danderson',
    email: 'danderson@example.com',
    phone: '777-999-3333',
    website: 'danderson.org',
  },
  {
    _id: 9,
    firstName: 'Emma',
    secondName: 'Taylor',
    age: 26,
    username: 'etaylor',
    email: 'etaylor@example.com',
    phone: '222-444-6666',
    website: 'etaylor.com',
  },
  {
    _id: 10,
    firstName: 'Aiden',
    secondName: 'Moore',
    age: 33,
    username: 'amoore',
    email: 'amoore@example.com',
    phone: '666-111-5555',
    website: 'amoore.net',
  },
];

// 1. Вывести всех пользователей с именем 'John' и возрастом больше 25 лет.
// 2. Вывести всех пользователей с email-адресами, оканчивающимися на '.com'.
// 3. Вывести всех пользователей, у которых возраст не равен 30.
// 4. Вывести всех пользователей с именем 'Anna' или 'Maria'.
// 5. Обновить возраст пользователя с id 5 на 40 лет.
// 6. Удалить пользователя с именем 'Alex'.
// 7. Обновить email пользователя с именем 'Kate' на 'kate@example.com'.
// 8. Вывести всех пользователей, у которых возраст больше 30 и меньше 40.
// 9. Вывести всех пользователей с именами, содержащими букву 'a'.
// 10. Обновить телефон пользователя с id 2 на '555-123-4567'.
// 11. Удалить всех пользователей с возрастом 20 лет.
// 12. Обновить имя пользователя с email-адресом 'john@example.com' на 'Jonathan'.
// 13. Вывести всех пользователей с именем 'Sarah' или 'Jessica' и возрастом больше 18 лет.
// 14. Вывести всех пользователей, у которых возраст не меньше 25 и не больше 35.
// 15. Обновить веб-сайт пользователя с именем 'Mark' на 'markwebsite.com'.
// 16. Удалить свойство 'phone' у всех пользователей.
// 17. Вывести всех пользователей с возрастом, не входящим в диапазон от 25 до 40 лет.
// 18. Обновить фамилию пользователя с именем 'Emily' на 'Johnson'.
// 19. Вывести всех пользователей, у которых возраст равен 30 и имя не равно 'John'.
// 20. Обновить свойство 'website' у всех пользователей, добавив префикс 'http://' к текущему значению.
