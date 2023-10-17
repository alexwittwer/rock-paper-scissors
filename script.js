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

//game logic -- button

//event listeners for buttons. adds all playButtons to btn nodelist
//then iterates an event listener using each button's stored value
const btn = document.querySelectorAll(".playButton");
const usrScore = document.querySelector("#userScore");
const cmpScore = document.querySelector("#computerScore");
let userScore;
let compScore;
  

btn.forEach((item) => {
  item.addEventListener("click", () => {
    playRound(item.value);
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
    userScore++;
    //lose conditions
    return "user";
  } else {
    gameResult.textContent =
      "You lost :( Computer chose " + computerChoice + ".";
      compScore++;
    return "computer";
  }
}

/* 
//full game
function playRPS() {
    //initialize values for win condition
    let userWinStreak = 0;
    let computerWinStreak = 0;

    //if user or computer has less than 5 wins, continue
    while (userWinStreak < 5 && computerWinStreak < 5) {

        //  play a round, save winner as output
        const winner = playRound();

        // handle win streak updates
        if (winner === 'computer') {
            computerWinStreak++;
        } else if (winner === 'user') {
            userWinStreak++;
        }
        // end the game, declare the winner
        if (userWinStreak == 5) {
            alert("You win!");
            return;
        } else if (computerWinStreak == 5) {
            alert("You lost!");
            return;
        }
    }
} */
