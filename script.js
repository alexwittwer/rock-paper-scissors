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

//Get user input, store it in a variable
//issues: only runs once

function getUserChoice() {
    while (true) {
        let userChoice = prompt("Please enter Rock, Paper or Scissors ");

        // converts choice to lower case for comparisons
        userChoice = userChoice.toLowerCase();

        if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
            alert("Error: invalid input. Please try again");
        }
        else {
            return userChoice;
        }
    }
}



//Game logic
//here is fairly easy. split into win, lose, and tie conditions:
// For example, 
// if computerChoice = 1 (rock) and playerChoice = 2, 
// or computerChoice = 2, player choice = 3
// or computerChoice = 3, player choice = 1
// send win condition

function playRound (playerChoice, computerChoice) {
    if playerChoice == computerChoice {
        return (alert(computerChoice + "its a tie!"))
    }
    else if playerChoice == 'rock' && computerChoice == 'scissors'
}

//single round
function playRound(playerChoice, computerChoice) {

}

//counter
// need a program that increases the counter of either variable a or
// variable b, depending on the program. Then, if this variable is more than 5 the game is over and we declare the overall winner

//full game
function game() {

}