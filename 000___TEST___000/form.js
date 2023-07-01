const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { firstname, secondname, age } = event.target;
  const cardElem = document.createElement('div');
  const firstnameElem = document.createElement('p');
  const secondnameElem = document.createElement('p');
  const ageElem = document.createElement('p');

  document.body.append(cardElem);
  cardElem.append(firstnameElem, secondnameElem, ageElem);
  firstnameElem.innerText = firstname.value;
  secondnameElem.innerText = secondname.value;
  ageElem.innerText = age.value;
  event.target.reset();
});
