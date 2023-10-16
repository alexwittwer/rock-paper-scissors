//get computer choice via math.random
function getComputerChoice() {
  //Math.random outputs a random number between 0 and 1. Multiplying
  //by 3 gives us a value between 0 and 2.9999...
  //Math.floor gives us an integer between 0 and 2, so we add 1 for
  //readability.
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
//event listeners for buttons

const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener("click", () => {
  playRound(rockbtn.value);
});

const paperbtn = document.querySelector("#paper");
paperbtn.addEventListener("click", () => {
  playRound(paperbtn.value);
});

const scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener("click", () => {
  playRound(scissorsbtn.value);
});

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  //main game logic

  // checks to see if the user choice is identical to computer choice
  // we have to be careful here because all non-empty strings return 'true'
  // as a boolean value, so we use the strict equality when comparing
  // strings.
  if (playerChoice === computerChoice) {
    alert("Computer chose: " + computerChoice + ". " + "It's a tie!");
    return;
  }

  // compares user's choice against the computer for player win conditions
  //  the boolean logic here is that we continue until we get one truthy
  // value.
  else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    alert("Computer chose: " + computerChoice + ". You win!");

    // return a string here for readability and simplicity
    return "user";
  } else {
    alert("Computer chose: " + computerChoice + ". You lost :(");
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
