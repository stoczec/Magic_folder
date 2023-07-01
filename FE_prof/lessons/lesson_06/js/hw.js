const students = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        age: 20,
        major: "History",
        avg_grade: 4.5,
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Doe",
        age: 21,
        major: "Mathematics",
        avg_grade: 3.8,
    },
    {
        id: 3,
        firstname: "Bob",
        lastname: "Smith",
        age: 22,
        major: "Physics",
        avg_grade: 3.2,
    },
    {
        id: 4,
        firstname: "Alice",
        lastname: "Johnson",
        age: 19,
        major: "Chemistry",
        avg_grade: 4.0,
    },
    {
        id: 5,
        firstname: "Mike",
        lastname: "Davis",
        age: 23,
        major: "Computer Science",
        avg_grade: 3.7,
    },
    {
        id: 6,
        firstname: "Mary",
        lastname: "Wilson",
        age: 20,
        major: "History",
        avg_grade: 2.9,
    },
    {
        id: 7,
        firstname: "David",
        lastname: "Brown",
        age: 21,
        major: "Mathematics",
        avg_grade: 3.5,
    },
    {
        id: 8,
        firstname: "Emily",
        lastname: "Taylor",
        age: 24,
        major: "Physics",
        avg_grade: 3.1,
    },
    {
        id: 9,
        firstname: "Brian",
        lastname: "Miller",
        age: 22,
        major: "Chemistry",
        avg_grade: 4.2,
    },
    {
        id: 10,
        firstname: "Jessica",
        lastname: "Anderson",
        age: 19,
        major: "Computer Science",
        avg_grade: 3.6,
    },
    {
        id: 11,
        firstname: "Steven",
        lastname: "Lee",
        age: 23,
        major: "History",
        avg_grade: 4.1,
    },
    {
        id: 12,
        firstname: "Sarah",
        lastname: "Johnson",
        age: 20,
        major: "Mathematics",
        avg_grade: 3.9,
    },
    {
        id: 13,
        firstname: "Daniel",
        lastname: "Williams",
        age: 21,
        major: "Physics",
        avg_grade: 3.4,
    },
    {
        id: 14,
        firstname: "Amanda",
        lastname: "Garcia",
        age: 22,
        major: "Chemistry",
        avg_grade: 3.3,
    },
    {
        id: 15,
        firstname: "Jason",
        lastname: "Davis",
        age: 19,
        major: "Computer Science",
        avg_grade: 3.0,
    },
];
// Задачи:
// 1. Создайте новый массив, который содержит только имена студентов.
const array_firstname = students.map((el) => el.firstname);
// console.log(array_firstname);
// 2. Создайте новый массив, который содержит студентов, у которых средний балл больше 3.5
const array_avg_grade = students
    .filter(({ avg_grade }) => avg_grade > 3.5)
    .map(({ firstname }) => `${firstname}`);
// console.log(array_avg_grade);
// 3. Создайте новый массив, который содержит только имена и фамилии студентов.
const array_firstname_lastname = students.map(
    ({ lastname, firstname }) => `${firstname} ${lastname}`
);
// console.table(array_firstname_lastname.join("\n"));
// 4. Создайте новый массив, где студенты будут отсортированны по возрасту (по возрастанию)
const array_age = [...students].sort((a, b) => a.age - b.age);
// console.table(array_age);
// 5. Создайте новый массив, который содержит только имена студентов, чья фамилия начинается на букву "S".
const array_name_s = students
    .filter((el) => el.lastname[0] == "S")
    .map((el) => el.firstname);
// console.log(array_name_s);
// 6. Создайте новый массив, который содержит информацию о студентах в следующем формате: { name: "John Doe", major: "Computer Science" }.
const array_name_major = students.map(
    ({ firstname, lastname, major }) =>
        `name: "${firstname} ${lastname}", major: "${major}"`
);
// console.log(array_name_major);
// 7. Создайте новый массив, где студенты будут отсортированны по среднему баллу (по убыванию)
const array_student_sort_avg_grade = [...students]
    .sort((a, b) => b.avg_grade - a.avg_grade)
    .map(
        ({ firstname, lastname, avg_grade }) =>
            `name: "${firstname} ${lastname}", avg_grade: "${avg_grade}"`
    );
console.log(array_student_sort_avg_grade);
