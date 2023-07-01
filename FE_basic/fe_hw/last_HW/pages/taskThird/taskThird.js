function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='../taskSecond/taskSecond.html'";
let linkNext = "document.location='../taskFourth/taskFourth.html'";
let titlePage = "Third task";
let paragraphPageRu =
    "Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.";
let paragraphPageEn =
    "Modify the previous script so that when clicked again, the 'active' class is removed.";
let paragraphPageDe =
    "Verbessern Sie das vorherige Skript so, dass bei einem erneuten Klicken die Klasse active entfernt wird.";
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
            if (cardDiv.classList.contains("active")) {
                cardDiv.classList.remove("active");
                cardDiv.style.color = arrColor[i];
                cardDiv.style.backgroundColor = arrBackColor[i];
                cardDiv.style.borderColor = arrColor[i];
            } else {
                cardDiv.classList.add("active");
                cardDiv.style.color = arrBackColor[i];
                cardDiv.style.backgroundColor = arrColor[i];
                cardDiv.style.borderColor = arrBackColor[i];
            }
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
