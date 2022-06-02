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

let playerScore = 0;
let computerScore = 0;
let tie = 0;
let count = 0;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const scores = document.querySelector('#scores')

const scoreboard = document.createElement('h1');
scoreboard.classList.add('scoreboard');
scoreboard.textContent = 'Scoreboard'
results.appendChild(scoreboard);

document.getElementById('playerscores').textContent = 
"Player Score: 0"
document.getElementById('computerscores').textContent = 
"Computer Score: 0"
document.getElementById('ties').textContent = 
"Ties: 0"

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result = (playRound(button.id, computerPlay()));
        //console.log(typeof(result)); //string
        const p = document.createElement('p');
        p.textContent = result;
        results.appendChild(p);
        if (result.startsWith('You win')) {
            playerPoint();
        } else if (result.startsWith('You lose')) {
           computerPoint();
        } else {
            tie += 1;
            count += 1;
            document.getElementById('ties').innerHTML = 
            "Ties: " + tie;
        }
    })
})

function gameOver () {
    if (playerScore === 5) {
        removeClutter();
        alert('You have won!')
    } else if (computerScore === 5) {
        removeClutter();
        alert('You have lost!')
    }
}

function removeClutter () {
    while (count > 0) {
        results.removeChild(results.lastChild);
        count--;
    }
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerscores').innerHTML = 
        'Player Score: ' + playerScore;
    document.getElementById('computerscores').innerHTML =
        'Computer Score: ' + computerScore;   
}

function computerPoint () {
    computerScore += 1;
    count += 1;
    console.log(computerScore);
    document.getElementById('computerscores').innerHTML =
    'Computer Score: ' + computerScore;
    gameOver();
}

function playerPoint () {
    playerScore += 1;
    count += 1;
    console.log(playerScore);
    document.getElementById('playerscores').innerHTML = 
    'Player Score: ' + playerScore;
    gameOver();
}




