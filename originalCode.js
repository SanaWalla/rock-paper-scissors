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


function playRound() {

    let playerSelection = prompt("Do you choose: rock, paper, or scissors?");

    let user = playerSelection.toLowerCase();

    let computerSelection = computerPlay();

    if (user === computerSelection) {
        return "It's a tie!";
    } else if ((user === "rock" && computerSelection === "scissors")
        ||
        (user === "paper" && computerSelection === "rock")
        ||
        (user === "scissors" && computerSelection === "paper")) {
        // User wins
        return 1;
    } else {
        // Computer wins
        return 2;
    }
}



function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === 1) {
            userScore++;
        } else if (result === 2) {
            computerScore++;
        }
        console.log(i);
    }

    if (userScore > computerScore) {
        return "User wins!"
    } else if (computerScore > userScore) {
        return "Computer wins!"
    } else if (userScore === computerScore) {
        return "It's a tie!"
    }
}

console.log(game());