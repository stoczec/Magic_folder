// //========== BURGER ==========//
// const header__burger = document.querySelector('.header__burger');
// const menu__list = document.querySelector('.menu__list');

// header__burger.addEventListener('click', (event) => {
//     event.target.classList.toggle('active');
//     menu__list.classList.toggle('active');
// });

// //========== HEADER COUNT ==========//

// const block__days = document.querySelector('.block__days');
// const block__hours = document.querySelector('.block__hours');
// const block__minutes = document.querySelector('.block__minutes');
// const block__seconds = document.querySelector('.block__seconds');

// //---------- insert to paragraph date value ----------//
// //========== SEPARATOR ==========//
// //---------- SUBSEPARATOR ----------//
// const func_time = () => {
//     const data = new Date();
//     const days = data.getDate();
//     const hours = data.getHours();
//     const minutes = data.getMinutes();
//     const seconds = data.getSeconds();
//     block__days.innerText = days;
//     block__hours.innerText = hours;
//     block__minutes.innerText = minutes;
//     block__seconds.innerText = seconds;
// };

// setInterval(func_time, 1000);

// //========== TEACHERS ==========//
// //---------- BIOGRAPHY ----------//

// const teacher__link_first = document.querySelector('.teacher__link-first');
// const teacher__link_second = document.querySelector('.teacher__link-second');
// const teacher__link_third = document.querySelector('.teacher__link-third');
// const teacher__biography_first = document.querySelector(
//     '.teacher__biography-first'
// );
// const teacher__biography_second = document.querySelector(
//     '.teacher__biography-second'
// );
// const teacher__biography_third = document.querySelector(
//     '.teacher__biography-third'
// );

// const teacher__first = document.querySelector('.teacher__first');
// const teacher__second = document.querySelector('.teacher__second');
// const teacher__third = document.querySelector('.teacher__third');

// const teacher__biography_visible = document.querySelector(
//     '.teacher__biography-visible'
// );

// //---------- RESIZE WINDOW WIDTH ----------//

// const biography = document.querySelectorAll('.biography');
// function handleResize() {
//     // если ширина окна меньше или равна 992px, добавляем класс "resize"
//     if (window.innerWidth <= 992) {
//         biography.forEach((el) => {
//             el.classList.add('resize');
//         });
//     } else {
//         // в противном случае, удаляем класс "resize"
//         biography.forEach((el) => {
//             el.classList.remove('resize');
//         });
//     }
// }

// // добавляем обработчик события "resize"
// window.addEventListener('resize', handleResize);

// // вызываем функцию в начале, чтобы установить класс в соответствии с текущей шириной окна
// handleResize();
// //---------- END -> RESIZE WINDOW WIDTH ----------//
// teacher__link_first.addEventListener('click', () => {
//     if (teacher__biography_first.classList.contains('resize')) {
//         function_display(teacher__biography_first);
//         teacher__biography_second.style.display == 'none';
//         teacher__biography_third.style.display == 'none';
//         teacher__biography_second.style.animation = 'unslide 5s 1';
//         teacher__biography_third.style.animation = 'unslide 5s 1';
//     } else {
//         function_visibility(teacher__biography_first);
//         teacher__biography_second.style.visibility = 'hidden';
//         teacher__biography_third.style.visibility = 'hidden';
//         teacher__biography_second.style.animation = 'unslide 5s 1';
//         teacher__biography_third.style.animation = 'unslide 5s 1';
//         teacher__first.style.transform = 'translateX(calc(100% + 24px))';
//         teacher__second.style.transform = 'translateX(calc(-100% - 24px))';
//         teacher__third.style.transform = 'translateX(0)';
//     }
// });
// teacher__link_second.addEventListener('click', () => {
//     if (teacher__biography_second.classList.contains('resize')) {
//         function_display(teacher__biography_second);
//         teacher__biography_first.style.display == 'none';
//         teacher__biography_third.style.display == 'none';
//         teacher__biography_first.style.animation = 'unslide 5s 1';
//         teacher__biography_third.style.animation = 'unslide 5s 1';
//     } else {
//         function_visibility(teacher__biography_second);
//         teacher__biography_first.style.visibility = 'hidden';
//         teacher__biography_third.style.visibility = 'hidden';
//         teacher__biography_first.style.animation = 'unslide 5s 1';
//         teacher__biography_third.style.animation = 'unslide 5s 1';
//         teacher__first.style.transform = 'translateX(0)';
//         teacher__second.style.transform = 'translateX(0)';
//         teacher__third.style.transform = 'translateX(0)';
//     }
// });
// teacher__link_third.addEventListener('click', () => {
//     if (teacher__biography_third.classList.contains('resize')) {
//         function_display(teacher__biography_third);
//         teacher__biography_first.style.display == 'none';
//         teacher__biography_second.style.display == 'none';
//         teacher__biography_first.style.animation = 'unslide 5s 1';
//         teacher__biography_second.style.animation = 'unslide 5s 1';
//     } else {
//         function_visibility(teacher__biography_third);
//         teacher__biography_first.style.visibility = 'hidden';
//         teacher__biography_second.style.visibility = 'hidden';
//         teacher__biography_second.style.animation = 'unslide 5s 1';
//         teacher__biography_first.style.animation = 'unslide 5s 1';
//         teacher__first.style.transform = 'translateX(0)';
//         teacher__second.style.transform = 'translateX(calc(100% + 24px))';
//         teacher__third.style.transform = 'translateX(calc(-100% - 24px))';
//     }
// });

// const function_visibility = (biography, width) => {
//     if (biography.style.visibility == 'visible') {
//         biography.style.visibility = 'hidden';
//         biography.style.height = '0';
//     } else {
//         biography.style.visibility = 'visible';
//         biography.style.width = '250%';
//         biography.style.animation = 'slide 5s 1';
//         biography.style.height = '';
//     }
// };

// const function_display = (biography) => {
//     if (biography.style.display == 'block') {
//         biography.style.display = 'none';
//         biography.style.height = '0';
//     } else {
//         biography.style.display = 'block';
//         biography.style.width = '150%';
//         biography.style.animation = 'slide 5s 1';
//         biography.style.height = '';
//     }
// };

const header__menu = document.querySelector('.header__menu');
const header__burger = document.querySelector('.header__burger');

header__burger.addEventListener('click', () => {
    header__menu.classList.toggle('active');
});


