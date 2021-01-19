
const button = document.querySelectorAll('.playButton');
const playAgain = document.querySelector('#playAgain');
let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(user) {

    let computerSelection = computerPlay();
    let result = "";

    if (user === computerSelection) {
        result = "It's a tie!";
    } else if ((user === "Rock" && computerSelection === "Scissors")
        ||
        (user === "Paper" && computerSelection === "Rock")
        ||
        (user === "Scissors" && computerSelection === "Paper")) {
        result = `You win! ${user} beats ${computerSelection}.`
        ++userScore
        document.querySelector('.playerScore').innerHTML = userScore;
    } else {
        computerScore += 1;
        document.querySelector('.compScore').innerHTML = computerScore;
        result = `You lose! ${computerSelection} beats ${user}.`
    }
    document.querySelector('#result').innerHTML = result
    endGame();
}



button.forEach((buttons) => {
    buttons.addEventListener('click', function () {
        if (userScore >= 5 || computerScore >= 5) {
            return;
        }
        playRound(buttons.dataset.image);
    })
})

playAgain.addEventListener('click', function () {
    location.reload();
})

function endGame() {
    if (userScore == 5) {
        result = 'Congrats! You won the game!'
        document.querySelector('#result').innerHTML = result
    }
    if (computerScore == 5) {
        result = 'Too bad, you lost the game.'
        document.querySelector('#result').innerHTML = result
    }
}

console.log(button);