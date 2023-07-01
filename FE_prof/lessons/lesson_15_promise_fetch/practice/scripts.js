const cards_container = document.querySelector('.container');

fetch('https://reqres.in/api/users?page=1')
    .then((res) => res.json())
    .then((json) => renderCards(json.data));

const renderCards = (users) => {
    users.forEach(({ avatar, first_name, last_name }) => {
        const cardElem = document.createElement('div');
        const avatarElem = document.createElement('img');
        const first_nameElem = document.createElement('p');

        avatarElem.src = avatar;
        first_nameElem.innerText = `${first_name} ${last_name} `;

        cardElem.append(avatarElem, first_nameElem);
        cards_container.append(cardElem);
    });
};
