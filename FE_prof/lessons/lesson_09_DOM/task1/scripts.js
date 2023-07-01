// 1. При клике на кнопку менять цвет текста параграфа на красный

const button = document.querySelector(".button");
const paragraph = document.querySelector(".text");

const func = () => {
    paragraph.style.color = "red";
};
button.addEventListener("click", func);

// 2. При клике на кнопку выводить в консоль сообщение 'hello, world!'
const show_btn = document.querySelector(".show_btn");

const func1 = () => {
    console.log("hello world!");
};
show_btn.addEventListener("click", func1);

// 3. Создать зеленый квадрат с размерами 200х200px.
//При клике на кнопку увеличивать квадрат до 300х300px и менять его цвет на синий.
const green_block = document.querySelector(".green_block");
const change_square_btn = document.querySelector(".change_square_btn");

green_block.style.width = "200px";
green_block.style.height = "200px";
green_block.style.backgroundColor = "green";
const func_change_style_square = () => {
    if (green_block.style.backgroundColor === "green") {
        green_block.style.width = "300px";
        green_block.style.height = "300px";
        green_block.style.backgroundColor = "blue";
    } else {
        (green_block.style.width = "200px"),
            (green_block.style.height = "200px"),
            (green_block.style.backgroundColor = "green");
    }
};
change_square_btn.addEventListener("click", func_change_style_square);
// 4. Есть красный квадрат с размерами 30х30px.
// При клике на кнопку добавлять к размерам по 10px с каждой стороны.
const red_block = document.querySelector(".red_block");
const change_square_btn1 = document.querySelector(".change_square_btn1");
const change_square_btn2 = document.querySelector(".change_square_btn2");

let size = 30;

const func_change_size = (size_el) => {
    red_block.style.width = size_el + "px";
    red_block.style.height = size_el + "px";
    red_block.style.backgroundColor = "red";
};
func_change_size(size);

change_square_btn1.addEventListener("click", () =>
    func_change_size((size += 10))
);
change_square_btn2.addEventListener("click", () =>
    func_change_size((size -= 10))
);
// 5. Создать кнопку. При клике на кнопку менять ее цвет на зеленый

const max_size_button = document.querySelector(".max_size_button");

max_size_button.addEventListener("click", (event) => {
    if (event.target.style.backgroundColor != "green") {
        event.target.style.backgroundColor = "green";
    } else {
        event.target.style.backgroundColor = "";
    }
});

// 6. Создать кнопку. При клике на кнопку менять ее цвет на случайный
const but_random_color = document.querySelector(".but_random_color");

const func_rand = () => Math.round(Math.random() * 255);

but_random_color.addEventListener("click", (event) => {
    event.target.style.backgroundColor = `rgb(${func_rand()}, ${func_rand()}, ${func_rand()})`;
});

const add_string_btn = document.querySelector(".add_string_btn");
const strings_container = document.querySelector(".strings_container");
const func_add_strings = () => {
    const paragraph = document.createElement("p");
    strings_container.append(paragraph);
    paragraph.innerText = "Hello world!";
    paragraph.style.color = `rgb(${func_rand()}, ${func_rand()}, ${func_rand()})`;
};

add_string_btn.addEventListener("click", func_add_strings);
// 8. При клике на кнопку в cards_container создавать карточку с двумя параграфами (имя + фамилия). 
// Данные взять произвольные.
// Стилизовать карточку: border, width, paddind, border-radius (css)
const create_card_btn = document.querySelector(".create_card_btn");
const cards_container = document.querySelector(".cards_container");

const func_add_cards = () => {
    const card = document.createElement("div");
    const first_name = document.createElement("p");
    const second_name = document.createElement("p");
    card.classList.add("card");
    cards_container.append(card);
    card.append(first_name, second_name);
    first_name.innerText = "Name";
    second_name.innerText = "Last Name";
};

create_card_btn.addEventListener("click", func_add_cards);


