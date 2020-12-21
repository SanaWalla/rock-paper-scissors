
function computerPlay() {
    let computer = Math.random();

    if (computer < .33) {
        return "rock";
    } else if (computer < .67) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Do you choose: rock, paper, or scissors?");

    let user = playerSelection.toLowerCase();

    computerSelection = computerPlay();

    if (user === computerSelection) {
        return "It's a tie!";
    } else if ((user === "rock" && computerSelection === "scissors") ||
        (user === "paper" && computerSelection === "rock") ||
        (user === "scissors" && computerSelection === "paper")) {
        return `You win! ${user} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${user}`;
    }

}

// function game(playRound){
//     let userScore= 0;
//     let computerScore=0;

// }
