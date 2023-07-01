const add_user_form = document.querySelector(".add_user_form");

add_user_form.addEventListener("submit", (event) => {
    event.preventDefault(); // запрещаем форме обновлять страницу при отправке формы

    const { firstname, lastname, age } = event.target;

    console.log(firstname.value);
    console.log(lastname.value);
    console.log(age.value);
    event.target.reset();
});

// 1. Создать форму с двумя инпутами и кнопкой - название товара и цена.
// 2. При отправке формы данные из инпутов собираются и из этих данных формируется объект и выводится в консоль
// Пример объекта:
// {
//   title: значение из инпута 1,
//   price: значение из инпута 2
// }
// 3. Инпуты очищаются после отправик формы
// 4. Созданный в результате отправки формы объект добавлять в массив products
// 5. На основе массива products создавать карточки товаров в div с классом products_container
const add_item = document.querySelector(".add_item");
const products_container = document.querySelector(".products_container");
const products = [];
let id_num = 0;
add_item.addEventListener("submit", (event) => {
    event.preventDefault();
    const { title, price, picture } = event.target;
    id_num++;
    const cart = {
        id: id_num,
        title: title.value,
        price: +price.value,
        picture: picture.value,
    };
    products.push(cart);
    render_cards(products);
    event.target.reset();
    console.log(cart);
});

const render_cards = (arr) => {
    arr.forEach((el) => {
        if (el.id === arr.length) {
            const cardElem = document.createElement("div");
            const titleElem = document.createElement("p");
            const priceElem = document.createElement("p");
            const imgElem = document.createElement("img");
            cardElem.classList.add("cardElem");
            cardElem.append(titleElem, priceElem, imgElem);
            products_container.append(cardElem);
            titleElem.innerText = `Title: ${el.title}`;
            priceElem.innerText = `Price: ${el.price}`;
            imgElem.src = el.picture;
            imgElem.alt = el.title;
        }
    });
};
