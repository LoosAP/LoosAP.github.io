const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessInput").value;

  guesses += 1;

  if (guess == answer) {
    document.getElementById(
      "guessResult"
    ).innerHTML = `${answer} is correct! it took ${guesses} tries. good job!`;
  } else if (guess < answer) {
    document.getElementById("guessResult").innerHTML = `${guess} is too small!`;
  } else {
    document.getElementById("guessResult").innerHTML = `${guess} is too big!`;
  }
};
