const counter__day = document.querySelector('.counter__day');
const counter__hour = document.querySelector('.counter__hour');
const counter__min = document.querySelector('.counter__min');
const counter__sec = document.querySelector('.counter__sec');

const func_time = () => {
    const data = new Date();
    const days = data.getDate();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    conditionValue(counter__day, days);
    conditionValue(counter__hour, hours);
    conditionValue(counter__min, minutes);
    conditionValue(counter__sec, seconds);
};

const conditionValue = (counter, time) => {
    if (time < 10) {
        counter.innerText = `0${time}`;
    } else {
        counter.innerText = time;
    }
};

setInterval(func_time, 1000);
