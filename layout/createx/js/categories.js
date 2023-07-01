const categories__carousel = document.querySelector('.categories__carousel');

const categoriesData = [
    {
        id: 1,
        image: './img/categories/tops.png',
        title: 'Tops',
    },
    {
        id: 2,
        image: './img/categories/t_shirts.png',
        title: 'T-shirts',
    },
    {
        id: 3,
        image: './img/categories/caps.png',
        title: 'Caps',
    },
    {
        id: 4,
        image: './img/categories/sandals.png',
        title: 'Sandals',
    },
    {
        id: 5,
        image: './img/categories/jackets.png',
        title: 'Jackets',
    },
    {
        id: 6,
        image: './img/categories/coats.png',
        title: 'Coats',
    },
];

categoriesData.forEach(({ id, image, title }) => {
    const cardElem = document.createElement('div');
    const imgContainerElem = document.createElement('div');
    const imgElem = document.createElement('img');
    const titleElem = document.createElement('a');

    cardElem.classList.add('categories__card');
    imgContainerElem.classList.add('categories__img');
    titleElem.classList.add('categories__titleCard');

    categories__carousel.append(cardElem);
    cardElem.append(imgContainerElem, titleElem);
    imgContainerElem.append(imgElem);

    imgElem.src = image;
    imgElem.alt = `ID product ${id}`;
    titleElem.innerText = title;
});
