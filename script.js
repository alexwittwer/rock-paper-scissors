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

//game start

//event listeners for buttons. adds all playButtons to btn nodelist
//then iterates an event listener using each button's stored value
const btn = document.querySelectorAll(".playButton");
const usrScore = document.querySelector("#userScore");
const cmpScore = document.querySelector("#computerScore");
let userScore = 0;
let compScore = 0;
const gameResult = document.querySelector(".gameResult");
//sets initial game result message
gameResult.textContent = "choose your weapon - first to 5 wins"
  

btn.forEach((item) => {
  item.addEventListener("click", () => {
    playRound(item.value);
    usrScore.textContent = "Player Score: " + userScore;
    cmpScore.textContent = "Computer Score: " + compScore;

  });
});

if (userScore >= 5 || compScore >= 5) {
  gameResult.textContent = "Game Over!"
  btn.forEach((item) => {
    item.removeEventListener("click")

  })
}

//main game logic
function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

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
    gameResult.textContent = "You win! Computer chose " + computerChoice + ".";
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



