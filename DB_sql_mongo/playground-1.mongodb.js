/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('testUsers');

// Insert a few documents into the sales collection.
db.users.insertMany([
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
]);
db.users.find();
// 1. Вывести всех пользователей с именем 'John' и возрастом больше 25 лет.
db.users.find({
  firstName: 'John',
  age: { $gt: 25 },
});
// 2. Вывести всех пользователей с email-адресами, оканчивающимися на '.com'.
db.users.find({
  email: { $regex: '.com' },
});
// 3. Вывести всех пользователей, у которых возраст не равен 30.
db.users.find({
  age: { $ne: 30 },
});
// 4. Вывести всех пользователей с именем 'Anna' или 'Maria'.
db.users.find({
  firstName: { $in: ['Anna', 'Maria'] },
});
// 5. Обновить возраст пользователя с id 5 на 40 лет.
db.users.updateOne({ _id: 5 }, { $set: { age: 40 } });
// 6. Удалить пользователя с именем 'Alex'.
db.users.deleteOne({
  firstName: 'Alex',
});
// 7. Обновить email пользователя с именем 'Sophia' на 'sophia@example.com'.
db.users.updateOne(
  { firstName: 'Sophia' },
  { $set: { email: 'sophia@example.com' } }
);
// 8. Вывести всех пользователей, у которых возраст больше 30 и меньше 40.
db.users.find({ age: { $gt: 30, $lt: 40 } });
// 9. Вывести всех пользователей с именами, содержащими букву 'a'.
db.users.find({
  firstName: { $regex: 'a' },
});
// 10. Обновить телефон пользователя с id 2 на '555-123-4567'.
db.users.updateOne({ _id: 2 }, { $set: { phone: '555-123-4567' } });
// 11. Удалить всех пользователей с возрастом 20 лет.
db.users.deleteMany({ age: 20 });
// 12. Обновить имя пользователя с email-адресом 'johndoe@example.com' на 'Jonathan'.
db.users.updateOne(
  { email: 'johndoe@example.com' },
  { $set: { firstName: 'Jonathan' } }
);
// 13. Вывести всех пользователей с именем 'Emma' или 'Olivia' и возрастом больше 18 лет.
db.users.find({ firstName: { $in: ['Emma', 'Olivia'] }, age: { $gt: 18 } });
// 14. Вывести всех пользователей, у которых возраст не меньше 25 и не больше 30.
db.users.find({ age: { $lte: 30, $gte: 25 } });
// 15. Обновить веб-сайт пользователя с именем 'Daniel' на 'danielwebsite.com'.
db.users.updateOne(
  { firstName: 'Daniel' },
  { $set: { website: 'danielwebsite.com' } }
);
// 16. Удалить свойство 'phone' у всех пользователей.
db.users.updateMany({}, { $unset: { phone: '' } });
// 17. Вывести всех пользователей с возрастом, не входящим в диапазон от 30 до 40 лет.
// db.users.find({ $or: [{ {age: { $lt: 30}}, {age: {$gt: 40}} } ] });
// 18. Обновить фамилию пользователя с именем 'Emily' на 'Johnson'.
db.users.updateOne({ firstName: 'Emily' }, { $set: { firstName: 'Johnson' } });
// 19. Вывести всех пользователей, у которых возраст равен 25 и имя не равно 'John'.
db.users.find({ age: { $eq: 25 }, firstName: { $ne: 'John' } });
// 20. Обновить свойство 'website' у всех пользователей, добавив префикс 'http://' к текущему значению.
// db.users.updateMany({},{website:{}})
