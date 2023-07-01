document.body.style.position = "relative";
document.body.style.backgroundColor = "#f5fffa";

let buttonUp = document.createElement("button");
buttonUp.classList.add("buttonUp");
document.body.append(buttonUp);
buttonUp.innerText = "UP";
buttonUp.style.position = "fixed";
buttonUp.style.zIndex = "10";
buttonUp.style.left = "95%";
buttonUp.style.top = "90%";
buttonUp.style.borderRadius = "50%";
buttonUp.style.fontSize = "30px";
buttonUp.style.fontWeight = "bold";
buttonUp.style.fontFamily = "Gilroy";
buttonUp.style.backgroundColor = "#87CEEB";

let navButtons = document.createElement("div");
navButtons.classList.add("navButtons");
document.body.append(navButtons);
navButtons.style.display = "flex";
navButtons.style.justifyContent = "center";

function navBut(but, butLink, butName, butBackColor) {
    but.classList.add("button");
    but.innerText = butName;
    but.setAttribute("onclick", butLink);
    navButtons.append(but);
    but.style.margin = "10px";
    but.style.borderRadius = "2vh";
    but.style.backgroundColor = butBackColor;
    but.style.border = "none";
    but.style.width = "15%";
    but.style.height = "6vh";
    but.style.fontSize = "4vh";
    but.style.fontWeight = "bold";
    but.style.fontFamily = "Gilroy";
}

let buttonPrevious = document.createElement("button");
let buttonHome = document.createElement("button");
let buttonNext = document.createElement("button");

navBut(buttonPrevious, linkPrevios, "previous page", "#654321");
navBut(buttonHome, "document.location='/last_HW/index.html'", "home page", "#FFA500");
navBut(buttonNext, linkNext, "next page", "#FFFF00");

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = titlePage;
document.body.append(title);
title.style.textAlign = "center";
title.style.color = "black";
title.style.fontFamily = "Gilroy";
title.style.fontSize = "10vh";
title.style.textDecoration = "underline";
title.style.textDecorationColor =
    "linear-gradient(111.3deg, #9c27b0 9.6%, #00bcd4 93.6%)";

let divButtonLanguage = document.createElement("div");
document.body.append(divButtonLanguage);
divButtonLanguage.style.display = "flex";
divButtonLanguage.style.justifyContent = "end";
divButtonLanguage.style.width = "75%";
divButtonLanguage.style.margin = "10px auto";

function buttonLanguage(but, butName, butColor) {
    but.classList.add("button");
    divButtonLanguage.append(but);
    but.innerText = butName;
    but.style.margin = "10px";
    but.style.backgroundColor = butColor;
    but.style.borderRadius = "5px";
    but.style.border = "none";
    but.style.width = "5%";
    but.style.height = "20px";
    but.style.fontSize = "14px";
    but.style.fontWeight = "bold";
    but.style.fontFamily = "Gilroy";
    but.style.boxShadow = "5px -5px 5px" + butColor;
}

let buttonEn = document.createElement("button");
let buttonDe = document.createElement("button");
let buttonRu = document.createElement("button");

buttonLanguage(buttonEn, "EN", "#9B9B9B");
buttonLanguage(buttonDe, "DE", "#FFCE00");
buttonLanguage(buttonRu, "RU", "#D52B1E");

let paragraphTask = document.createElement("p");
paragraphTask.classList.add("paragraphTask");
paragraphTask.innerText = paragraphPageEn;
document.body.append(paragraphTask);
paragraphTask.style.width = "75%";
paragraphTask.style.margin = "10px auto";
paragraphTask.style.backgroundColor = "#f7f6f4";
paragraphTask.style.border = "1px solid #c9c0b1";
paragraphTask.style.borderRadius = "5px";
paragraphTask.style.textAlign = "center";
paragraphTask.style.fontFamily = "Gilroy";
paragraphTask.style.fontSize = "4vh";

let divButtons = document.createElement("div");
divButtons.classList.add("divButtons");
document.body.append(divButtons);
divButtons.style.display = "flex";
divButtons.style.justifyContent = "center";

function button(but, butName, butColor) {
    but.classList.add("button");
    divButtons.append(but);
    but.innerText = butName;
    but.style.margin = "20px";
    but.style.backgroundColor = butColor;
    but.style.borderRadius = "5vh";
    but.style.border = "none";
    but.style.width = "10%";
    but.style.height = "10vh";
    but.style.fontSize = "4vh";
    but.style.fontWeight = "bold";
    but.style.fontFamily = "Gilroy";
    but.style.boxShadow = "10px 10px 15px" + butColor;
}
let buttonCreate = document.createElement("button");
let buttonReset = document.createElement("button");
let buttonTryAgain = document.createElement("button");

button(buttonCreate, "Create!", "#008000");
button(buttonReset, "Reset!", "#fff128");
button(buttonTryAgain, "Refresh page!", "#cc2288");

let divElements = document.createElement("div");
divElements.classList.add("divElements");
document.body.append(divElements);
divElements.style.border = "2px solid black";
divElements.style.margin = "10px auto";
divElements.style.width = "75%";
divElements.style.borderRadius = "5px";
divElements.style.display = "flex";
divElements.style.justifyContent = "space-evenly";
divElements.style.flexWrap = "wrap";
divElements.style.alignContent = "space-around";
divElements.style.position = "relative";

let divPseudo = document.createElement("div");
divPseudo.classList.add("divPseudo");
document.body.append(divPseudo);
divPseudo.style.margin = "10px auto";
divPseudo.style.height = "60px";

function upScroll() {
    document.body.scrollIntoView({ block: "start", behavior: "smooth" });
}

buttonCreate.addEventListener("click", create, { once: true });
buttonReset.addEventListener("click", reset);
buttonUp.addEventListener("click", upScroll);
buttonTryAgain.addEventListener(
    "click",
    function () {
        document.location.reload();
    },
    { once: true }
);
paragraphTask.innerText = paragraphPageEn;
buttonEn.addEventListener("click", function () {
    paragraphTask.innerText = paragraphPageEn;
});
buttonDe.addEventListener("click", function () {
    paragraphTask.innerText = paragraphPageDe;
});
buttonRu.addEventListener("click", function () {
    paragraphTask.innerText = paragraphPageRu;
});
