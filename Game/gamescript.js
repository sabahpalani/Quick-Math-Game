let timeLeft = 60;
let timerInterval;
let correctAnswers = 0;

function startTimer() {
  const timerElement = document.getElementById("timer");

  timerInterval = setInterval(() => {
    timerElement.textContent = `${timeLeft}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  document.getElementById("gameOverMessage").innerText = "Game Over!";
  document.getElementById("gameOverMessage").style.display = "block";
  document.getElementById("question").style.display = "none";
  document.getElementById("userAnswer").style.display = "none";
  document.getElementById("submitBtn").style.display = "none";
  document.getElementById("timer").style.display = "none";
  document.getElementById("scoreMessage").innerText = `Score: ${correctAnswers}`;
  document.getElementById("scoreMessage").style.display = "block";
  document.getElementById("goBack").style.display = "block";
  document.body.style.backgroundImage = 'linear-gradient(90deg, #56ccf2, #2f80ed, #56ccf2, #2f80ed)';
  document.body.style.backgroundSize = '400% 400%';
  document.body.style.animation = 'gradientMovement 5s ease infinite';
}

function randomOperation() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let numOne = Math.floor(Math.random() * 10) + 1;
  let numTwo = Math.floor(Math.random() * 10) + 1;

  let currentQuestion;
  let correctAnswer;

  switch (operation) {
    case "+":
      currentQuestion = `${numOne} + ${numTwo}`;
      correctAnswer = numOne + numTwo;
      break;
    case "-":
      if (numOne < numTwo) [numOne, numTwo] = [numTwo, numOne];
      currentQuestion = `${numOne} - ${numTwo}`;
      correctAnswer = numOne - numTwo;
      break;
    case "*":
      currentQuestion = `${numOne} * ${numTwo}`;
      correctAnswer = numOne * numTwo;
      break;
    case "/":
      do {
        numOne = Math.floor(Math.random() * 10) + 1;
        numTwo = Math.floor(Math.random() * 10) + 1;
      } while (numOne % numTwo !== 0 || numOne / numTwo > 10);
      currentQuestion = `${numOne} / ${numTwo}`;
      correctAnswer = numOne / numTwo;
      break;
  }

  const questionElement = document.getElementById("question");
  const inputElement = document.getElementById("userAnswer");
  const submitButton = document.getElementById("submitBtn");

  questionElement.innerText = `What is ${currentQuestion}?`;

  submitButton.onclick = function () {
    const userAnswer = inputElement.value;

    if (parseInt(userAnswer) === correctAnswer) {
      questionElement.innerText = "Correct!";
      questionElement.style.color = "green";
      correctAnswers++;
    } else {
      questionElement.innerText = "Incorrect!";
      questionElement.style.color = "red";
    }

    inputElement.value = "";

    setTimeout(() => {
      questionElement.style.color = "";
      randomOperation();
    }, 500);
  };

  inputElement.onkeydown = function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
  };
}

window.onload = () => {
  startTimer();
  randomOperation();
};

goBack.addEventListener("click", function () {
  window.location.href = "../index.html";
});