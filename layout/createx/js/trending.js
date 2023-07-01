const trending_cards = document.querySelector('.trending_cards');

const trendingData = [
    {
        id: 1,
        image: './img/trending/shirt.png',
        title: 'Shirt with insertion lace trims',
        price: 49.95,
    },
    {
        id: 2,
        image: './img/trending/watch.png',
        title: 'Chrono watch with blue leather belt',
        price: 120.6,
    },
    {
        id: 3,
        image: './img/trending/coat.png',
        title: 'Check coat with colour contrast',
        price: 183.45,
    },
];

trendingData.forEach(({ id, image, title, price }) => {
    // CREATE PAGE ELEMENT
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('a');
    const priceElem = document.createElement('p');
    // ADD CLASS
    cardElem.classList.add('trending_cards__card');
    imgElem.classList.add('trending_cards__img');
    titleElem.classList.add('trending_cards__title');
    priceElem.classList.add('trending_cards__price');
    // ADD ELEMENT ON THE PAGE
    trending_cards.append(cardElem);
    cardElem.append(imgElem, titleElem, priceElem);
    // ADD STYLE ELEMENT
    imgElem.src = image;
    imgElem.alt = `ID ${id}`;
    titleElem.innerText = title;
    priceElem.innerText = `$${price}`;
});
