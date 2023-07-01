// const xxx = document.querySelector("xxx") - dqs
// const func_ = ()=>{}
// 1. Создать кнопку с размерами 50х50px. При клике на кнопку увеличивать ее размер на 5px и менять цвет заднего фона кнопки на случайный
const button = document.querySelector("button");

const func_rand = () => {
    return Math.round(Math.random() * 255);
};

let size = 50;

const func_size = (size_el) => {
    button.style.width = size_el + "px";
    button.style.height = size_el + "px";
};

func_size(size);

button.addEventListener("click", (event) => {
    func_size((size += 5));
    event.target.style.backgroundColor = `rgb(${func_rand()}, ${func_rand()}, ${func_rand()})`;
});
// 2. Создать инпут, кнопку и div. При клике на кнопку внутри div-а создавать параграф с текстом, который был введен в инпут
const input = document.querySelector(".input");
const text_btn = document.querySelector(".text_btn");
const div_text = document.querySelector(".div_text");

text_btn.addEventListener("click", () => {
    let str = input.value;
    const para = document.createElement("p");
    div_text.append(para);
    para.innerText = str;
    input.value = "";
});
/*-------------------------------*/

const photos = [
    "https://reqres.in/img/faces/7-image.jpg",
    "https://reqres.in/img/faces/8-image.jpg",
    "https://reqres.in/img/faces/9-image.jpg",
    "https://reqres.in/img/faces/10-image.jpg",
    "https://reqres.in/img/faces/11-image.jpg",
];

const image = document.querySelector(".image");

let photoIndex = 0;
image.src = photos[photoIndex];
image.addEventListener("click", (event) => {
    event.target.src = photos[photoIndex++];
    if (photoIndex === 5) {
        photoIndex = 0;
    }
    //event.target.src = photos[photoIndex++ % photos.length]
});

// ДЗ
// 4. Создать слайдер картинок с кнопками (< >).
//Ссылки на картинки хранятся в массиве. Первое фото - первое фото из массива

const btn_left = document.querySelector(".btn_left");
const btn_right = document.querySelector(".btn_right");

btn_left.addEventListener("click", () => {
    photoIndex--;
    if (photoIndex === -1) {
        photoIndex = 4;
    }
    image.src = photos[photoIndex % photos.length];
});
btn_right.addEventListener("click", () => {
    photoIndex++;
    image.src = photos[photoIndex % photos.length];
});

// const number = Number(prompt);
// let str = "";

// for (let i = number; i > 0; i = Math.floor(i) / 3) {
//     let rank = Math.floor(i) % 3;
//     str = rank + str;
// }
// console.log(str);
