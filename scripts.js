alert("press F11 for the best experience");
alert("also the Internet window is draggable");
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    return false;
  }

  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - parseInt(e.clientX);
    pos2 = pos4 - parseInt(e.clientY);
    pos3 = parseInt(e.clientX);
    pos4 = parseInt(e.clientY);
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const clockTime = document.getElementById("time");
// const clockDate = document.getElementById("date");
updateClock();
setInterval(updateClock, 1000);
function updateClock() {
  let date = new Date();
  clockTime.innerHTML = formatTime();
  //  clockDate.innerHTML = formatDate();
  function formatTime() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    minutes = doubleZeroes(minutes);

    return `${hours}:${minutes} ${amPm}`;
  }

  /* function formatDate() {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = doubleZeroes(month);
    day = doubleZeroes(day);

    return `${year}.${month}.${day}.`;
  }
*/
  function doubleZeroes(num) {
    num = num.toString();
    return num.length < 2 ? "0" + num : num;
  }
}

/*
const maximizeButton = document.querySelector("#maximizeButton");
const moveWindow = document.querySelector("#mydiv");

maximizeButton.addEventListener("click", windowMaximize);

function windowMaximize() {
  let width = "590px";
  let height = "600px";
  if (moveWindow.style.width == "100%") {
    width = "590px";
    height = "auto";

    moveWindow.style.width = width;
    moveWindow.style.height = height;
  } else {
    width = "100%";
    height = "100%";
    moveWindow.style.width = width;
    moveWindow.style.height = height;
  }
}
*/
/*
function updateClock()
{
  var dateTime = new Date();
  
  var clockElement = getElement("clock");
  
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  
  hours = ((hours < 10) ? "0" : "") + hours;
  minutes = ((minutes < 10) ? "0" : "") + minutes;
  
  clockElement.innerHTML = hours + ":" + minutes;
  setTimeout('updateClock()', 1000);
}
*/
