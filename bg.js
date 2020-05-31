const body = document.querySelector("body"),
    IMG_NUMBER = 2;

// first get the size from the window
// if that didn't work, get it from the body
// const browserSize = {
//     width: window.innerWidth || document.body.clientWidth,
//     height: window.innerHeight || document.body.clientHeight
// },
//     browserAspect = browserSize.height / browserSize.width;

// console.log(browserSize.height ,  browserSize.width)

function paintImage(imgNumber) {
    const image = new Image(); // const image = document.createElement("img")
    image.src = `images/${imgNumber + 1}.jpg`; // image source
    image.classList.add("bgImage");
    // image.classList.add("bgImage"); // returns the class name(s) of an element
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
