// ДЗ
// 1. Создать кнопку, при клике на которую цвет заднего фона меняется на случайный
const back_color_btn = document.querySelector(".back_color_btn");
const back_color_block = document.querySelector(".back_color_block");

const func_random_color = () => Math.round(Math.random() * 255);
back_color_btn.addEventListener("click", () => {
    back_color_block.style.backgroundColor = `rgb(${func_random_color()},${func_random_color()},${func_random_color()})`;
});

// 2. Создать генератор бросаемых костей (кнопка + div)
const dice_btn = document.querySelector(".dice_btn");
const dice_block = document.querySelector(".dice_block");
const func_random_dice = () => Math.ceil(Math.random() * 6);
dice_btn.addEventListener("click", () => {
    dice_block.innerText = `${func_random_dice()}X${func_random_dice()}`;
});

// 3*. Создать кнопку и инпут.
//При нажатии на кнопку введенное в инпут значение выводится в консоль
const input_btn = document.querySelector(".input_btn");
const input = document.querySelector(".input");
input_btn.addEventListener("click", () => {
    console.log(input.value);
});
