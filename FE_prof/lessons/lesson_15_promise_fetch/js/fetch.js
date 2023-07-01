const cards_container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    console.log(res.json())
);
// .then((json) => render_cards(json));

const render_cards = (users) => {
    users.forEach(({ name, email }) => {
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailElem = document.createElement('a');

        cardElem.classList.add('user_card');

        nameElem.innerText = `Name: ${name}`;
        emailElem.innerText = email;

        emailElem.href = `mailto:${email}`;

        cardElem.append(nameElem, emailElem);
        cards_container.append(cardElem);
    });
};
