let gameSequence = [];
let userSequence = [];

let started = false;
let gameLevel = 0;
let highScore = 0;
let h2 = document.querySelector("h2");
let colours = ["yellow", "green", "purple", "red"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 350);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 150);
}

function levelUp() {
  userSequence = [];
  gameLevel++;
  h2.innerText = `level ${gameLevel}`;
  if(highScore > gameLevel) {
    highScore = gameLevel;
  }

  let randomIndex = Math.floor(Math.random() * 4);
  let randomColor = colours[randomIndex];
  let randomButton = document.querySelector(`.${randomColor}`);

  gameSequence.push(randomColor);
  gameFlash(randomButton);
  console.log(gameSequence);
}

function checkAnswer(index) {
  if (userSequence[index] === gameSequence[index]) {
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score Was <b>${gameLevel}</b><br> Press Any Key to Start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    
    reset();
  }
}

function btnPress() {
  console.log("Button pressed");
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSequence.push(userColor);

  checkAnswer(userSequence.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameLevel = 0;
  gameSequence = [];
  userSequence = [];
}
