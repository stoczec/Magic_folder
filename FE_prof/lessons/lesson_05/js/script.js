const user = {
    id: 1,
    firstname: "Dmytro",
    lastname: "Geraschenko",
    age: 38,
    online: true,
    groups: ["47/48", "18022022"],
    adress: {
        street: "New street",
        city: "Langenhorn",
        country: "German",
        zipcode: 0033,
    },
};

// console.log(user.adress);

const str = user.firstname + " " + user.lastname + " " + "(" + user.age + ")";
const str1 = `${user.firstname} ${user.lastname} (${user.age})`;
// console.log(str1);

const str2 = `${user.adress.street} ${user.adress.city} ${user.adress.country} ${user.adress.zipcode}`;
// console.log(str2);

const users = [
    {
        id: 1,
        name: "Anton",
        age: 34,
        online: true,
    },
    {
        id: 2,
        name: "Oleg",
        age: 56,
        online: false,
    },
    {
        id: 3,
        name: "Irina",
        age: 22,
        online: true,
    },
];

const array = users.filter((el) => el.age > 30);
// console.log(array);

// 4. Сформировать массив из имен пользователей, которые онлайн
// => ['Anton', 'Irina']
const array1 = users.filter((el) => el.online == true).map((el) => el.name);
console.log(array1);