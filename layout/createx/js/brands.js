const brands = document.querySelector('.brands');

const brandsData = [
    {
        from: 'url(../img/brands/vans-g.svg)',
        to: 'url(../img/brands/vans.svg)',
    },
    {
        from: 'url(../img/brands/diesel-g.svg)',
        to: 'url(../img/brands/diesel.svg)',
    },
    {
        from: 'url(../img/brands/under-armour-g.svg)',
        to: 'url(../img/brands/under-armour.svg)',
    },
    {
        from: 'url(../img/brands/columbia-g.svg)',
        to: 'url(../img/brands/columbia.svg)',
    },
    {
        from: 'url(../img/brands/levis-g.svg)',
        to: 'url(../img/brands/levis.svg)',
    },
    {
        from: 'url(../img/brands/mango-g.svg)',
        to: 'url(../img/brands/mango.svg)',
    },
];

brandsData.forEach((el) => {
    // CREATE ELEMENT
    const cardEl = document.createElement('div');
    const cardColorEl = document.createElement('div');
    // ADD ON PAGE
    brands.append(cardEl);
    // ADD STYLE
    cardEl.style.backgroundImage = el.from;
    // cardColorEl.style.display = 'none';
    // cardColorEl.style.backgroundImage = el.to;

    cardEl.addEventListener('mouseover', () => {
        cardEl.style.backgroundImage = el.to;
        // cardEl.style.transition = '2s';
    });
    cardEl.addEventListener('mouseout', () => {
        cardEl.style.backgroundImage = el.from;

        // cardEl.style.transition = '2s';
    });
});
