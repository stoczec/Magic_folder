function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='../taskFifth/taskFifth.html'";
let linkNext = "document.location='../taskSeventh/taskSeventh.html'";
let titlePage = "Sixth task";
let paragraphPageRu =
    "Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.";
let paragraphPageEn =
    "Add RU and EN buttons at the bottom that, when clicked, switch all cards to Russian or English, respectively.";
let paragraphPageDe =
    "Unten hinzufügen Knöpfe RU und EN, die beim Anklicken alle Karten entsprechend auf Russisch oder Englisch umschalten.";

let butSelector = "div";

const arrWords = [
    { en: "serendipity", ru: "случайная удача" },
    { en: "luminous", ru: "светящийся, яркий" },
    { en: "mellifluous", ru: "медовый, нежный" },
    { en: "effervescent", ru: "искрящийся, бодрящий" },
    { en: "ethereal", ru: "эфирный, неземной" },
    { en: "ephemeral", ru: "кратковременный, временный" },
    { en: "enamored", ru: "влюбленный, завороженный" },
    { en: "whimsical", ru: "вдохновленный, фантастический" },
    { en: "mellifluent", ru: "распутный, гладкий" },
    { en: "radiant", ru: "сияющий, испускающий свет" },
    { en: "enraptured", ru: "восхищенный, очарованный" },
    { en: "resplendent", ru: "великолепный, блестящий" },
];

let arrBackColor = [
    "#9B4ABF",
    "#09017A",
    "#8AD53A",
    "#E4DE41",
    "#88E0C8",
    "#C28FB7",
    "#F8C8B6",
    "#0B30EF",
    "#98F050",
    "#0C3D4A",
    "#142F63",
    "#DFA392",
];

let arrColor = [
    "#69FAFC",
    "#97A7A9",
    "#242DF8",
    "#A36366",
    "#8208E0",
    "#6F030F",
    "#8107EA",
    "#21F020",
    "#0F3782",
    "#72D00E",
    "#ED6E02",
    "#744683",
];

function create() {
    let divLang = document.createElement("div");
    divLang.classList.add("div");
    divElements.after(divLang);
    divLang.style.display = "flex";
    divLang.style.justifyContent = "center";

    let buttonAllEn = document.createElement("button");
    let buttonAllRu = document.createElement("button");
    function buttonAllLanguage(but, butName, butColor) {
        but.classList.add("button");
        divLang.prepend(but);
        but.innerText = butName;
        but.style.margin = "20px";
        but.style.width = "100px";
        but.style.backgroundColor = butColor;
        but.style.borderRadius = "5px";
        but.style.border = "none";
        but.style.height = "40px";
        but.style.fontSize = "14px";
        but.style.fontWeight = "bold";
        but.style.fontFamily = "Gilroy";
        but.style.boxShadow = "-5px -5px 5px" + butColor;
    }
    buttonAllLanguage(buttonAllRu, "RU", "#D52B1E");
    buttonAllLanguage(buttonAllEn, "EN", "#9B9B9B");

    for (let i = 0; i < arrWords.length; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = arrWords[i].en;
        cardDiv.style.width = "23%";
        cardDiv.style.height = "75px";
        cardDiv.style.margin = "5px auto";
        cardDiv.style.padding = "5px";
        cardDiv.style.textAlign = "center";
        cardDiv.style.fontFamily = "Gilroy";
        cardDiv.style.fontWeight = "bold";
        cardDiv.style.fontSize = "23px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.border = "2px solid #553f2d";
        cardDiv.style.borderColor = arrColor[i];
        cardDiv.style.borderRadius = "5px";
        cardDiv.style.color = arrColor[i];
        cardDiv.style.backgroundColor = arrBackColor[i];
        cardDiv.addEventListener("click", function () {
            if (cardDiv.innerText === arrWords[i].en) {
                cardDiv.innerText = arrWords[i].ru;
                cardDiv.style.color = arrBackColor[i];
                cardDiv.style.borderColor = arrBackColor[i];
                cardDiv.style.backgroundColor = arrColor[i];
                cardDiv.style.overflow = "hidden";
            } else {
                cardDiv.innerText = arrWords[i].en;
                cardDiv.style.color = arrColor[i];
                cardDiv.style.borderColor = arrColor[i];
                cardDiv.style.backgroundColor = arrBackColor[i];
            }
        });

        buttonAllEn.addEventListener("click", function () {
            cardDiv.innerText = arrWords[i].en;
            cardDiv.style.color = arrColor[i];
            cardDiv.style.borderColor = arrColor[i];
            cardDiv.style.backgroundColor = arrBackColor[i];
        });

        buttonAllRu.addEventListener("click", function () {
            cardDiv.innerText = arrWords[i].ru;
            cardDiv.style.color = arrBackColor[i];
            cardDiv.style.backgroundColor = arrColor[i];
            cardDiv.style.borderColor = arrBackColor[i];
            cardDiv.style.overflow = "hidden";
        });
        divElements.append(cardDiv);
    }

    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}

function reset() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].innerText = arrWords[i].en;
        x[i].style.color = arrColor[i];
        x[i].style.borderColor = arrColor[i];
        x[i].style.backgroundColor = arrBackColor[i];
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}
