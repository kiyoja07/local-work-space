
const clockContainer = document.querySelector(".js-clock"),
    calendarTitle = document.querySelector(".calendarDisplay"),
    clockTitle = clockContainer.querySelector(".clockDisplay");

const dayName =["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

function getCurrentTime() {
    return new Date();
}

function getTime() {
    const currentTime = getCurrentTime();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    return [hours, minutes, seconds];
}

function getCalendar() {
    const currentDate = getCurrentTime();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    dayNum = currentDate.getDay();
    const day = dayName[dayNum]
    calendarTitle.innerText = `${year}년 ${month < 10 ? `0${month}` : month}월 ${date < 10 ? `0${date}` : date}일 ${day}`;
}

// check 00:00:00 to reset date
function checkDate () {
    const [hours, minutes, seconds] = getTime();
    if (hours == 0 & minutes == 0 & seconds == 0) {
        getCalendar()
    }
}

function init() {
    getTime();
    getCalendar();
    setInterval(getTime, 1000); // run getTime every secondes
    setInterval(checkDate, 1000); // run checkDate every secondes
}

init();