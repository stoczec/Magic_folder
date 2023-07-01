const dropdown__chevron = document.querySelector('.dropdown__chevron');
const dropdown__menu = document.querySelector('.dropdown__menu');

dropdown__chevron.addEventListener('click', () => {
    dropdown__menu.classList.toggle('active');
});
