const works = ["piton", "javaescripto", "peagape", "tipoescripto", "nodulo"];

const work = works[Math.floor(Math.random() * works.length)].toUpperCase();
const wrongLetters = [];
const correctLetters = [];
var gameOver = false;
var secretWork = document.querySelector(".secret-work");
secretWork.innerHTML = work.replace(/[a-zA-z]/g, "<span>_</span>");

document.addEventListener("keydown", (event) => {
  const keyCode = event.key;
  if (!gameOver && keyCode.match(/[a-zA-z]/) && keyCode.length == 1) {
    const letter = keyCode.toUpperCase();
    wrongLetters.includes(letter) || correctLetters.includes(letter)
      ? showAlert("Letra repetida!")
      : work.includes(letter)
      ? correctLetters.push(letter)
      : wrongLetters.push(letter);

    updateScreen();
  }
});

function updateScreen() {
  showWrittenLetters();
  showCorrectLetters();
  drawGallow();
  checkGame();
}

function showCorrectLetters() {
  secretWork.innerHTML = "";
  work.split("").forEach((letra) => {
    correctLetters.includes(letra)
      ? (secretWork.innerHTML += `<span>${letra}</span>`)
      : (secretWork.innerHTML += `<span>_</span>`);
  });
}

function showWrittenLetters() {
  const div = document.querySelector(".written-letters");
  div.innerHTML = "";
  wrongLetters
    .concat(correctLetters)
    .forEach((l) => (div.innerHTML += `<span>${l} </span>`));
}

async function checkGame() {
  const container = document.querySelector(".secret-work");
  const bodyParts = document.querySelectorAll(".body-part");

  let message =
    wrongLetters.length == bodyParts.length
      ? `Você perdeu! A palavra era ${work}`
      : work === container.innerText
      ? "Você ganhou!"
      : "";

  if (message) {
    gameOver = true;
    showAlert(message);
    await new Promise((r) => setTimeout(r, 3000));
    window.location.reload();
  }
}

function showAlert(message) {
  const aviso = document.querySelector(".alert");
  aviso.innerHTML = message;
  aviso.classList.add("show");
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 2000);
}

function drawGallow() {
  const bodyPart = document.querySelectorAll(".body-part");
  for (let i = 0; i < wrongLetters.length; i++) {
    bodyPart[i].style.display = "block";
  }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
