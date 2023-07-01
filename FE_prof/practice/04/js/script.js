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

const container = document.createElement("div");
document.body.prepend(container);
container.classList.add("container");
container.style.display = "flex";
container.style.justifyContent = "space-evenly";
container.style.flexWrap = "wrap";

const selectDiv = document.createElement("div");
document.body.prepend(selectDiv);
container.classList.add("container-select");
selectDiv.style.display = "flex";
selectDiv.style.justifyContent = "center";

const select = document.createElement("select");
selectDiv.append(select);

const choice = [
    "Sort by:",
    "ID",
    "First Name",
    "Last Name",
    "Age",
    "Major",
    "AVG Grade",
];

choice.forEach((el) => {
    const optionsElem = document.createElement("option");
    select.append(optionsElem);
    optionsElem.innerText = el;
    el === "Sort by:" ? optionsElem.setAttribute("disabled", "") : null;

const sortCards = (el)=>{

}

});



students.forEach((el) => {
    const cardElem = document.createElement("div");
    const idElem = document.createElement("h1");
    const firstnameElem = document.createElement("p");
    const lastnameElem = document.createElement("p");
    const ageElem = document.createElement("p");
    const majorElem = document.createElement("p");
    const avg_gradeElem = document.createElement("p");

    container.append(cardElem);
    cardElem.append(
        idElem,
        firstnameElem,
        lastnameElem,
        ageElem,
        majorElem,
        avg_gradeElem
    );

    idElem.innerText = `Student ID: ${el.id}`;
    firstnameElem.innerText = `Student Name: ${el.firstname}`;
    lastnameElem.innerText = `Student Last Name: ${el.lastname}`;
    ageElem.innerText = `Student Age: ${el.age}`;
    majorElem.innerText = `Student major: ${el.major}`;
    avg_gradeElem.innerText = `Student AVG Grade: ${el.avg_grade}`;

    cardElem.style.width = "250px";
    cardElem.style.border = "2px dashed grey";
    cardElem.style.borderRadius = "20px";
    cardElem.style.padding = "10px";
    cardElem.style.margin = "10px auto";
    cardElem.style.textAlign = "center";
    cardElem.style.backgroundColor = "#99ffe5";

    idElem.style.textDecoration = "underline";
    idElem.style.color = "#725126";

    el.age > 20
        ? ((ageElem.style.color = "#1144E6"), (ageElem.style.fontSize = "20px"))
        : el.age < 20
        ? (ageElem.style.color = "#2E7336")
        : (ageElem.style.color = "#9E05CE");
});

// id: 1,
// firstname: "John",
// lastname: "Doe",
// age: 20,
// major: "History",
// avg_grade: 4.5,
