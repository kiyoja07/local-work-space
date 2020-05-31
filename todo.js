
const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"), 
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // toDos 저장하는 array 선언

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify() to convert JavaScript object into a string
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // push() -> array의 마지막에 요소 추가
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault(); // preventDefault() -> 태그의 고유 동작을 중단
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // JSON.parse() to convert string into a JavaScript object
        parsedToDos.forEach(function(toDo) {  // array.forEach(function(currentValue), thisValue)
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit); //addEventListener(event, function), to attach an event handler
}

init();