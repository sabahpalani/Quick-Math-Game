function randomOperation() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let numOne = Math.floor(Math.random() * 10) + 1;
  let numTwo = Math.floor(Math.random() * 10) + 1;

  let question, answer;

  switch (operation) {
    case "+":
      question = `${numOne} + ${numTwo}`;
      answer = numOne + numTwo;
      break;
    case "-":
        if (numOne < numTwo) {
            [numOne, numTwo] = [numTwo, numOne];
        }
      question = `${numOne} - ${numTwo}`;
      answer = numOne - numTwo;
      break;
    case "*":
      question = `${numOne} * ${numTwo}`;
      answer = numOne * numTwo;
      break;
    case "/":
      do {
        numOne = Math.floor(Math.random() * 10) + 1;
        numTwo = Math.floor(Math.random() * 10) + 1;
      } while (numOne % numTwo !== 0 || numOne / numTwo > 10);
      question = `${numOne} / ${numTwo}`;
      answer = numOne / numTwo;
      break;
  }

  const questionElement = document.getElementById("question");
  const inputElement = document.getElementById("userAnswer");
  const submitButton = document.getElementById("submitBtn");

  questionElement.innerText = `What is ${question}?`;

  submitButton.onclick = function () {
    const userAnswer = inputElement.value;

    if (parseInt(userAnswer) === answer) {
      questionElement.innerText = "Correct!";
      questionElement.style.color = "green";
    } else {
      questionElement.innerText = "Incorrect!";
      questionElement.style.color = "red";
    }

    inputElement.value = "";

    setTimeout(() => {
      questionElement.style.color = "";
      randomOperation();
    }, 2000);
  };

  inputElement.onkeydown = function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
  };
}

window.onload = randomOperation;
