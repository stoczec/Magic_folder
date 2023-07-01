const main__cards = document.querySelector('.main__cards');

const services = [
    'Бухгалтерское обслуживание',
    'Налоговое планирование',
    'Аудит бухгалтерской отчетности',
    'Управленческий учет',
    'Разработка бизнес-планов',
    'Учет заработной платы и персонала',
];

const func_create_card = (array) => {
    // CREATE PAGE ELEMENTS
    array.forEach((el) => {
        const cardEl = document.createElement('div');
        const titleEl = document.createElement('h3');
        const buttonEl = document.createElement('a');

        main__cards.append(cardEl);
        cardEl.append(titleEl, buttonEl);

        cardEl.classList.add('main__card');

        titleEl.innerText = el;
        buttonEl.href = '#';
        buttonEl.innerText = 'Подробнее';
    });
};

func_create_card(services);

// BLOCK ========== ABOUT US ========== //
