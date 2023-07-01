function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='/last_HW/index.html'";
let linkNext = "document.location='../taskSecond/taskSecond.html'";
let titlePage = "First task";
let paragraphPageRu =
    "Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.";
let paragraphPageEn =
    "Write a program that creates a set of paragraphs based on an array of strings and displays them in the user interface. When a paragraph is clicked, the text should be replaced with asterisks. It is not necessary to make the process reversible at this stage by changing the text back upon a subsequent click.";
let paragraphPageDe =
    "Schreiben Sie ein Programm, das auf der Grundlage eines String-Arrays eine Menge von Absätzen bildet und sie in der Benutzeroberfläche ausgibt. Wenn auf einen Absatz geklickt wird, sollte der Text durch Sternchen ersetzt werden. Es ist derzeit nicht erforderlich, den Prozess bei erneutem Klicken umkehrbar zu machen.";

let butSelector = "p";

let array = [
    "border-collapse - устанавливает, как отображать границы вокруг ячеек таблицы.",
    "text-decoration - добавляет оформление текста в виде его подчеркивания, перечеркивания, линии над текстом и мигания.",
    "right - для позиционированного элемента определяет расстояние от правого края родительского элемента, не включая отступ, поле и ширину рамки, до правого края дочернего элемента.",
    "overflow - управляет отображением содержания блочного элемента, если оно целиком не помещается и выходит за область заданных размеров.",
    "padding - устанавливает значение полей вокруг содержимого элемента.",
    "font-size - определяет размер шрифта элемента.",
    "list-style - универсальное свойство, позволяющее одновременно задать стиль маркера, его положение, а также изображение, которое будет использоваться в качестве маркера.",
];
let arrColor = [
    "mediumaquamarine",
    "#008cc1",
    "#f36196",
    "#fed200",
    "#9f0000",
    "#74c365",
    "#220099",
];
function create() {
    for (let i = 0; i < array.length; i++) {
        let str = "*";
        let paragraph = document.createElement("p");
        paragraph.innerText = array[i];
        paragraph.style.margin = "0px auto";
        paragraph.style.padding = "10px";
        paragraph.style.borderBottom = "1px dotted black";
        paragraph.style.textAlign = "center";
        paragraph.style.fontFamily = "Gilroy";
        paragraph.style.fontSize = "25px";
        paragraph.style.fontWeight = "bold";
        paragraph.style.color = arrColor[i];
        paragraph.addEventListener("click", function () {
            if (paragraph.innerText === array[i]) {
                paragraph.innerText = str.repeat(array[i].length);
                paragraph.style.overflowWrap = "anywhere";
            } else {
                paragraph.innerText = array[i];
            }
        });
        divElements.append(paragraph);
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}
function reset() {
    let x = divElements.querySelectorAll("p");
    for (let i = 0; i < x.length; i++) {
        x[i].innerText = array[i];
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}
