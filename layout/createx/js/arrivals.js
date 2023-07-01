const arrivals__carousel = document.querySelector('.arrivals__carousel');

const cardsData = [
    {
        id: 1,
        image: './img/arrivals/cap.jpg',
        title: 'Black and white sport cap',
        price: '18.15',
    },
    {
        id: 2,
        image: './img/arrivals/glasses.jpg',
        title: 'Metal bridge sunglasses',
        price: '89.95',
    },
    {
        id: 3,
        image: './img/arrivals/romper.jpg',
        title: 'Green baby romper',
        price: '20.40',
    },
    {
        id: 4,
        image: './img/arrivals/jeans.jpg',
        title: 'Mid-rise slim cropped fit jeans',
        price: '40.00',
    },
    {
        id: 5,
        image: './img/arrivals/earrings.jpg',
        title: 'Red dangle earrings',
        price: '29.95',
    },
    // {
    //     id: 6,
    //     image: './img/arrivals/baby_shoes.jpg',
    //     title: 'Baby shoes with laces',
    //     price: '30.60',
    // },
];

cardsData.forEach(({ id, image, title, price }) => {
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('a');
    const priceElem = document.createElement('p');

    cardElem.classList.add('arrivals__products__card');
    imgElem.classList.add('arrivals__products__img');
    titleElem.classList.add('arrivals__products__title');
    priceElem.classList.add('arrivals__products__price');

    arrivals__carousel.append(cardElem);
    cardElem.append(imgElem, titleElem, priceElem);

    imgElem.src = image;
    imgElem.alt = `ID product ${id}`;
    titleElem.innerText = title;
    priceElem.innerText = `$${price}`;
});

//---------- BUTTON CAROUSEL ACTIVE ----------//

const buttons = document.querySelectorAll('.arrivals__products__button');

buttons.forEach((el) => {
    el.addEventListener('click', () => {
        buttons.forEach((btn) => {
            btn.classList.remove('carousel_active');
        });
        el.classList.add('carousel_active');
    });
});
