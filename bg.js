const body = document.querySelector("body"),
    IMG_NUMBER = 2;

// first get the size from the window
// if that didn't work, get it from the body
const browserSize = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
},
    browserAspect = browserSize.height / browserSize.width;

function resizeImage(imageAspect, browserAspect) {
    if (imageAspect > browserAspect) {
        // 이미지가 브라우저보다 길쭉한 경우 가로를 브라우저에 맞추고 세로를 잘라낸다\
        return "bgImageCutHeight"
    } else {
        // 이미지가 브라우저보다 납작한 경우 세로를 브라우저에 맞추고 가로는 잘라낸다
        return "bgImageCutWidth"
    }
    
}

function paintImage(imgNumber) {
    const image = new Image(); // const image = document.createElement("img")
    image.src = `images/${imgNumber + 1}.jpg`; // image source
    imageAspect = image.height / image.width;
    resizedImage = resizeImage(imageAspect, browserAspect)
    image.classList.add(resizedImage);
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
