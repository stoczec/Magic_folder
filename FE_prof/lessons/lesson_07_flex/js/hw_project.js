const array = [
    {
        nameOfDiv: "infoBlock__block1",
        class: "block1",
        textOfSubDiv1: "30",
        textOfSubDiv2: "лет",
        textOfSubDiv3: "на рынке европы",
    },
    {
        nameOfDiv: "infoBlock__block2",
        class: "block2",
        textOfSubDiv1: "125",
        textOfSubDiv2: "заводов",
        textOfSubDiv3: "на территории европы",
    },
    {
        nameOfDiv: "infoBlock__block3",
        class: "block3",
        textOfSubDiv1: "95",
        textOfSubDiv2: "мостов",
        textOfSubDiv3: "каждый год",
    },
    {
        nameOfDiv: "infoBlock__block4",
        class: "block4",
        textOfSubDiv1: "50",
        textOfSubDiv2: "стадионов",
        textOfSubDiv3: "в европе",
    },
];

const header__infoBlock = document.querySelector(".header__infoBlock");

array.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add(el.nameOfDiv);
    div.classList.add(el.class);
    header__infoBlock.append(div);
    const block__p1 = document.createElement("div");
    const block__p2 = document.createElement("div");
    const block__p3 = document.createElement("div");
    block__p1.classList.add("p1");
    block__p2.classList.add("p2");
    block__p3.classList.add("p3");
    div.append(block__p1, block__p2, block__p3);
    block__p1.innerText = el.textOfSubDiv1;
    block__p2.innerText = el.textOfSubDiv2;
    block__p3.innerText = el.textOfSubDiv3;

    div.style.width = "25%";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
});
/*---------------------------------------------*/
const cards = [
    {
        image: "./img/bridge.jpg",
        name: "Мост",
        description:
            "Наш мост стал истинным технологическим прорывом в области инженерного строительства. Его грациозная арка и уникальный дизайн стали настоящей достопримечательностью города. Наши инженеры и дизайнеры работали в тесном сотрудничестве, чтобы создать мост, который не только функционален, но и визуально привлекателен. Теперь наш мост стал любимым местом для прогулок и фотосессий.",
    },
    {
        image: "./img/stadium.jpg",
        name: "Стадион",
        description:
            "Мы создали не просто стадион, а настоящую визитную карточку спортивной инфраструктуры в Европе. Каждая деталь, начиная от дизайна и заканчивая функциональностью, была продумана до мельчайших деталей. Это великолепное сооружение станет идеальным местом для проведения спортивных мероприятий, на которые будут сходиться толпы людей со всех концов Европы.",
    },
    {
        image: "./img/build.jpg",
        name: "Небоскреб",
        description:
            "Мы создали небоскреб, который является настоящим символом прогресса и инноваций. Наша команда инженеров, архитекторов и дизайнеров работала с душой и энтузиазмом, чтобы создать здание, которое будет воплощением современных технологий и новаторства. Наш небоскреб является не только высоким и величественным сооружением, но и настоящим произведением искусства. Он станет новой визитной карточкой города и привлечет внимание множества людей со всего мира.",
    },
];

const projects__cards = document.querySelector(".projects__cards");
cards.forEach((el) => {
    const card = document.createElement("div");
    const card_image = document.createElement("div");
    const image = document.createElement("img");
    const card_name = document.createElement("div");
    const card_description = document.createElement("div");

    card.classList.add("card");
    card_image.classList.add("card__image");
    card_name.classList.add("card__name");
    card_description.classList.add("card__description");

    projects__cards.append(card);
    card.append(card_image, card_name, card_description);
    card_image.append(image);

    image.setAttribute("src", el.image);
    image.setAttribute("alt", el.name);

    card_name.innerText = el.name;
    card_description.innerText = el.description;
});
/*---------------------------------------------*/

const blocks = [
    {
        icon: "./img/icons/icons8-bank-building-64.png",
        description: "Банки",
    },
    {
        icon: "./img/icons/icons8-bridge-64.png",
        description: "Мосты",
    },
    {
        icon: "./img/icons/icons8-city-64.png",
        description: "Застройка городов",
    },
    {
        icon: "./img/icons/icons8-restaurant-building-64.png",
        description: "Рестораны",
    },
    {
        icon: "./img/icons/icons8-road-64.png",
        description: "Дороги",
    },
    {
        icon: "./img/icons/icons8-road-bridge-64.png",
        description: "Дорожные мосты",
    },
    {
        icon: "./img/icons/icons8-school-building-64.png",
        description: "Школы",
    },
    {
        icon: "./img/icons/icons8-skyscrapers-64.png",
        description: "Небоскребы",
    },
    {
        icon: "./img/icons/icons8-stadium-64.png",
        description: "Стадионы",
    },
];

const todo__blocks = document.querySelector(".todo__blocks");

blocks.forEach((el) => {
    const block = document.createElement("div");
    const image = document.createElement("img");
    const description = document.createElement("div");

    block.classList.add("block");
    image.classList.add("block__img");
    description.classList.add("block__description");

    todo__blocks.append(block);
    block.append(image, description);

    image.setAttribute("src", el.icon);
    image.setAttribute("alt", el.description);
    description.innerText = el.description;
});
/*---------------------------------------------*/

const contact_cards = [
    {
        icon: "./img/icons/icons8-address-24.png",
        icon_name: "АДРЕС:",
        text: "УЛИЦА МИРА 140, ОФИС 140-142",
    },
    {
        icon: "./img/icons/icons8-phone-24.png",
        icon_name: "ТЕЛЕФОН:",
        text: "8 (812) 111-22-33 8 (812) 111-22-33",
    },
    {
        icon: "./img/icons/icons8-clock-24.png",
        icon_name: "ВРЕМЯ РАБОТЫ:",
        text: "ПН-СБ 10:00 - 20:00",
    },
    {
        icon: "./img/icons/icons8-mail-24.png",
        icon_name: "E-MAIL:",
        text: "INFO@VIP.RU",
    },
];

const contacts__cards = document.querySelector(".contacts__cards");

contact_cards.forEach((el) => {
    const card = document.createElement("div");
    const icon = document.createElement("img");
    const icon_name = document.createElement("div");
    const text = document.createElement("div");

    card.classList.add("contacts__card");
    icon.classList.add("contacts__cards_icon");
    icon_name.classList.add("contacts__cards_iconName");
    text.classList.add("contacts__cards_text");
    contacts__cards.append(card);
    card.append(icon, icon_name, text);

    icon.setAttribute("src", el.icon);
    icon.setAttribute("alt", el.icon_name);
    icon_name.innerText = el.icon_name;
    text.innerText = el.text;
});
