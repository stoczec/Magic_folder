const form = document.querySelector('.form');
const cards = document.querySelector('.cards');
let users = [];
let id_num = 0;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { firstname, secondname, age } = event.target;
  id_num++;
  const user = {
    id: id_num,
    firstname: firstname.value,
    secondname: secondname.value,
    age: age.value,
  };
  users.push(user);
  render(users);
  event.target.reset();
  console.log(user);
});

const render = (arr) => {
  cards.innerHTML = '';
  arr.forEach(({ id, firstname, secondname, age }) => {
    const cardEl = document.createElement('div');
    const firstnameEl = document.createElement('p');
    const secondnameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    cards.append(cardEl);
    cardEl.append(firstnameEl, secondnameEl, ageEl);
    cardEl.addEventListener('dblclick', () => {
      users = arr.filter((el) => el.id !== id);
      render(users);
    });
    firstnameEl.innerText = `First name: ${firstname}`;
    secondnameEl.innerText = `Second name: ${secondname}`;
    ageEl.innerText = `Age: ${age}`;
  });
};
