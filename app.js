let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was Draw. Play Again...";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.innerText = `You Win!`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
    msg.innerText = `You Lose!`;
  }
};

const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const playGame = (userChoice) => {
  console.log("user Choice =", userChoice);
  //generate computer choice
  const compChoice = getCompChoice();
  console.log("computer Choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors, rock
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
