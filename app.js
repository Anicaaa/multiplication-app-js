const questionEl = document.getElementById("question");

const num1 = Math.ceil(Math.random() * 50);
const num2 = Math.ceil(Math.random() * 50);

questionEl.innerText = `What is ${num1} x ${num2}?`;
