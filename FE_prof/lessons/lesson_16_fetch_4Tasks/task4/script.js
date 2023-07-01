const get_user = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((json) => card_render(json));
};

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { id } = event.target;
    console.log(id.value);
    get_user(id.value);
    id.value = '';
});
const cards = document.querySelector('.cards');
const card_render = ({ name, email }) => {
    cards.innerText = '';
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a');

    nameElem.innerText = `Name: ${name}`;
    emailElem.innerText = email;

    emailElem.href = `mailto:${email}`;

    cardElem.append(nameElem, emailElem);
    cards.append(cardElem);
};
