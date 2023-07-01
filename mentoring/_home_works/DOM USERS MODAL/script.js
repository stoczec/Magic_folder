fetch('https://api.slingacademy.com/v1/sample-data/users')
  .then((res) => res.json())
  .then((json) => render(json.users))
  .catch((error) => console.log('Ошибка получения данных: ' + error));

const container = document.querySelector('.container');

function render(array) {
  array.forEach((user) => {
    // Создаем элементы на странице
    const userElem = document.createElement('div');
    const userNameElem = document.createElement('p');
    const userLastNameElem = document.createElement('p');
    const userEmailElem = document.createElement('p');
    const userJobElem = document.createElement('p');
    // Добавляем элементы на страницу
    container.append(userElem);
    userElem.append(userNameElem, userLastNameElem, userEmailElem, userJobElem);
    // Добавляем данные из запроса
    userNameElem.innerText = `Name: ${user.first_name}`;
    userLastNameElem.innerText = `Last name: ${user.last_name}`;
    userEmailElem.innerText = `Email: ${user.email}`;
    userJobElem.innerText = `Job: ${user.job}`;
  });
}
