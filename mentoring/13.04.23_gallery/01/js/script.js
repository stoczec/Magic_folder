// Создать галерею изображений с кнопками для перемещения между изображениями.
// Написать скрипт, который при клике на кнопку "Следующее" или "Предыдущее"
// (вместо слов могут быть стрелки) меняет текущее изображение на следующее или предыдущее в зависимости от нажатой кнопки.
// Также при клике на изображение должна выводиться информация об этом изображении снизу в прозрачном контейнере.
// Доработать процесс таким образом, чтобы при клике на кнопку
// "Добавить изображение" появлялось модальное окно с формой для добавления ссылки на изображение и его описания.
// После заполнения формы и нажатия на кнопку "Добавить" новое изображение должно добавляться в галерею.
// Добавить кнопку удаления в углу изображения и написать код который при нажатии на эту кнопку удалит это изображения из массива.
// Реализовать функцию rerender. Эта функция очищает контейнер с изображениями и создает множество изображений из массива.
// Настроить rerender при добавлении и удалении изображения.

// CRETE ARRAY WITH OBJECTS IMAGES
const galleryData = [
    { id: 1, img: './img/8913996.jpg', description: 'Men on the street' },
    { id: 2, img: './img/14380356.jpg', description: 'Girl on the bike' },
    { id: 3, img: './img/16021268.jpg', description: 'Dinner in restaraunt' },
    { id: 4, img: './img/16027424.jpg', description: 'Mountains and sea' },
    { id: 5, img: './img/16082412.jpg', description: 'Alley at house' },
    { id: 6, img: './img/16317494.jpg', description: 'Tree on the field' },
];
// CREATE FUNCTION ADD/REMOVE DESCRIPTION IMAGE
const descriptionAddRemove = (image, description) => {
    image.addEventListener('click', () => {
        if (description.style.display === 'none') {
            description.style.display = 'block';
        } else {
            description.style.display = 'none';
        }
    });
};
// CREATE VARIBLES
const gallery__content = document.querySelector('.gallery__content');
const buttons_previous = document.querySelector('.gallery__buttons-previous');
const buttons_next = document.querySelector('.gallery__buttons-next');
const buttons_delete = document.querySelector('.gallery__buttons-delete');
const gallery__img__description = document.querySelector(
    '.gallery__img--description'
);
const image__form = document.querySelector('.image__form');
// CREATE ELEMENTS ON THE PAGE
galleryData.forEach(({ id, img, description }, el) => {
    const imgEl = document.createElement('img');
    const descriptionEl = document.createElement('p');
    imgEl.src = img;
    imgEl.alt = description;
    imgEl.style.display = 'none';
    descriptionEl.innerText = description;
    descriptionEl.style.display = 'none';

    el === 0 ? (imgEl.style.display = 'block') : '';
    descriptionAddRemove(imgEl, descriptionEl);

    gallery__content.append(imgEl, descriptionEl);
});
// CREATE NEW ELEMENT WITH FORM
image__form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { url, description } = event.target;
    let lastId = galleryData[galleryData.length - 1].id;
    const newImage = {
        id: lastId++,
        img: url.value,
        description: description.value,
    };
    galleryData.push(newImage);
    console.log(galleryData);
    popup.classList.remove('open');

    const imgEl = document.createElement('img');
    const descriptionEl = document.createElement('p');
    imgEl.src = url.value;
    imgEl.alt = description.value;
    imgEl.style.display = 'none';
    descriptionEl.innerText = description.value;
    descriptionEl.style.display = 'none';

    descriptionAddRemove(imgEl, descriptionEl);

    gallery__content.append(imgEl, descriptionEl);
});
// ADD EVENT LISTENER ON BUTTONS
const imgArr = Array.from(document.querySelectorAll('.gallery__content img'));
const descriptionArr = Array.from(
    document.querySelectorAll('.gallery__content p')
);
buttons_previous.addEventListener('click', () => {
    // const imgArr = document.querySelectorAll('.gallery__content img');
    // const descriptionArr = document.querySelectorAll('.gallery__content p');
    descriptionArr.forEach((el) => {
        el.style.display = 'none';
    });
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].style.display === 'block') {
            imgArr[i].style.display = 'none';
            i--;
            if (i < 0) {
                imgArr[imgArr.length - 1].style.display = 'block';
            } else {
                imgArr[i].style.display = 'block';
            }
            break;
        }
    }
    console.log(imgArr);
});
buttons_next.addEventListener('click', () => {
    // const imgArr = document.querySelectorAll('.gallery__content img');
    // const descriptionArr = document.querySelectorAll('.gallery__content p');
    descriptionArr.forEach((el) => {
        el.style.display = 'none';
    });
    for (let i = 0; i < imgArr.length; i++) {
        descriptionArr[i].style.display === 'none';
        if (imgArr[i].style.display === 'block') {
            imgArr[i].style.display = 'none';
            i++;
            if (i === imgArr.length) {
                imgArr[0].style.display = 'block';
            } else {
                imgArr[i].style.display = 'block';
            }
            break;
        }
    }
});
// DELETE IMAGE FROM PAGE
buttons_delete.addEventListener('click', () => {
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].style.display === 'block') {
            imgArr[i].style.display = 'none';
            imgArr.splice(i, 1);
            descriptionArr.splice(i, 1);
            imgArr[i].remove();
            descriptionArr[i].remove();
            console.log(imgArr);
            i++;
            if (i === imgArr.length) {
                imgArr[0].style.display = 'block';
            } else {
                imgArr[i].style.display = 'block';
            }
            break;
        }
    }
});
// ELEM_BLOCK ========== MODAL WINDOW ========== //

const gallery__buttons_add = document.querySelector('.gallery__buttons-add');
const popup = document.querySelector('.popup');
const close__btn = document.querySelector('.close__btn');
const form__cross = document.querySelector('.form__cross');

gallery__buttons_add.addEventListener('click', () => {
    popup.classList.add('open');
});

form__cross.addEventListener('click', () => {
    popup.classList.remove('open');
});
