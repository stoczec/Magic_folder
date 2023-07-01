// FETCH;
// 1. Отправить fetch-запрос по ссылке https://dummyjson.com/users
// 2. Вывести в консоль полученный по запросу массив users
// 3. Из полученных данных cформировать карточки пользователей со следующими данными: фото, имя + фамилия, кликабельный email.
//Добавить все карточки в div с классом users_container
// 4. Стилизовать карточки через css
// 5. Добавить в карточку информацию о компании человека (название департамента и адресс компании)
// 6. Добавить в карточку параграф, описывающий банковские данные пользователя

// ELEM_BLOCK ========== FETCH QUERY ========== //
fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((json) => {
        console.log(json.users);
        addUserData(json.users);
        addUserCompanyData(json.users);
        addUserDataBank(json.users);
    });
// ELEM_BLOCK ========== CONTAINER FOR USER CARDS ========== //
const users_container = document.createElement('div');
document.body.append(users_container);
users_container.classList.add('user__container', '_container');
// ELEM_BLOCK ========== FUNCTION ADD NAME & EMAIL ========== //
const addUserData = (users) => {
    users.forEach(({ image, firstName, lastName, email }) => {
        // CREATE ELEMENT
        const cardElem = document.createElement('div');
        const imgElem = document.createElement('img');
        const cardDataElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailElem = document.createElement('a');
        // ADD CLASSES
        cardElem.classList.add('users__card');
        cardDataElem.classList.add('users__data');
        // ADD ELEMENTS ON THE PAGE
        users_container.append(cardElem);
        cardElem.append(imgElem, cardDataElem);
        cardDataElem.append(nameElem, emailElem);
        // ADD DATA TO ELEMENTS
        imgElem.src = image;
        imgElem.alt = 'User image';
        nameElem.innerText = `Name: ${firstName} ${lastName}`;
        emailElem.innerText = email;
        emailElem.href = `mailto:${email}`;
    });
};
// ELEM_BLOCK ========== FUNCTION ADD COMPANY ========== //
const addUserCompanyData = (users) => {
    const cardElem = document.querySelectorAll('.users__data');
    users.forEach(
        (
            {
                company,
                address,
                department,
                name,
                city,
                coordinates,
                postalCode,
                state,
                lat,
                lng,
            },
            el
        ) => {
            // CREATE ELEMENT
            const companyElem = document.createElement('p');
            const addressElem = document.createElement('p');
            const departmentElem = document.createElement('p');
            // ADD ELEMENTS ON THE PAGE
            cardElem[el].append(companyElem, addressElem, departmentElem);
            // ADD DATA TO ELEMENTS
            companyElem.innerText = `Company: ${company.name}`;
            addressElem.innerText = `Company adress: 
            Street: ${company.address.address}; 
            City: ${company.address.city};
            Postal code: ${company.address.postalCode};
            State: ${company.address.state};
            Coordinate: 
            latitude: ${company.address.coordinates.lat},
            longitude: ${company.address.coordinates.lng}`;
            departmentElem.innerText = `Department: ${company.department}`;
        }
    );
};
// ELEM_BLOCK ========== FUNCTION ADD BANK ========== //
const addUserDataBank = (users) => {
    const cardElem = document.querySelectorAll('.users__data');
    users.forEach(
        ({ bank, iban, cardType, cardNumber, cardExpire, currency }, el) => {
            // CREATE ELEMENT
            const bankElem = document.createElement('p');
            // ADD ELEMENTS ON THE PAGE
            cardElem[el].append(bankElem);
            // ADD DATA TO ELEMENTS
            bankElem.innerText = `Bank data:
            IBAN: 
            ${bank.iban};
            Card type: ${bank.cardType};
            Card number: ${bank.cardNumber};
            Card expire: ${bank.cardExpire};
            Currency: ${bank.currency}
            `;
        }
    );
};
