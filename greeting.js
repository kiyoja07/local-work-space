const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    helloCN = document.querySelector(".hello");
;

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function removeHello() {
  helloCN.classList.remove(SHOWING_CN);
}

function handleSubmit(event) {
    event.preventDefault(); // 전송 취소
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    removeHello();
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit); // submit : 폼의 정보를 서버로 전송
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) { // === <- 타입까지 일치
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();