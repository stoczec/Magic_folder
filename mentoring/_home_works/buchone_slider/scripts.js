const data = [
  {
    id: 1,
    title: 'Бухгалтерские услуги в вашем городе',
    button: 'Button 1',
  },
  {
    id: 2,
    title: 'Бухгалтерские услуги в вашем стране',
    button: 'Button 2',
  },
  {
    id: 3,
    title: 'Бухгалтерские услуги в вашем регионе',
    button: 'Button 3',
  },
  {
    id: 4,
    title: 'Бухгалтерские услуги в вашем доме',
    button: 'Button 4',
  },
];

let slider_idx = 0;

const slider_wrapper = document.querySelector('.slider_wrapper');
const slider_header_title = document.querySelector('.slider_header-title');
slider_header_title.innerText = data[0].title;

const slider_header_button = document.querySelector('.slider_header-button');
slider_header_button.innerText = data[0].button;

const slider_button_left = document.querySelector('.slider_button-left');
const slider_button_right = document.querySelector('.slider_button-right');

const spanArray = Array.from(document.getElementsByTagName('span'));
spanArray[0].id = 'span_white';

const render = (arr, idx) => {
  slider_wrapper.style.position = 'absolute';
  slider_wrapper.style.left = '-1000px';
  slider_wrapper.style.transition = 'all 0.5s';
  slider_header_title.innerText = arr[idx].title;
  slider_header_button.innerText = arr[idx].button;
  spanArray.forEach((el) => (el.id = ''));
  spanArray[idx].id = 'span_white';
  // slider_wrapper.style.position = '';
  // slider_wrapper.style.left = '';
  // slider_wrapper.style.transition = 'all 0.5s';
};

const left = () => {
  if (slider_idx !== 0) {
    slider_idx--;
    render(data, slider_idx);
  } else {
    slider_idx = data.length - 1;
    render(data, slider_idx);
  }
};

const right = () => {
  if (slider_idx < data.length - 1) {
    slider_idx++;
    render(data, slider_idx);
  } else {
    slider_idx = 0;
    render(data, slider_idx);
  }
};
slider_button_left.addEventListener('click', left);
slider_button_right.addEventListener('click', right);
