const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");
const startButton = document.querySelector("#startButton");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "#0DD284";
const paddleColor = "#0DFF84";
const paddleBorder = "black";
const ballColor = "white";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let running = false;
let paused = false;
let intervalID;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let p1Score = 0;
let p2Score = 0;
let paddle1 = {
  width: 25,
  height: 100,
  x: 0,
  y: gameHeight / 2 - 50,
};
let paddle2 = {
  width: 25,
  height: 100,
  x: gameWidth - 25,
  y: gameHeight / 2 - 50,
};

window.addEventListener("keydown", changeDirection);
resetButton.addEventListener("click", resetGame);
startButton.addEventListener("click", () => {
  if (!running) {
    gameStart();
  }
});

function gameStart() {
  running = true;
  if (!paused) {
    createBall();
    nextTick();
  }
}
function nextTick() {
  intervalID = setTimeout(() => {
    clearBoard();
    drawPaddles();
    moveBall();
    drawBall(ballX, ballY);
    checkCollision();
    nextTick();
  }, 10);
}
function clearBoard() {
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function drawPaddles() {
  ctx.strokeStyle = paddleBorder;
  ctx.fillStyle = paddleColor;
  ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
  ctx.fillStyle = paddleColor;
  ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
  ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
}
function createBall() {
  ballSpeed = 1;
  if (Math.round(Math.random()) == 1) {
    ballXDirection = 1;
  } else {
    ballXDirection = -1;
  }
  if (Math.round(Math.random()) == 1) {
    ballYDirection = 1;
  } else {
    ballYDirection = -1;
  }

  ballX = gameWidth / 2;
  ballY = gameHeight / 2;
  drawBall(ballX, ballY);
}
function moveBall() {
  ballX += ballSpeed * ballXDirection;
  ballY += ballSpeed * ballYDirection;
}
function drawBall(ballX, ballY) {
  ctx.fillStyle = ballColor;
  ctx.strokeStyle = ballBorderColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fill();
}
function checkCollision() {
  if (ballY <= 0 + ballRadius) {
    ballYDirection *= -1;
  }
  if (ballY >= gameHeight - ballRadius) {
    ballYDirection *= -1;
  }
  if (ballX <= 0) {
    p2Score++;
    updateScore();
    createBall();
    return;
  }
  if (ballX >= gameWidth) {
    p1Score++;
    updateScore();
    createBall();
    return;
  }

  if (ballX <= paddle1.x + paddle1.width + ballRadius) {
    if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
      ballX = paddle1.x + paddle1.width + ballRadius;
      ballXDirection *= -1;
      ballSpeed += 0.2;
    }
  }
  if (ballX >= paddle2.x - ballRadius) {
    if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
      ballX = paddle2.x - ballRadius;
      ballXDirection *= -1;
      ballSpeed += 0.05;
    }
  }
}
function changeDirection(event) {
  const keyPressed = event.keyCode;
  const paddle1Up = 87;
  const paddle1Down = 83;
  const paddle2Up = 38;
  const paddle2Down = 40;

  switch (keyPressed) {
    case paddle1Up:
      if (paddle1.y > 0) {
        paddle1.y -= paddleSpeed;
      }

      break;
    case paddle1Down:
      if (paddle1.y < gameHeight - paddle1.height) {
        paddle1.y += paddleSpeed;
      }

      break;

    default:
      break;
  }
  switch (keyPressed) {
    case paddle2Up:
      if (paddle2.y > 0) {
        paddle2.y -= paddleSpeed;
      }

      break;
    case paddle2Down:
      if (paddle2.y < gameHeight - paddle2.height) {
        paddle2.y += paddleSpeed;
      }

      break;

    default:
      break;
  }
}
function updateScore() {
  scoreText.textContent = `${p1Score} : ${p2Score}`;
}
function resetGame() {
  p1Score = 0;
  p2Score = 0;
  paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: gameHeight / 2 - 50,
  };
  paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight / 2 - 50,
  };
  ballX = 0;
  ballY = 0;
  ballXDirection = 0;
  ballYDirection = 0;
  updateScore();
  clearInterval(intervalID);
  gameStart();
}
//pause function TO BE IMPLEMENTED
/*
const pauseButton = document.querySelector("#pauseButton");
let ballXpause;
let ballYpause;
function pauseGame() {
  ballXpause = ballX;
  ballYpause = ballY;
  ballX = 0;
  ballY = 0;
  paused = true;
}
function continueGame() {
  ballX = ballXpause;
  ballY = ballYpause;
  paused = false;
}
pauseButton.addEventListener("click", () => {
  switch (true) {
    case paused:
      continueGame();
      break;
    case !paused:
      pauseGame();
      break;

    default:
      break;
  }
});
*/
