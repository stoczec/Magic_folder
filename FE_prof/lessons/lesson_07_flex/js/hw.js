// ДЗ
// Дан массив products
// Для каждого продукта создать карточку с описанием продукта. Описание должно включать отображение фотографии.
// Добавить эти карточки в div с классом products_container (в html)
// Стилизовать карточки через css

const products = [
    {
        id: 1,
        title: "Apple",
        price: 1.99,
        image: "https://images.pexels.com/photos/4321195/pexels-photo-4321195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "United States",
    },
    {
        id: 2,
        title: "Banana",
        price: 0.99,
        image: "https://images.pexels.com/photos/37441/bananas-fruit-yellow-peel-37441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "Mexico",
    },
    {
        id: 3,
        title: "Orange",
        price: 2.49,
        image: "https://images.pexels.com/photos/229447/pexels-photo-229447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "Spain",
    },
    {
        id: 4,
        title: "Strawberry",
        price: 3.99,
        image: "https://images.pexels.com/photos/2804909/pexels-photo-2804909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "Italy",
    },
    {
        id: 5,
        title: "Grape",
        price: 2.99,
        image: "https://images.pexels.com/photos/1327835/pexels-photo-1327835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "France",
    },
    {
        id: 6,
        title: "Pineapple",
        price: 4.99,
        image: "https://images.pexels.com/photos/5215958/pexels-photo-5215958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "Brazil",
    },
    {
        id: 7,
        title: "Kiwi",
        price: 1.79,
        image: "https://images.pexels.com/photos/618994/pexels-photo-618994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "New Zealand",
    },
    {
        id: 8,
        title: "Mango",
        price: 2.99,
        image: "https://images.pexels.com/photos/2931174/pexels-photo-2931174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "India",
    },
    {
        id: 9,
        title: "Watermelon",
        price: 5.99,
        image: "https://images.pexels.com/photos/5422727/pexels-photo-5422727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        country: "Germany",
    },
];

const products_container = document.createElement("div");
document.body.prepend(products_container);
products_container.classList.add("products_container");

const render_cards = () => {
    products.forEach((el) => {
        const cardElem = document.createElement("div");
        const idElem = document.createElement("p");
        const titleElem = document.createElement("p");
        const priceElem = document.createElement("p");
        const imageElem = document.createElement("img");
        const countryElem = document.createElement("p");
        const deleteBtn = document.createElement("button");

        cardElem.classList.add("cardElem");

        products_container.append(cardElem);
        cardElem.prepend(
            idElem,
            imageElem,
            titleElem,
            countryElem,
            priceElem,
            deleteBtn
        );

        idElem.innerText = el.id;
        titleElem.innerText = el.title;
        countryElem.innerText = `Made in ${el.country}`;
        priceElem.innerText = el.price;
        deleteBtn.innerText = "Delete card";

        imageElem.setAttribute("src", el.image);
    });
};


render_cards();

// id: 1,
// title: "Apple",
// price: 1.99,
// image: "https://images.pexels.com/photos/4321195/pexels-photo-4321195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
// country: "United States",
