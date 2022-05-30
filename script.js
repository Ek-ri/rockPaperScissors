function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return "ROCK";
    } else if (play === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    const playerPick = playerSelection.toUpperCase();
    console.log(playerPick);
    if (playerPick === 'ROCK' && computerSelection === 'ROCK') {
        return 'The match is a tie!';
    } else if (playerPick === 'ROCK' && computerSelection === 'PAPER') {
        return 'You lose! Paper beats Rock.';
    } else if (playerPick === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You win! Rock beats Scissors.';
    } else if (playerPick === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerPick === 'PAPER' && computerSelection === 'ROCK') {
        return 'You win! Paper beats Rock.';
    } else if (playerPick === 'PAPER' && computerSelection === 'PAPER') {
        return 'The match is a tie!';
    } else if (playerPick === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! Scissors beats Paper.';
    } else if (playerPick === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerPick === 'SCISSORS' && computerSelection === 'SCISSORS') {
        return 'The match is a tie!';
    }
}
