const wrapper_section = document.querySelector(".wrapper-section");
const widthPage = window.getComputedStyle(wrapper_section).width.slice(0, -2);
/*Возвращет значения свойства width в формате строки (например:1920px). 
    С помощью slice удаляет два последних символа. Результат число (1920) */

const percentageWidthScaling = (widthPageMaket, widthElement) => {
    return (
        (((widthElement * 100) / widthPageMaket) * widthPage) /
        100
    ).toFixed(2);
    /*
Функция, принимает ширину стриницы по макету и ширину элемента в px по макету и возвращает %-ое соотношение к ширине страницы
*/
};

const button = document.querySelector(".button");
const header = document.querySelector(".header");
const header__logo = document.querySelector(".header__logo");
const header__menu = document.querySelector(".header__menu");
const block1_section = document.querySelector(".block1-section");
const block1_section__text = document.querySelector(".block1-section__text");
/**/
const block2_section = document.querySelector(".block2-section");
const block2_section__text = document.querySelector(".block2-section__text");
const block2_section__image = document.querySelector(".block2-section__image");
const text_block2__text = document.querySelector(".text-block2__text");

button.style.width = percentageWidthScaling(1440, 150) + "px";
button.style.height = percentageWidthScaling(1440, 50) + "px";
header.style.width = percentageWidthScaling(1440, 1440 - 167 - 133) + "px";
header__logo.style.width = percentageWidthScaling(1440, 118) + "px";
header__menu.style.width = percentageWidthScaling(1440, 411) + "px";
block1_section.style.width =
    percentageWidthScaling(1440, 1440 - 179 - 57) + "px";
block1_section__text.style.width = percentageWidthScaling(1440, 610) + "px";
/**/
block2_section.style.width = percentageWidthScaling(1440, 1440 - 171) + "px";
// block2_section__image.style.width = percentageWidthScaling(1440, 520) + "px";
// block2_section__image.style.height = percentageWidthScaling(1440, 604) + "px";
text_block2__text.style.width = percentageWidthScaling(1440, 586) + "px";
