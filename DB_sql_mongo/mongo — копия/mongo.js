// Create DB
// use group_181022

// Delete DB
db.dropDatabase();

// Show list all DB
// show darabase

// Create collaction
db.createCollection('users');

// Delete collaction
db.users.drop();

// Show list all table
// show table

// Add in collaction one document (object)
db.users.insertOne({
  _id: 1,
  firstname: 'Petr',
  lastname: 'Ivanov',
  age: 39,
});

// Add in collaction many documents (objects)
db.users.insertMany([
  {
    _id: 2,
    firstname: 'Senya',
    lastname: 'Ivanov',
    age: 29,
  },
  {
    _id: 3,
    firstname: 'Masha',
    lastname: 'Ivanova',
    age: 19,
  },
  {
    _id: 4,
    firstname: 'Ara',
    lastname: 'Ivanov',
    age: 32,
  },
]);

// Delete one document
db.users.deleteOne({ id: 1 });

// Delete many documents
db.users.deleteMany({ age: { $lt: 40 } });

// ОПЕРАТОРЫ СРАВНЕНИЯ (COMPARISON OPERATORS)
// $eq - равно (equal)
// $ne - не равно (not equal)
// $lt - меньше (less than)
// $lte - меньше или равно (less than or equal)
// $gt - больше (greater then)
// $gte - больше или равно (greater than or equal)
// $in - значение соответствует одному из списка (value matches one of the list)
// $nin - значение не соответствует ни одному из списка

// Logical operators
// $and
// $or

// View the contents of the collection
db.users.find();

// Windraw all document, where age >= 30
db.users.find({ age: { $gte: 30 } });

// Windraw all document, where age
db.users.find({ age: { $in: [32, 19] } });

// Вывести все документы, у которых age больше 40 и имя входит в список Ara и Masha
db.users.find({
  $and: [{ age: { $gte: 18 } }, { firstname: { $in: ['Ara', 'Masha'] } }],
});

db.users.find({
  age: { $gte: 18 },
  firstname: { $in: ['Ara', 'Masha'] },
});

// Вывести все документы, у которых age входит в диапазон между 20 и 40 (включительно)
db.users.find({
  $and: [{ age: { $gte: 20 } }, { age: { $lte: 40 } }],
});

db.users.find({
  age: { $gte: 20, $lte: 40 },
});

// ОПЕРАТОРЫ UPDATE
// $set -

//
db.users.updateOne({ _id: 3 }, { $set: { name: 'Boris' } });
//
db.users.updateOne({ _id: 3 }, { $set: { country: 'Germany' } });
// Всем документам добавить свойство salary со значением 0
db.users.updateMany({}, { $set: { salary: 0 } });
// $unset -
// У объекта с id 3, удалить свойство country
db.users.updateOne({ _id: 3 }, { $unset: { country: '' } });
// $rename -
// У всех документов переименовать name в first_name
db.users.updateMany({}, { $rename: { name: 'first_name' } });

// PRACTICE
db.users.find();

// 1. Удалить коллекцию users
db.users.drop();
// 2. Создать коллекцию users и заполнить документами (4 штуки)
// со следующими свойствами (_id, name, age, gender). Используйте следующие данные

// 1 Anatoliy 28 m
// 2 Svetlana 25 f
// 3 Nikita 33 m
// 4 Olga 22 f
db.createCollection('users');

db.users.insertMany([
  {
    _id: 1,
    name: 'Anatoliy',
    age: 28,
    gender: 'm',
  },
  {
    _id: 2,
    name: 'Svetlana',
    age: 25,
    gender: 'f',
  },
  {
    _id: 3,
    name: 'Nikita',
    age: 33,
    gender: 'm',
  },
  {
    _id: 4,
    name: 'Olga',
    age: 22,
    gender: 'f',
  },
]);

// 3. Вывести все документы, содержащие данные о женщинах
db.users.find({
  gender: 'f',
});

// 4. Вывести всех мужчин в возрасте от 30 до 38 лет включительно
db.users.find({
  gender: 'm',
  age: { $gte: 30, $lte: 38 },
});

// 5. Вывести людей, чье имя входит в список Anatoliy, Irina, Ivan, Semen, Olga
db.users.find({
  name: { $in: ['Anatoliy', 'Irina', 'Ivan', 'Semen', 'Olga'] },
});

// 6. Удалить всех пользователей младше 28 лет
db.users.deleteMany({ age: { $lt: 28 } });
