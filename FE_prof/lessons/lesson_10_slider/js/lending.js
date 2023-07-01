const viewport_width = 1920;

const func_scale = (viewWidth, elemSize) => {
    const scaleSize = ((elemSize * 100) / viewWidth).toFixed(2);
    return `${scaleSize}vw`;
};

const _container = document.querySelectorAll("._container");
_container.forEach((el) => {
    el.style.width = func_scale(viewport_width, 1300);
});

const header = document.querySelector(".header");
header.style.height = func_scale(viewport_width, 90);

const header__logo = document.querySelector(".header__logo");
header__logo.style.width = func_scale(viewport_width, 74);
header__logo.style.height = func_scale(viewport_width, 74);

const section = document.querySelector(".section");
section.style.height = func_scale(viewport_width, 700);

const main__menu = document.querySelector(".main__menu");
main__menu.style.height = func_scale(viewport_width, 90);

const ul = document.querySelector('ul')
ul.style.fontSize = func_scale(viewport_width, 18);
ul.style.lineHeight = func_scale(viewport_width, 21);

const main__btn = document.querySelector('.main__btn')
main__btn.style.width = func_scale(viewport_width, 194);
main__btn.style.height = func_scale(viewport_width, 42);
main__btn.style.fontSize = func_scale(viewport_width, 18);
main__btn.style.lineHeight = func_scale(viewport_width, 21);