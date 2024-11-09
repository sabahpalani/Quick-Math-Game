function randomOperation() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const numOne = Math.floor(Math.random() * 10) + 1;
  const numTwo = Math.floor(Math.random() * 10) + 1;

  let question, answer;

  switch (operation) {
    case "+":
      question = `${numOne} + ${numTwo}`;
      answer = numOne + numTwo;
      break;
    case "-":
      question = `${numOne} - ${numTwo}`;
      answer = numOne - numTwo;
      break;
    case "*":
      question = `${numOne} * ${numTwo}`;
      answer = numOne * numTwo;
      break;
    case "/":
      question = `${numOne} * ${numTwo} / ${numOne}`;
      answer = numTwo;
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
      randomOperation();
      questionElement.innerText = `What is ${question}?`;
      questionElement.style.color = "";
    }, 2000);
  };

  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitButton.click();
    }
  });
}

window.onload = randomOperation;
