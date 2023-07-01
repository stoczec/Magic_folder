const subscribe__btn = document.querySelectorAll('.subscribe__btn');

subscribe__btn.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.target.classList.toggle('active');
    });
});
