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
