function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    let outChoice = '';

    //Logic for computer choice, outputs the computer choice as a string
    //and allows the program to append the win conditions based on this choice

    //tested working
    if (computerChoice == 1) {
        outChoice = 'rock';
    } else if (computerChoice == 2) {
        outChoice = 'paper';
    } else if (computerChoice == 3) {
        outChoice = 'scissors';
    }
    return (outChoice)
}

//Get user input

function getUserChoice() {
    while (true) {
        let userChoice = prompt("Please enter Rock, Paper or Scissors ");

        // converts choice to lower case for comparisons
        userChoice = userChoice.toLowerCase();
        return 
        if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            alert("Error: invalid input. Please try again");
        }
        else {
            return userChoice;
        }
    }
}



//Game logic

function playRound () {

    computerChoice = getComputerChoice();
    playerChoice = getUserChoice();

    if 
    (playerChoice == computerChoice) {
        (alert("Computer chose: " + computerChoice + ". " + "its a tie!"));
        return;
    }
    else if 
    (playerChoice == 'rock' && computerChoice == 'scissors' ||
    playerChoice == 'scissors' && computerChoice == 'paper' ||
    playerChoice == 'paper' && computerChoice == 'rock') {
        (alert("Computer chose: " + computerChoice + ". You win!"));
        return;
    } 
    else {
        (alert("Computer chose: " + computerChoice + ". You lost :("));
        return;
    }
}


//counter
// need a program that increases the counter of either variable a or
// variable b, depending on the program. Then, if this variable is more than 5 the game is over and we declare the overall winner

//full game
