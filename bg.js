const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImage(imgNumber) {
    const image = new Image(); // const image = document.createElement("img")
    image.src = `images/${imgNumber + 1}.jpg`; // image source
    image.classList.add("bgImage"); // returns the class name(s) of an element
    body.prepend(image); // inserts specified content at the beginning of the selected elements
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
