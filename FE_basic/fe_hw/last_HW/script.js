document.body.style.position = "relative";
document.body.style.backgroundImage = "url('image/sp.gif')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
document.body.style.height = "100vh";
document.body.style.padding = "0";
document.body.style.margin = "0";

let title = document.createElement("h1");
title.classList.add("title");
title.innerText = "My last home work, basic frontend course(((";
document.body.append(title);
title.style.textAlign = "center";
title.style.marginBottom = "100px";
title.style.fontSize = "50px";
title.style.fontWeight = "bold";
title.style.fontFamily = "Gilroy";
title.style.color = "#ffe1ff";

let navButtons = document.createElement("div");
navButtons.classList.add("navButtons");
document.body.append(navButtons);
navButtons.style.display = "flex";
navButtons.style.justifyContent = "center";

function buttons(but, butName, butLink, butColor, butBGI) {
    const size = "150px";
    const sizeBig = "250px";
    but.classList.add("button");
    but.innerText = butName;
    but.setAttribute("onclick", butLink);
    navButtons.append(but);
    but.style.margin = "10px auto";
    but.style.display = "block";
    but.style.backgroundColor = butColor;
    but.style.borderRadius = "50%";
    but.style.border = "none";
    but.style.width = size;
    but.style.height = size;
    but.style.color = "white";
    but.style.fontSize = "0";
    but.style.fontWeight = "bold";
    but.style.fontFamily = "Gilroy";
    but.style.boxShadow = "10px 5px 50px" + butColor;
    but.style.backgroundImage = butBGI;
    but.style.backgroundPosition = "center";
    but.addEventListener("mouseover", function () {
        but.style.transition = "all 0.8s ease";
        but.style.width = sizeBig;
        but.style.height = sizeBig;
        but.style.fontSize = "70px";
    });
    but.addEventListener("mouseout", function () {
        but.style.transition = "all 0.8s ease";
        but.style.width = size;
        but.style.height = size;
        but.style.fontSize = "0";
    });
}

let buttonTaskFirst = document.createElement("button");
let buttonTaskSecond = document.createElement("button");
let buttonTaskThird = document.createElement("button");
let buttonTaskFourth = document.createElement("button");
let buttonTaskFifth = document.createElement("button");
let buttonTaskSixth = document.createElement("button");
let buttonTaskSeventh = document.createElement("button");

buttons(
    buttonTaskFirst,
    "1st Task",
    "document.location='pages/taskFirst/taskFirst.html'",
    "#A97C50",
    "url('image/mercury.png')"
);
buttons(
    buttonTaskSecond,
    "2nd Task",
    "document.location='pages/taskSecond/taskSecond.html'",
    "#F5DEB3",
    "url('image/venera.png')"
);
buttons(
    buttonTaskThird,
    "3rd Task",
    "document.location='pages/taskThird/taskThird.html'",
    "#008000",
    "url('image/earth.png')"
);
buttons(
    buttonTaskFourth,
    "4th Task",
    "document.location='pages/taskFourth/taskFourth.html'",
    "#FFA500",
    "url('image/mars.png')"
);
buttons(
    buttonTaskFifth,
    "5th Task",
    "document.location='pages/taskFifth/taskFifth.html'",
    "#F2B4B7",
    "url('image/jupiter.png')"
);
buttons(
    buttonTaskSixth,
    "6th Task",
    "document.location='pages/taskSixth/taskSixth.html'",
    "#F0E68C",
    "url('image/uranus.png')"
);
buttons(
    buttonTaskSeventh,
    "7th Task",
    "document.location='pages/taskSeventh/taskSeventh.html'",
    "#98FB98",
    "url('image/neptun.png')"
);
