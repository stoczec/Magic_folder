const users = [
    {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
];

// const user_container = document.createElement("div");
// document.body.append(user_container);
// user_container.classList.add("user_container");

users.forEach(({ first_name, last_name, avatar, email }) => {
    const cardUser = document.createElement("div");
    const firstNameElem = document.createElement("p");
    const lastNameElem = document.createElement("p");
    const avatarElem = document.createElement("img");
    const emailElem = document.createElement("a");

    user_container.append(cardUser);
    cardUser.append(firstNameElem, lastNameElem, avatarElem, emailElem);

    firstNameElem.innerText = first_name;
    lastNameElem.innerText = last_name;
    avatarElem.src = avatar;
    emailElem.href = `mailto:${email}`;
    emailElem.innerText = email;
});

/*
  flex-direction - отвечает за выбор основной оси (по умолчанию raw)

  justify-content - выравнивание элементов вдоль основной оси

    - start, center, end
    - space-between - крайние элементы прижимаются к краям экрана, а отступы между остальными элементами равны
    - space-around - отступ крайних элементов от краев экрана равен половине отступов между остальными элементами
    - space-evenly - все отступы (вкл. от краев экрана) равны между собой

  align-items - выравнивает элеменеты вдоль второстепенной оси
    - start, center, end

  gap - добавляет отступ между элементами flex-контейнера

  flex-wrap - разрешает/запрещает перенос элементов на новую строку (по умолчанию - nowrap)
*/
