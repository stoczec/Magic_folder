const text = document.querySelector(".text");
const eeee = document.querySelector(".eeee");
const eeee2 = document.querySelector(".eeee2");

text.style.color = "red";
eeee.style.color = "blue";
eeee2.style.fontSize = "28px";

const textNew = document.createElement("p");
const div = document.querySelector(".cards_container");
div.append(textNew);
textNew.innerText = "gfhghffwjejh";

const userDiv = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

div.append(userDiv);

p1.innerText = "Firstname: Oleg";
p2.innerText = "Lastname: Petrov";
p3.innerText = "Age: 56";

userDiv.classList.add("userCard");

const img = document.createElement("img");
userDiv.append(img);
userDiv.append(img, p1, p2, p3);
img.setAttribute("src", "https://picsum.photos/id/237/100/100");
img.setAttribute("alt", "avatar");
img.style.width = "150px";
img.style.height = "150px";
img.style.objectFit = "cover";

const students = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        age: 20,
        major: "History",
        avg_grade: 4.5,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Doe",
        age: 21,
        major: "Mathematics",
        avg_grade: 3.8,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 3,
        firstname: "Bob",
        lastname: "Smith",
        age: 22,
        major: "Physics",
        avg_grade: 3.2,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 4,
        firstname: "Alice",
        lastname: "Johnson",
        age: 19,
        major: "Chemistry",
        avg_grade: 4.0,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 5,
        firstname: "Mike",
        lastname: "Davis",
        age: 23,
        major: "Computer Science",
        avg_grade: 3.7,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 6,
        firstname: "Mary",
        lastname: "Wilson",
        age: 20,
        major: "History",
        avg_grade: 2.9,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 7,
        firstname: "David",
        lastname: "Brown",
        age: 21,
        major: "Mathematics",
        avg_grade: 3.5,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 8,
        firstname: "Emily",
        lastname: "Taylor",
        age: 24,
        major: "Physics",
        avg_grade: 3.1,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 9,
        firstname: "Brian",
        lastname: "Miller",
        age: 22,
        major: "Chemistry",
        avg_grade: 4.2,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 10,
        firstname: "Jessica",
        lastname: "Anderson",
        age: 19,
        major: "Computer Science",
        avg_grade: 3.6,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 11,
        firstname: "Steven",
        lastname: "Lee",
        age: 23,
        major: "History",
        avg_grade: 4.1,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 12,
        firstname: "Sarah",
        lastname: "Johnson",
        age: 20,
        major: "Mathematics",
        avg_grade: 3.9,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 13,
        firstname: "Daniel",
        lastname: "Williams",
        age: 21,
        major: "Physics",
        avg_grade: 3.4,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 14,
        firstname: "Amanda",
        lastname: "Garcia",
        age: 22,
        major: "Chemistry",
        avg_grade: 3.3,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
    {
        id: 15,
        firstname: "Jason",
        lastname: "Davis",
        age: 19,
        major: "Computer Science",
        avg_grade: 3.0,
        avatar: "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
    },
];

div.style.display = "flex";
div.style.flexWrap = "wrap";

students.forEach((el) => {
    const studentCard = document.createElement("div");
    const nameElem = document.createElement("p");
    const ageElem = document.createElement("p");
    const majorElem = document.createElement("p");
    const gradeElem = document.createElement("p");
    const avatarElem = document.createElement("img");

    studentCard.classList.add("studentCard");
    studentCard.style.margin = "auto"

    nameElem.innerText = `Name: ${el.firstname} ${el.secondname}`;
    ageElem.innerText = `Age: ${el.age}`;
    majorElem.innerText = `Major: ${el.major}`;
    gradeElem.innerText = `Grade: ${el.avg_grade}`;
    avatarElem.style.width = "150px";
    avatarElem.style.height = "150px";
    avatarElem.setAttribute("src", el.avatar);
    avatarElem.setAttribute("alt", "avatar");
    avatarElem.style.objectFit = "cover";

    studentCard.append(nameElem, ageElem, majorElem, gradeElem, avatarElem);
    div.append(studentCard);
});
