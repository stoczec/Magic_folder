function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='../taskSixth/taskSixth.html'";
let linkNext = "document.location='../taskFirst/taskFirst.html'";
let titlePage = "Seventh task";
let paragraphPageRu =
    "Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.";
let paragraphPageEn =
    "Write a loop that creates a set of divs with colors ranging from rgb(128, 128, 0) to rgb(128, 128, 255). The color of the divs should change with a step of 5.";
let paragraphPageDe =
    "Einen Schleife schreiben, die eine Menge von Div-Elementen mit Farben von rgb(128, 128, 0) bis rgb(128, 128, 255) erstellt. Die Farbe der Divs soll sich in Schritten von 5 ändern.";
let butSelector = "div";

function create() {
    for (let i = 0; i <= 255; i += 5) {
        let cardDiv = document.createElement("div");
        cardDiv.innerText = i;
        cardDiv.style.fontSize = "25px";
        cardDiv.style.fontWeight = "bold";
        cardDiv.style.color = "rgb(" + i + ",128,128)";
        cardDiv.style.width = "6.5%";
        cardDiv.style.height = "30px";
        cardDiv.style.margin = "5px auto";
        cardDiv.style.padding = "5px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
        cardDiv.style.justifyContent = "center";
        cardDiv.style.border = "2px solid";
        cardDiv.style.borderColor = "rgb(128," + i + ",128)";
        cardDiv.style.borderRadius = "5px";
        cardDiv.style.backgroundColor = "rgb(128,128," + i + ")";
        divElements.append(cardDiv);
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}

function reset() {
    let x = divElements.querySelectorAll("div");
    for (let i = 0; i < x.length; i++) {
        x[i].style.color = "white";
        x[i].style.borderColor = "white";
        x[i].style.backgroundColor = "white";
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}
