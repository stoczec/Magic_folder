const sale_cards = document.querySelector('.sale_cards');

const saleData = [
    {
        id: 1,
        image: './img/sale/bag.png',
        title: 'Leather crossbody bag with gold hardware',
        price: 179.0,
        discount: 50,
    },
    {
        id: 2,
        image: './img/sale/jeans.png',
        title: 'Skinny push-up jeans',
        price: 80.0,
        discount: 50,
    },
    {
        id: 3,
        image: './img/sale/boots.png',
        title: 'CWide heel suede ankle boots',
        price: 148.95,
        discount: 20,
    },
];

saleData.forEach(({ id, image, title, price, discount }) => {
    // CREATE PAGE ELEMENT
    const cardElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('a');
    const costElem = document.createElement('div');
    const priceElem = document.createElement('p');
    const discountElem = document.createElement('p');
    const badgeElem = document.createElement('div');
    // ADD CLASS
    cardElem.classList.add('sale_cards__card');
    badgeElem.classList.add('sale_cards__badge');
    imgElem.classList.add('sale_cards__img');
    titleElem.classList.add('sale_cards__title');
    costElem.classList.add('sale_cards__cost');
    priceElem.classList.add('sale_cards__price');
    discountElem.classList.add('sale_cards__discount');
    // ADD ELEMENT ON THE PAGE
    sale_cards.append(cardElem);
    cardElem.append(badgeElem, imgElem, titleElem, costElem);
    costElem.append(discountElem, priceElem);
    // ADD STYLE ELEMENT & VALUE
    badgeElem.innerText = `-${discount}%`
    imgElem.src = image;
    imgElem.alt = `ID ${id}`;
    titleElem.innerText = title;
    discountElem.innerText = `$${price - (price * discount) / 100}`;
    priceElem.innerText = `$${price}`;
});
