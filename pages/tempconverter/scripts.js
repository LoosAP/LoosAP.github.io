document.getElementById("submitButton").onclick = function () {
  let temp;

  if (document.getElementById("celsiusButton").checked) {
    temp = document.getElementById("tempInput").value;
    temp = Number(temp);
    temp = toCelsius(temp);
    document.getElementById("tempOutput").innerHTML = `${temp} °C`;
  } else if (document.getElementById("fahrenheitButton").checked) {
    temp = document.getElementById("tempInput").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("tempOutput").innerHTML = `${temp} °F`;
  } else {
    document.getElementById("tempOutput").innerHTML = "Select an unit!";
  }
};

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
