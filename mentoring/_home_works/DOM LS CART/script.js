let products = [
  { id: 1, title: 'Bike', price: 1000, count: 4, totalPrice: 0 },
  { id: 2, title: 'Boat', price: 1000000, count: 2, totalPrice: 0 },
  { id: 3, title: 'Car', price: 25000, count: 10, totalPrice: 0 },
  { id: 4, title: 'Boots', price: 150, count: 1, totalPrice: 0 },
];

const addItemStorage = (array) => {
  localStorage.setItem('prod', JSON.stringify(array));
};
const readLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('prod')) === null) {
    return [];
  } else {
    let result = JSON.parse(localStorage.getItem('prod'));
    return result;
  }
};

const newProd = readLocalStorage();

function removeProduct(productId) {
  const products1 = newProd.filter((p) => p.id !== productId);
  addItemStorage(products1);
}

// ELEM_BLOCK ========== FORM ========== //
const form = document.querySelector('.form');

// Счетчик UFO
let countUFO = 1;
// Собираем данные с input'a, формируем новый объект и добавляем в массив products
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { element } = event.target;
  const newCard = {
    id: Date.now(),
    title: !element.value ? `UFO-${countUFO}` : element.value,
    price: 1000 * countUFO,
    count: 1,
    totalPrice: 0,
  };
  countUFO++;

  if (readLocalStorage().length === 0) {
    const arr = [...products];
    arr.push(newCard);
    addItemStorage(arr);
    renderCards(readLocalStorage());
  } else {
    const arr = readLocalStorage();
    arr.push(newCard);
    addItemStorage(arr);
    renderCards(readLocalStorage());
  }

  event.target.reset();
});
// ELEM_BLOCK ========== RENDER ========== //
const cardsContainer = document.querySelector('.cards_container');

const renderCards = (array = readLocalStorage()) => {
  cardsContainer.innerHTML = '';
  array
    .filter((el) => el.count > 0)
    .forEach((el) => {
      // Создаем карточку
      const cardElem = document.createElement('div');
      const cardDeleteElem = document.createElement('p');
      const titleElem = document.createElement('p');
      const priceElem = document.createElement('p');
      const cardCounterContainerElem = document.createElement('div');
      const btnCountMinusELem = document.createElement('button');
      const btnCountPlusElem = document.createElement('button');
      const cardCounterElem = document.createElement('p');
      const totalPriceElem = document.createElement('p');

      // Добавляем классы элементам карточки
      cardElem.classList.add('card');
      cardDeleteElem.classList.add('card_delete');
      titleElem.classList.add('card_title');
      priceElem.classList.add('card_price');
      cardCounterContainerElem.classList.add('card_container-counter');
      btnCountMinusELem.classList.add('card_btn-minus', 'card_btn');
      btnCountPlusElem.classList.add('card_btn-plus', 'card_btn');
      cardCounterElem.classList.add('card_counter');
      totalPriceElem.classList.add('card_totalPrice');

      // Добавляем элементы на страницу
      cardsContainer.append(cardElem);
      cardElem.append(
        cardDeleteElem,
        titleElem,
        priceElem,
        cardCounterContainerElem,
        totalPriceElem
      );
      cardCounterContainerElem.append(
        btnCountMinusELem,
        cardCounterElem,
        btnCountPlusElem
      );
      // Добавляем контент в элементы
      cardDeleteElem.innerText = 'X';
      titleElem.innerText = el.title;
      priceElem.innerText = `${el.price.toLocaleString()}$`;
      btnCountMinusELem.innerText = '-';
      btnCountPlusElem.innerText = '+';
      cardCounterElem.innerText = el.count;
      totalPriceElem.innerText = `${(el.price * el.count).toLocaleString()}$`;
      // Удаление карточки
      cardDeleteElem.addEventListener('click', () => {
        cardElem.remove();
        const arr = readLocalStorage().filter((elem) => elem.id !== el.id);
        addItemStorage(arr);
      });
      // Добавляем обработчик событий на кнопки счетчика
      btnCountMinusELem.addEventListener('click', () => {
        cardCounterElem.innerText = --el.count;
        const change = +cardCounterElem.innerText;
        totalPriceElem.innerText = `${(el.price * change).toLocaleString()}$`;

        const arr = readLocalStorage()
          .map((elem) => {
            if (elem.id === el.id) {
              elem.count = change;
              return elem;
            } else {
              return elem;
            }
          })
          .filter((elem) => elem.count > 0);

        addItemStorage(arr);
        el.count === 0 ? cardElem.remove() : '';
      });

      btnCountPlusElem.addEventListener('click', () => {
        cardCounterElem.innerText = ++el.count;
        const change = +cardCounterElem.innerText;
        totalPriceElem.innerText = `${(el.price * change).toLocaleString()}$`;
        const arr = readLocalStorage().map((elem) => {
          if (elem.id === el.id) {
            elem.count = change;
            return elem;
          } else {
            return elem;
          }
        });

        addItemStorage(arr);
      });
    });
};

readLocalStorage().length === 0
  ? renderCards(addItemStorage(products))
  : renderCards(readLocalStorage());

const btnLS = document.querySelector('.btnLS');
btnLS.addEventListener('click', () => {
  const arr = readLocalStorage();
  localStorage.removeItem('prod');
  renderCards(arr);
});
