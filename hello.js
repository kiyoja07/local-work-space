const helloContainer = document.querySelector(".js-hello"), 
    hello = helloContainer.querySelector(".hello");

const helloList =["안녕하세요", "반갑습니다", "Hello", "Hi", "Bonjour"],
    HELLO_NUM = helloList.length, 
    SHOWING_ClassName = "showing";

function helloText(num) {
    hello.innerText = helloList[num];
    hello.classList.add(SHOWING_ClassName);
}

function genRandom() {
    const number = Math.floor(Math.random() * HELLO_NUM);
    return number;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // currentUsr is not exist -> show hello message
        const randomNumber = genRandom();
        helloText(randomNumber);
    }
  }

function init() {
    loadName();
}

init();