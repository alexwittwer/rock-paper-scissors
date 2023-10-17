//event listeners for buttons. adds all playButtons to btn nodelist
//then iterates an event listener using each button's stored value
const btn = document.querySelectorAll(".playButton");
const usrScore = document.querySelector("#userScore");
const cmpScore = document.querySelector("#computerScore");

//creates a reset button that will be added and removed after win conditions

/* function createResetButton() {
  const resetButton = document.createElement("button");
  const scoreboard = document.querySelector(".scoreboard");
  resetButton.classList.add("resetButton");
  scoreboard.insertBefore(resetButton, usrScore);
  resetButton.textContent = "Play again?";
}
 */
let userScore = 0;
let compScore = 0;

btn.forEach((item) => {
  item.addEventListener("click", () => {
    playRound(item.value);
    winCon();
    usrScore.textContent = "Player Score: " + userScore;
    cmpScore.textContent = "Computer Score: " + compScore;
  });
});

//initialize gameResult pointer
const gameResult = document.querySelector(".gameResult");
//clear gameResult text
//current bug: cannot leave an empty string due to padding
gameResult.textContent = "choose your weapon";

//main game logic
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let gameWon = winCon();

  if (gameWon == true) {
    return;
  } else {
    if (playerChoice === computerChoice) {
      gameResult.textContent =
        "It's a tie! Computer chose " + computerChoice + ". ";
      return;
    }
    //win conditions
    else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      gameResult.textContent =
        "You win! Computer chose " + computerChoice + ".";
      userScore += 1;
      //lose conditions
      return "user";
    } else {
      gameResult.textContent =
        "You lost :( Computer chose " + computerChoice + ".";
      compScore += 1;
      return "computer";
    }
  }
}

//checks win conditions
function winCon() {
  if (userScore == 5) {
    gameResult.textContent = "Victory!";
    return true;
  } else if (compScore == 5) {
    gameResult.textContent = "Defeat...";
    return true;
  } else {
    return false;
  }
}

//get computer choice via math.random
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  let outChoice = "";

  //Logic for computer choice, outputs the computer choice as a string,
  if (computerChoice === 1) {
    outChoice = "rock";
  } else if (computerChoice === 2) {
    outChoice = "paper";
  } else if (computerChoice === 3) {
    outChoice = "scissors";
  }
  return outChoice;
}
