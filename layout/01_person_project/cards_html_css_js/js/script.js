const questionRu = document.getElementById("questionRu");
const answerRu = document.getElementById("answerRu");
const questionEn = document.getElementById("questionEn");
const answerEn = document.getElementById("answerEn");
const buttonGenerate = document.getElementById("button-generate");
const buttonRu = document.getElementById("button-ru");
const buttonEn = document.getElementById("button-en");
const buttonRuEn = document.getElementById("button-ru-en");
const cards = document.getElementById("cards");
const cardsRus = document.getElementById("cardsRu");
const cardsEng = document.getElementById("cardsEn");
const counters__all = document.getElementById("counters__all");
const counters__htmlRu = document.getElementById("counters__htmlRu");
const counters__htmlEn = document.getElementById("counters__htmlEn");
const counters__cssRu = document.getElementById("counters__cssRu");
const counters__cssEn = document.getElementById("counters__cssEn");
const counters__jsRu = document.getElementById("counters__jsRu");
const counters__jsEn = document.getElementById("counters__jsEn");
const logos__HTML = document.getElementById("logos__HTML");
const logos__CSS = document.getElementById("logos__CSS");
const logos__JS = document.getElementById("logos__JS");

buttonRu.addEventListener("click", function () {
    questionRu.style.display = "flex";
    answerRu.style.display = "flex";
    questionEn.style.display = "none";
    answerEn.style.display = "none";
    cards.style.height = "50%";
    cardsRus.style.height = "100%";
});

buttonEn.addEventListener("click", function () {
    questionEn.style.display = "flex";
    answerEn.style.display = "flex";
    questionRu.style.display = "none";
    answerRu.style.display = "none";
    cards.style.height = "50%";
    cardsEng.style.height = "100%";
    cardsRus.style.height = "0";
});

buttonRuEn.addEventListener("click", function () {
    questionRu.style.display = "flex";
    answerRu.style.display = "flex";
    questionEn.style.display = "flex";
    answerEn.style.display = "flex";
    cards.style.height = "100%";
    cardsRus.style.height = "50%";
    cardsEng.style.height = "50%";
});
const cardsRu = [arrayRuHTML, arrayRuCSS, arrayRuJS];
const cardsEn = [arrayEnHTML, arrayEnCSS, arrayEnJS];

let answerRuText = "";
let answerEnText = "";

const randomNumber = () => {
    let numberOfArrayBD = Math.round(Math.random() * 2);
    let numberOfObject = Math.round(
        Math.random() * (cardsRu[numberOfArrayBD].length - 1)
    );
    questionRu.innerText = cardsRu[numberOfArrayBD][numberOfObject].question;
    answerRu.innerText = "Ответ";
    answerRuText = cardsRu[numberOfArrayBD][numberOfObject].answer;

    questionEn.innerText = cardsEn[numberOfArrayBD][numberOfObject].question;
    answerEn.innerText = "Answer";
    answerEnText = cardsEn[numberOfArrayBD][numberOfObject].answer;

    if (numberOfArrayBD == 0) {
        logos__HTML.style.webkitFilter = "grayscale(0%)";
        logos__HTML.style.filter = "grayscale(0%)";
        logos__CSS.style.webkitFilter = "grayscale(100%)";
        logos__CSS.style.filter = "grayscale(100%)";
        logos__JS.style.webkitFilter = "grayscale(100%)";
        logos__JS.style.filter = "grayscale(100%)";
        questionRu.style.color = "#2C1D41";
        questionRu.style.backgroundColor = "#e54c21";
        questionEn.style.color = "#2C1D41";
        questionEn.style.backgroundColor = "#e54c21";
        answerRu.style.color = "#2C1D41";
        answerRu.style.backgroundColor = "#e54c21";
        answerEn.style.color = "#2C1D41";
        answerEn.style.backgroundColor = "#e54c21";
    } else if (numberOfArrayBD == 1) {
        logos__CSS.style.webkitFilter = "grayscale(0%)";
        logos__CSS.style.filter = "grayscale(0%)";
        logos__HTML.style.webkitFilter = "grayscale(100%)";
        logos__HTML.style.filter = "grayscale(100%)";
        logos__JS.style.webkitFilter = "grayscale(100%)";
        logos__JS.style.filter = "grayscale(100%)";
        questionRu.style.color = "#2C1D41";
        questionRu.style.backgroundColor = "#2465f1";
        questionEn.style.color = "#2C1D41";
        questionEn.style.backgroundColor = "#2465f1";
        answerRu.style.color = "#2C1D41";
        answerRu.style.backgroundColor = "#2465f1";
        answerEn.style.color = "#2C1D41";
        answerEn.style.backgroundColor = "#2465f1";
    } else {
        logos__JS.style.webkitFilter = "grayscale(0%)";
        logos__JS.style.filter = "grayscale(0%)";
        logos__HTML.style.webkitFilter = "grayscale(100%)";
        logos__HTML.style.filter = "grayscale(100%)";
        logos__CSS.style.webkitFilter = "grayscale(100%)";
        logos__CSS.style.filter = "grayscale(100%)";
        questionRu.style.color = "#2C1D41";
        questionRu.style.backgroundColor = "#e5a221";
        questionEn.style.color = "#2C1D41";
        questionEn.style.backgroundColor = "#e5a221";
        answerRu.style.color = "#2C1D41";
        answerRu.style.backgroundColor = "#e5a221";
        answerEn.style.color = "#2C1D41";
        answerEn.style.backgroundColor = "#e5a221";
    }
};

buttonGenerate.addEventListener("click", randomNumber);

answerRu.addEventListener("click", function () {
    if (answerRu.innerText == "Ответ") {
        answerRu.innerText = answerRuText;
    }
});

answerEn.addEventListener("click", function () {
    if (answerEn.innerText == "Answer") {
        answerEn.innerText = answerEnText;
    }
});

counters__htmlRu.innerText = arrayRuHTML.length;
counters__htmlEn.innerText = arrayEnHTML.length;
counters__cssRu.innerText = arrayRuCSS.length;
counters__cssEn.innerText = arrayEnCSS.length;
counters__jsRu.innerText = arrayRuJS.length;
counters__jsEn.innerText = arrayEnJS.length;
counters__all.innerText =
    (arrayRuHTML.length +
        arrayEnHTML.length +
        arrayRuCSS.length +
        arrayEnCSS.length +
        arrayRuJS.length +
        arrayEnJS.length) /
    2;

if (counters__htmlRu.innerText !== counters__htmlEn.innerText) {
    counters__htmlRu.style.backgroundColor = "red";
    counters__htmlEn.style.backgroundColor = "red";
}
if (counters__cssRu.innerText !== counters__cssEn.innerText) {
    counters__cssRu.style.backgroundColor = "red";
    counters__cssEn.style.backgroundColor = "red";
}
if (counters__jsRu.innerText !== counters__jsEn.innerText) {
    counters__jsRu.style.backgroundColor = "red";
    counters__jsEn.style.backgroundColor = "red";
}
