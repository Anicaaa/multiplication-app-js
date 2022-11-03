//QUESTION
const questionEl = document.getElementById("question");

const num1 = Math.floor(Math.random() * 20);
const num2 = Math.floor(Math.random() * 20);

questionEl.innerText = `What is ${num1} x ${num2}?`;

//INPUT VALUE and SCORE UPDATE
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;

  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

scoreEl.innerText = `score: ${score}`;

// BUTTON RIPPLE EFFECT
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const y = event.pageY - btnEl.offsetTop;
  const x = event.pageX - btnEl.offsetLeft;

  btnEl.style.setProperty("--yPos", y + "px");
  btnEl.style.setProperty("--xPos", x + "px");
});
