function include(url) {
    const script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

include("/last_HW/main.js");

let linkPrevios = "document.location='../taskThird/taskThird.html'";
let linkNext = "document.location='../taskFifth/taskFifth.html'";
let titlePage = "Fourth task";
let paragraphPageRu =
    "В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение в большем размере.";
let paragraphPageEn =
    "A JavaScript array is declared with links to images. Based on this array, a collection of small images is formed in the top of the interface. When one of the images is clicked, the link to that image is retrieved and displayed in a larger size in the bottom of the interface. This way, the user sees their representation in larger scale by clicking on the small images.";
let paragraphPageDe =
    "In JavaScript wird ein Array mit Links zu Bildern deklariert. Basierend auf diesem Array wird eine Sammlung von kleinen Bildern im oberen Teil der Benutzeroberfläche erstellt. Wenn auf eines der Bilder geklickt wird, wird der Link zu diesem Bild abgerufen und im unteren Teil der Benutzeroberfläche in größerer Größe angezeigt. Auf diese Weise sieht der Benutzer beim Klicken auf kleine Bilder ihre Darstellung in größerem Maßstab.";

let butSelector = "img";

const arrImage = [
    "https://picsum.photos/id/10/1920/1080",
    "https://picsum.photos/id/20/1920/1080",
    "https://picsum.photos/id/30/1920/1080",
    "https://picsum.photos/id/40/1920/1080",
    "https://picsum.photos/id/50/1920/1080",
    "https://picsum.photos/id/60/1920/1080",
    "https://picsum.photos/id/70/1920/1080",
    "https://picsum.photos/id/80/1920/1080",
    "https://picsum.photos/id/90/1920/1080",
    "https://picsum.photos/id/100/1920/1080",
];

function create() {
    for (let i = 0; i < arrImage.length; i++) {
        let elemImg = document.createElement("img");
        elemImg.setAttribute("src", arrImage[i]);
        elemImg.style.width = "9%";
        elemImg.style.margin = "10px auto";
        elemImg.style.display = "flex";
        elemImg.style.alignItems = "center";
        elemImg.style.justifyContent = "center";
        elemImg.style.border = "2px solid #553f2d";
        elemImg.style.borderRadius = "5px";
        elemImg.addEventListener("click", function () {
            if (elemImg.style.width === "9%") {
                elemImg.style.width = "100%";
                elemImg.style.position = "absolute";
                elemImg.style.top = "-670%";
                elemImg.style.margin = "auto";
                elemImg.style.zIndex = "9";
                elemImg.style.border = "2px solid";
                elemImg.style.borderImage =
                    "linear-gradient(to right, #c6f50f 20%, #ffa500 40%, #66cdaa 60%, #00ced1 80%) 5";
            } else {
                elemImg.style.width = "9%";
                elemImg.style.position = "relative";
                elemImg.style.top = "0";
                elemImg.style.margin = "10px auto";
                elemImg.style.zIndex = "2";
            }
        });
        divElements.append(elemImg);
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}

function reset() {
    let x = divElements.querySelectorAll("img");
    for (let i = 0; i < x.length; i++) {
        x[i].style.borderImage = "none";
    }
    document.body.scrollIntoView({ block: "end", behavior: "smooth" });
}
