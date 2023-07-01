fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((json) => {
        console.log(json.products);
        createCards(json.products);
    });

const container = document.querySelector('.container');
const createCards = (products) => {
    products.forEach(({ images, title, description, price }) => {
        // CREATE ELEMENT
        const cardElem = document.createElement('div');
        const imgElem = document.createElement('img');
        const titleElem = document.createElement('h2');
        const descriptionElem = document.createElement('p');
        const priceElem = document.createElement('p');
        // ADD CLASSES
        cardElem.classList.add('card');
        // ADD ELEMENTS ON THE PAGE
        container.append(cardElem);
        cardElem.append(imgElem, titleElem, descriptionElem, priceElem);
        // ADD DATA TO ELEMENTS
        imgElem.src = images[0];
        imgElem.alt = title;
        titleElem.innerText = title;
        descriptionElem.innerText = description;
        priceElem.innerText = `$ ${price}`;
    });
};
