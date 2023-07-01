// Select the database to use.
use('group_181022');
db.users.find();

// ОПЕРАТОРЫ UPDATE
// $set - если свойство существует, то значение будет заменено на указанное. Если свойства не существует, то оно будет создано с указанным значением
// $unset - удаляет свойство
// $rename - переименовывает свойство
// $inc - увеличивает/уменьшает число на переданное значение
// $push - добавляет элемент в конец массива
// $addToSet - добавляет элемент в конец массива (проверяет дубли)
// $each - используется с $push и $addToSet, для добавления нескольких значений в массив
// $pull - удаляет определенное значение из массива

// Увеличить зп на 1000
db.users.updateMany({}, { $inc: { salary: 1000 } });
//
db.users.updateMany({ gender: 'm' }, { $inc: { salary: -2000 } });

db.users.updateMany({}, { $set: { cities: [] } });
db.users.updateMany({}, { $push: { cities: 'Paris' } });
db.users.updateMany(
  {},
  { $push: { cities: { $each: ['Berlin', 'Madrid', 'Milan'] } } }
);

db.users.updateMany({}, { $addToSet: { cities: 'Paris' } });
db.users.updateMany({}, { $addToSet: { cities: 'Yerevan' } });
db.users.updateMany(
  {},
  {
    $addToSet: {
      cities: {
        $each: ['Berlin', 'Madrid', 'Milan', 'Bremen', 'Hamburg', 'Koln'],
      },
    },
  }
);

// Удалить из массива cities всех документов, значение Milan

db.users.updateMany(
  {},
  {
    $pull: {
      cities: 'Milan',
    },
  }
);

// Обнулить всем массив
db.users.updateMany({}, { $set: { cities: [] } });

// ПАГИНАЦИЯ И СОРТИРОВКА

// limit() - ограничивает выборку до указанного значения
db.users.find().limit(3); // Выведет первые 3 документа в коллекции

// skip() - пропускает указанное количество документов в выборке
db.users.find().skip(1); // Выведет все документы коллекции кроме первого

// Комбинирование
db.users.find().skip(1).limit(2); // Выведет 2 и 3 документы из коллекции

// sort()
db.users.find().sort({ age: 1 }); // от меньшего к большему
db.users.find().sort({ age: -1 }); // от большего к меньшему

// ПРАКТИКА
// 1. Создать коллекцию profiles
// 2. Заполнить коллекцию 7 документами с профайлами со свойствами
// (_id, firstname, lastname, age, gender, position, salary, country, city).
// Используйте следующие данные:
db.createCollection('profiles');

use('group_181022');
db.profiles.find();

db.profiles.insertMany([
  {
    _id: 1,
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 28,
    gender: 'male',
    position: 'Product manager',
    salary: 5000,
    country: 'Germany',
    city: 'Berlin',
  },
  {
    _id: 2,
    firstname: 'Svetlana',
    lastname: 'Ivanova',
    age: 38,
    gender: 'female',
    position: 'Designer',
    salary: 2000,
    country: 'Germany',
    city: 'Bremen',
  },
  {
    _id: 3,
    firstname: 'Olga',
    lastname: 'Sidorova',
    age: 28,
    gender: 'female',
    position: 'PR manager',
    salary: 4500,
    country: 'Germany',
    city: 'Dresden',
  },
  {
    _id: 4,
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 56,
    gender: 'male',
    position: 'Product manager',
    salary: 5700,
    country: 'Germany',
    city: 'Berlin',
  },
  {
    _id: 5,
    firstname: 'Semen',
    lastname: 'Petrov',
    age: 28,
    gender: 'male',
    position: 'Product manager',
    salary: 4000,
    country: 'France',
    city: 'Paris',
  },
  {
    _id: 6,
    firstname: 'Olga',
    lastname: 'Petrova',
    age: 27,
    gender: 'female',
    position: 'Product manager',
    salary: 8000,
    country: 'Spain',
    city: 'Madrid',
  },
  {
    _id: 7,
    firstname: 'Ivan',
    lastname: 'Ushanov',
    age: 34,
    gender: 'male',
    position: 'Product manager',
    salary: 5100,
    country: 'Germany',
    city: 'Berlin',
  },
]);
// 3. Пользователю с айди 3 измените значение свойства city на пустой масси
db.profiles.updateOne({ _id: 3 }, { $set: { city: [] } });
// 4. Пользователю с айди 3 добавить в массив city город Bremen
db.profiles.updateOne({ _id: 3 }, { $addToSet: { city: 'Bremen' } });
// 5. Пользователям с именами Ольга и Семен изменить свойство на пустой массив
// и добавить в него города Madrid, Paris и Milan
db.profiles.updateMany(
  { firstname: { $in: ['Olga', 'Semen'] } },
  { $set: { city: [] } }
);
db.profiles.updateMany(
  { firstname: { $in: ['Olga', 'Semen'] } },
  { $addToSet: { city: { $each: ['Madrid', 'Paris', 'Milan'] } } }
);
// 6. Всем документам добавить свойство status со значением 'not defined'
db.profiles.updateMany({}, { $set: { status: 'not defined' } });
// 7. Удалить у документа с айди 7 свойство age
db.profiles.updateOne({ _id: 7 }, { $unset: { age: '' } });
// 8. Отсортировать всех по возрасту в порядке возрастания
db.profiles.find().sort({ age: 1 });
// 9. Добавить документу с айди 7 свойство age со значением 34
db.profiles.updateOne({ _id: 7 }, { $set: { age: 34 } });
// 10. Всем людям старше 30 (вкл. 30) обновить свойство status значением 'older than 30'
db.profiles.updateMany(
  { age: { $gte: 30 } },
  { $set: { status: 'older than 30' } }
);
// 11. Всем людям младше 30 (не вкл. 30) обновить свойство status значением 'younger than 30'
db.profiles.updateMany(
  { age: { $lt: 30 } },
  { $set: { status: 'younger than 30' } }
);
// 12. Вывести всех мужчин в возрасте от 30 до 40 лет включительно
db.profiles.find({ gender: 'male', age: { $gte: 30, $lte: 40 } });
// 13. Женщинам старше 30 увеличить зарплату на 1000
db.profiles.updateOne(
  { gender: 'female', age: { $gt: 30 } },
  { $inc: { salary: 1000 } }
);
//
use('group_181022');

// ДЗ
// 1. Людям с айди от 4 до 6 увеличить зарплату на 300
db.profiles.updateMany({ _id: { $in: [4, 5, 6] } }, { $inc: { salary: 300 } });
// 2. Вывести первые три документа из коллекции
db.profiles.find().limit(3);
// 3. Вывести 4, 5, 6 и 7 документы из коллекции
db.profiles.find().skip(3).limit(4);
// 4. Отсортировать документы по возрасту людей (от самого младшего к самому старшему)
db.profiles.find().sort({ age: 1 });
// 5. Отсортировать документы по зарплате людей (от самой большой зарплаты до самой маленькой)
db.profiles.find().sort({ salary: -1 });
