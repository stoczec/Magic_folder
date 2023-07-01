fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((json) => render(json));

const container = document.querySelector('.container');
const render = (array) => {
    array.forEach(({ title, completed }) => {
        // CREATE ELEMENT
        const cardElem = document.createElement('div');
        const titelElem = document.createElement('p');
        const statusElem = document.createElement('p');
        // ADD CLASSES
        cardElem.classList.add('card');
        // ADD ELEMENTS ON THE PAGE
        container.append(cardElem);
        cardElem.append(titelElem, statusElem);
        // ADD DATA TO ELEMENTS
        titelElem.innerText = `Title: ${title}`;
        statusElem.innerText = `Status: ${completed ? 'done' : 'not done'}`;
        completed
            ? (cardElem.style.backgroundColor = 'mediumaquamarine')
            : (cardElem.style.backgroundColor = 'lightgray');
        // cardElem.style.backgroundColor = completed ? 'lightgreen' : 'lightgray';
    });
};
