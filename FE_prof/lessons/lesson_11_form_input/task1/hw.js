/*
Создайте форму сбора данных работников с тремя полями: 
Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". 
Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.
Добавьте к форме поля ввода для ставки (rate), количества дней (days) и 
добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.
Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.
Стилизуйте карточки
*/

const form = document.querySelector(".form");
const cards_container = document.querySelector(".cards_container");
const cards = [];
let id_num = 0;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { firstname, secondname, age, rate, days, picture } = event.target;
    id_num++;
    const card = {
        id: id_num,
        firstname: firstname.value,
        secondname: secondname.value,
        age: +age.value,
        rate: +rate.value,
        days: +days.value,
        picture: picture.value,
    };

    cards.push(card);
    render_card(cards);
    event.target.reset();
});

const render_card = (arr) => {
    arr.forEach((el) => {
        if (el.id === arr.length) {
            const cardElem = document.createElement("div");
            const firstnameElem = document.createElement("p");
            const secondnameElem = document.createElement("p");
            const ageElem = document.createElement("p");
            const salaryElem = document.createElement("p");
            const pictureElem = document.createElement("img");

            cardElem.classList.add("cardElem");

            cards_container.append(cardElem);
            cardElem.append(
                firstnameElem,
                secondnameElem,
                ageElem,
                salaryElem,
                pictureElem
            );

            firstnameElem.innerText = `First name: ${el.firstname}`;
            secondnameElem.innerText = `Second name: ${el.secondname}`;
            ageElem.innerText = `Age: ${el.age}`;
            salaryElem.innerText = `Salary: ${el.rate * el.days}$`;
            pictureElem.src = el.picture;
            pictureElem.alt = el.id;
        }
    });
};
