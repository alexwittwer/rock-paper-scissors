function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3) + 1;
    let outChoice = '';

//Logic for computer choice, outputs the computer choice as a string
//and allows the program to append the win conditions based on this choice
    if (computerChoice == 1) {
        outChoice = 'Computer chose Rock: ';
    } else if (computerChoice == 2){
        outChoice = 'Computer chose Paper: ';
    } else if (computerChoice == 3){
        outChoice = 'Computer chose Scissors: ';
    }
    return (computerChoice, outChoice)
}


//User input.

//Arbitrarily define 1 as rock, 2 as paper, 3 as scissors (matches computer)
//because this will likely make the code easier to parse
//since we are simply comparing the two numbers.
//raise an exception if the player choses something other than Rock, Paper, or Scissors


//Game logic
//here is fairly easy. split into win, lose, and tie conditions:
// For example, 
// if computerChoice = 1 (rock) and playerChoice = 2, 
// or computerChoice = 2, player choice = 3
// or computerChoice = 3, player choice = 1
// send win condition

//single round
function playRound(playerChoice, computerChoice){

}

//counter
// need a program that increases the counter of either variable a or
// variable b, depending on the program. Then, if this variable is more than 5 the game is over and we declare the overall winner

//full game
function game(){

}