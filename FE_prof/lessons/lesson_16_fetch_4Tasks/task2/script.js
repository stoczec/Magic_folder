const get_user = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((json) => create_card(json));
};

let userID = 2;
get_user(userID);

const container = document.querySelector('.container');

const create_card = ({
    name,
    username,
    email,
    address: { city, street, zipcode, suite },
}) => {
    // CLEAN CONTAINER
    container.innerText = '';
    // CREATE ELEMENT
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const usernameElem = document.createElement('p');
    const emailElem = document.createElement('a');
    const adressElem = document.createElement('p');
    // ADD CLASSES
    cardElem.classList.add('card');
    // ADD ELEMENTS ON THE PAGE
    container.prepend(cardElem);
    cardElem.append(nameElem, usernameElem, emailElem, adressElem);
    // ADD DATA TO ELEMENTS
    nameElem.innerText = `Name: ${name}`;
    usernameElem.innerText = `Username: ${username}`;
    emailElem.innerText = email;
    adressElem.innerText = `Adress: ${city} ${street}  ${zipcode}  ${suite}`;
    // ADD DATA TO ELEMENTS
    emailElem.href = `mailto:${email}`;
};

const [left_btn, right_btn] = document.querySelectorAll('.buttons button');

left_btn.addEventListener('click', () => {
    --userID;
    userID < 1 ? (userID = 10) : '';
    get_user(userID);
});

right_btn.addEventListener('click', () => {
    ++userID;
    userID > 10 ? (userID = 1) : '';
    get_user(userID);
});
