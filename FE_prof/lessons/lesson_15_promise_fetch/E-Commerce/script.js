const new_arrivals__cards = document.querySelector('.new_arrivals__cards');

const staff = [
    {
        id: 1,
        name: 'Cap',
        description: 'Black and white sport cap',
        price: 18.15,
        rate: 5,
        image: '',
    },
    {
        id: 2,
        name: 'Glasses',
        description: 'Metal bridge sunglasses',
        price: 89.95,
        rate: null,
        image: '',
    },
    {
        id: 3,
        name: 'Romper',
        description: 'Green baby romper',
        price: 20.4,
        rate: 4,
        image: '',
    },
    {
        id: 4,
        name: 'Jeans',
        description: 'Mid-rise slim cropped fit jeans',
        price: 40.0,
        rate: null,
        image: '',
    },
    {
        id: 5,
        name: 'Earrings',
        description: 'Red dangle earrings',
        price: 29.95,
        rate: 5,
        image: '',
    },
    {
        id: 6,
        name: 'Shoes',
        description: 'Baby shoes with laces',
        price: 30.6,
        rate: null,
        image: '',
    },
];

staff.forEach(({name, description, price, rate, image}) => {
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const like_heartElem = document.createElement('img');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const rateElem = document.createElement('p');

    new_arrivals__cards.append(cardElem);
    cardElem.append(imgElem, like_heartElem, titleElem, priceElem);
    if (rate != null) {
        cardElem.append(rate);
    }

    imgElem.src = image;
    imgElem.alt = name;
    titleElem.innerText = description;
    priceElem.innerText = `$${price}`;
});
