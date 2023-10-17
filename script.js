const btn = document.querySelectorAll(".playButton");
const usrScore = document.querySelector("#userScore");
const cmpScore = document.querySelector("#computerScore");
const scoreboard = document.querySelector(".scoreboard");

//initialize values for userScore and compScore. Will update
//these values after each round
let userScore = 0;
let compScore = 0;

//plays a round using buttons
btn.forEach((item) => {
  item.addEventListener("click", () => {
    playRound(item.value);
    winConEvent();
    usrScore.textContent = "Player Score: " + userScore;
    cmpScore.textContent = "Computer Score: " + compScore;
  });
});

//initialize gameResult pointer, used for displaying outcomes
const gameResult = document.querySelector(".gameResult");
gameResult.textContent = "choose your weapon";

//main game logic
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  let gameWon = winCon();

  //this function is needed to make sure the player cannot
  //continue to play after they have already won
  if (gameWon == true) {
    return;
  } else {
    //main game logic starts here//
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

//checks win conditions for gameover
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

function winConEvent() {
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

function createResetButton() {
  const resetButton = document.createElement("button");
  resetButton.setAttribute("class", "resetButton");
  scoreboard.insertBefore(resetButton, usrScore);
  const resetButtonPointer = document.querySelector(".resetButton");
  resetButton.textContent = "Play again?";
}

function removeResetButton() {
  const resetButtonPointer = document.querySelector(".resetButton");
  resetButtonPointer.remove();
}
