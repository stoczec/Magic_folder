let a = 13;

// setTimeout(() => {
//     a = 23;
// }, 2000);

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve((a = 23));
    }, 2000);
});

// promise.then(() => console.log(a));

// console.log(a);

// ===================================

// Если Math.random() создаст число >= 0.5, то промис успешный (выполняется функция resolve).
// А если меньше 0.5, то промис неуспешный (выполняется функция reject)

const random = new Promise((resolve, reject) => {
    const number = Math.random();
    if (number >= 0.5) {
        resolve(number);
    } else {
        reject(number);
    }
}).then(
    (val) => console.log(val, 'Succefull'),
    (val) => console.log(val, 'Not succefull')
);
