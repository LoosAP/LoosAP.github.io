const text = document.getElementById("content");

function changeFontFamily(font) {
  text.style.fontFamily = font.value;
}
function changeFontSize(font) {
  text.style.fontSize = font.value + "px";
}
function Bold() {
  let bol = text.style.fontWeight;
  if (bol == "normal") {
    text.style.fontWeight = "bold";
  } else {
    text.style.fontWeight = "normal";
  }
}
function Italic() {
  let ital = text.style.fontStyle;
  if (ital == "normal") {
    text.style.fontStyle = "italic";
  } else {
    text.style.fontStyle = "normal";
  }
}
function Underline() {
  let und = text.style.textDecoration;
  if (und !== "underline") {
    text.style.textDecoration = "underline";
  } else {
    text.style.textDecoration = "none";
  }
}

function clearContent() {
  text.value = "";
}

function reset() {
  text.style.fontWeight = "normal";
  text.stylefontStyle = "normal";
  text.style.textDecoration = "none";
}
function saveTextAsFile(textToWrite, fileNameToSaveAs) {
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}
