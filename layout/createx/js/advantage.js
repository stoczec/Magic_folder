const advantage__cards = document.querySelector('.advantage__cards');

const advantageData = [
    {
        id: 1,
        logo: './img/advantage/ic-delivery.svg',
        title: 'Fast Worldwide Shipping',
        subtitle: 'Get free shipping over $250',
    },
    {
        id: 2,
        logo: './img/advantage/ic-call-center.svg',
        title: '24/7 Customer Support',
        subtitle: 'Friendly 24/7 customer support',
    },
    {
        id: 3,
        logo: './img/advantage/ic-shield.svg',
        title: 'Money Back Guarantee',
        subtitle: 'We return money within 30 days',
    },
    {
        id: 4,
        logo: './img/advantage/ic-credit-card.svg',
        title: 'Secure Online Payment',
        subtitle: 'Accept all major credit cards',
    },
];

advantageData.forEach(({ id, logo, title, subtitle }) => {
    // CREATE ELEMENTS
    const cardElem = document.createElement('div');
    const logoElem = document.createElement('img');
    const titleElem = document.createElement('h5');
    const subtitleElem = document.createElement('p');
    // ADD CLASSES
    cardElem.classList.add('advantage__card')
    logoElem.classList.add('advantage__img')
    titleElem.classList.add('advantage__title')
    subtitleElem.classList.add('advantage__subtitle')
    // ADD ELEMENTS ON THE PAGE
    advantage__cards.append(cardElem);
    cardElem.append(logoElem, titleElem, subtitleElem);
    // ADD STYLE & VALUE
    logoElem.src = logo;
    logoElem.alt = `Logo ID${id}`;
    titleElem.innerText = title;
    subtitleElem.innerText = subtitle;
});
