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
    let playerPick = playerSelection.toUpperCase();
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

function game() {
    //for (let i = 0; i < 5; i++) {
        let pick = prompt('Pick rock, paper, or scissors!');
        alert(playRound(pick));  
    //}
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = (playRound(button.id, computerPlay()));
        //console.log(typeof(result)); //string
        const p = document.createElement('p');
        p.textContent = result;
        results.appendChild(p);
        if (result.startsWith('You win')) {
            playerScore += 1;
            console.log(playerScore);
        } else if (result.startsWith('You lose')) {
            computerScore += 1;
            console.log(computerScore);
        }
    })
})

/*function addResult() {
    const result = playRound(button.id)
}*/



const results = document.querySelector('#results');

const scoreboard = document.createElement('h1');
scoreboard.classList.add('scoreboard');
scoreboard.textContent = 'Scoreboard'
results.appendChild(scoreboard);
