function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='../taskFirst/taskFirst.html'";
let linkNext = "document.location='../taskThird/taskThird.html'";
let titlePage = "Second task";
let paragraphPageRu =
    " Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.";
let paragraphPageEn =
    "Implement 10 cards with numbers from 0 to 9, and assign an 'active' class to a card when clicked. The 'active' class should have styles that swap the text color and background color.";

let paragraphPageDe =
    "Implementieren Sie 10 Karten mit Zahlen von 0 bis 9 und weisen Sie beim Klicken auf eine beliebige Karte einen aktiven Klassenwert zu. In der aktiven Klasse sollten Stile enthalten sein, die Textfarbe und Hintergrundfarbe vertauschen.";
let butSelector = "div";

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
];

function create() {
    for (let i = 0; i < 10; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = i;
        cardDiv.style.width = "15%";
        cardDiv.style.height = "75px";
        cardDiv.style.margin = "10px auto";
        cardDiv.style.padding = "10px";
        cardDiv.style.textAlign = "center";
        cardDiv.style.fontFamily = "Gilroy";
        cardDiv.style.fontWeight = "bold";
        cardDiv.style.fontSize = "30px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.color = arrColor[i];
        cardDiv.style.backgroundColor = arrBackColor[i];
        cardDiv.style.border = "2px solid";
        cardDiv.style.borderColor = arrColor[i];
        cardDiv.style.borderRadius = "5px";
        cardDiv.addEventListener("click", function () {
            cardDiv.classList.add("active");
            cardDiv.style.color = arrBackColor[i];
            cardDiv.style.backgroundColor = arrColor[i];
            cardDiv.style.borderColor = arrBackColor[i];
        });
        divElements.append(cardDiv);
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}

function reset() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].classList = "";
        x[i].style.color = arrColor[i];
        x[i].style.backgroundColor = arrBackColor[i];
        x[i].style.borderColor = arrColor[i];
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}
