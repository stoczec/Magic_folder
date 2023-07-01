// Событие

// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с
// сенсорными экранами оно происходит при касании)
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе
// mousemove – при движении мыши.
// submit – пользователь отправил форму <form>
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// keydown и keyup – когда пользователь нажимает / отпускает клавишу

// Обработчик србытий

//addEventListener(событие, функция)

// let button = document.querySelector(".click");
// let para = document.querySelector(".paragraph");

// // button.addEventListener("click", function () {
// //     alert("Hello World!");
// // });

// function onClick() {
//     document.querySelector(".paragraph").innerText =
//         Number(document.querySelector(".paragraph").innerText) + 1;
// }

// function myFunc() {
//     let x = Number(para.innerText);
//     para.innerText = x + 1;
// }

// button.addEventListener("click", myFunc);
// button.addEventListener("click", onClick);

// function myFunc2() {
//     alert("Hello JS!");
// }

// function myFunc3() {
//     alert("Hello Button!");
// }

// button.addEventListener("click", myFunc2);
// button.addEventListener("mouseover", myFunc3);

// button.removeEventListener("click", myFunc);
// let buttonOne = document.createElement("button");
// let buttonTwo = document.createElement("button");
// let para = document.querySelector(".paragraph");

// buttonOne.classList.add("buttonOne");
// buttonTwo.classList.add("buttonTwo");

// buttonOne.innerText = "-";
// buttonTwo.innerText = "+";

// document.body.append(buttonOne);
// document.body.append(buttonTwo);

// function minus() {
//     let x = Number(para.innerText);
//     para.innerText = x - 1;
// }

// function plus() {
//     let x = Number(para.innerText);
//     para.innerText = x + 1;
// }

// buttonOne.addEventListener("click", minus);
// buttonTwo.addEventListener("click", plus);

// Свойства Style

// let para = document.querySelector(".paragraph");
// let button = document.querySelector(".click");

// para.style.color = "red";
// para.style.backgroundColor = "blue";

// button.style.backgroundColor = "mediumorchid";
// button.style.width = "50px";
// button.style.color = "white";
// button.style.border = "2px","solid","green";

// button.style.backgroundColor = ""; // удаляем стили

let div = document.createElement("div");
document.body.append(div);

div.style.width = "100px";
div.style.height = "100px";
div.style.border = "2px solid black";
div.style.borderRadius = "5px";
div.style.backgroundColor = "mediumspringgreen";

function setColor() {
    let str = prompt("Choice color");
    div.style.backgroundColor = str;
}

function resetColor(){
    div.style.backgroundColor = "mediumspringgreen";
}

div.addEventListener("mouseover", setColor);
div.addEventListener("mouseout", resetColor);
