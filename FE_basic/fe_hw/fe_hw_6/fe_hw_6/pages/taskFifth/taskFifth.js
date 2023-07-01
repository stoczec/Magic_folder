function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='../taskFourth/taskFourth.html'";
let linkNext = "document.location='../taskSixth/taskSixth.html'";
let titlePage = "Fifth task";
let paragraphPageRu =
    "Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно. Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.";
let paragraphPageEn =
    "There is an array of objects. Each object has properties 'en' and 'ru'. The property 'en' contains the word in English, and the property 'ru' in Russian. It is necessary to implement cards that change words from Russian to English and vice versa by clicking. Hint: Each card should have two paragraphs. One is written in Russian, and the other in English, and when the card is clicked, one paragraph receives a 'display none' class, and the other receives a 'display block' class.";
let paragraphPageDe =
    "Es gibt ein Array von Objekten. Jedes Objekt hat die Eigenschaften 'en' und 'ru'. In der Eigenschaft 'en' steht das Wort auf Englisch und in der Eigenschaft 'ru' auf Russisch. Es ist notwendig, Karten zu implementieren, bei denen durch Klicken Wörter vom Russischen ins Englische und zurück geändert werden. Tipp: Jede Karte sollte zwei Absätze enthalten. In einem wird das Wort auf Russisch und im anderen auf Englisch geschrieben und bei Klicken auf die Karte erhält ein Absatz die Klasse 'display none' und der andere 'display block'.";
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
        cardDiv.style.border = "2px solid";
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
