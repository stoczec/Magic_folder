const btn_sqrt_red = document.querySelector('.btn_sqrt_red');
const sqrt_red = document.querySelector('.sqrt_red');
btn_sqrt_red.addEventListener('click', () => {
  sqrt_red.classList.toggle('sqrt_green');
});
//=======================================================
const btn_sqrt_pink = document.querySelector('.btn_sqrt_pink');
const sqrt_pink = document.querySelector('.sqrt_pink');

btn_sqrt_pink.addEventListener('click', () => {
  sqrt_pink.style.backgroundColor === 'pink'
    ? (sqrt_pink.style.backgroundColor = 'blue')
    : (sqrt_pink.style.backgroundColor = 'pink');
  console.log(sqrt_pink.style.backgroundColor);
});
//=======================================================
const btn_sqrt_black = document.querySelector('.btn_sqrt_black');
const sqrt_black = document.querySelector('.sqrt_black');
let size = 150;

btn_sqrt_black.addEventListener('click', () => {
  size += 20;
  sqrt_black.style.width = `${size}px`;
  sqrt_black.style.height = `${size}px`;
});
//=======================================================
const btn_root = document.querySelector('.btn_root');
const root = document.querySelector('.root');
btn_root.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.style.backgroundColor = 'blue';
  paragraph.style.color = 'white';
  paragraph.innerText = 'Hello world!';
  root.append(paragraph);
});
//=======================================================
const btn_root_1 = document.querySelector('.btn_root_1');
const root_1 = document.querySelector('.root_1');
let color = 'blue';
btn_root_1.addEventListener('click', () => {
  const colorBlue = 'blue';
  const colorGreen = 'green';
  const paragraph = document.createElement('p');
  paragraph.style.backgroundColor = color;
  paragraph.style.color = 'white';
  paragraph.innerText = 'Hello world!';
  root_1.append(paragraph);
  color === 'blue' ? (color = 'green') : (color = 'blue');
});
