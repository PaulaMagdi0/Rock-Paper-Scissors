const urlParams = new URLSearchParams(window.location.search);
const playerChoice = urlParams.get('playerChoice');
const computerChoice = urlParams.get('computerChoice');

const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const playAgainButton = document.getElementById('play-again');

let playerScore = localStorage.getItem('playerScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;

const result = determineWinner(playerChoice, computerChoice);
resultElement.innerHTML = `<span>${result}</span>`;

if (result === "YOU WIN") {
    playerScore++;
} else if (result === "YOU LOSS") {
    computerScore++;
}

scoreElement.innerHTML = `<span id="player-score">${playerScore}</span>`;
localStorage.setItem('playerScore', playerScore);
localStorage.setItem('computerScore', computerScore);

playAgainButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "IT'S A DRAW!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "YOU WIN";
    } else {
        return "YOU LOSS";
    }
}

const playerChoiceIcon = document.getElementById('player-choice-icon');
const computerChoiceIcon = document.getElementById('computer-choice-icon');

playerChoiceIcon.innerHTML = generateChoiceIcon(playerChoice);
computerChoiceIcon.innerHTML = generateChoiceIcon(computerChoice);

function generateChoiceIcon(choice) {
    let iconHTML = '';
    switch (choice) {
        case 'paper':
        iconHTML = `<button class="choice button" id="${choice}"><img src="./images/icon-${choice}.svg" alt="${choice}"></button>`;
        break;
        case 'rock':
        iconHTML = `<button class="choice button" id="${choice}"><img src="./images/icon-${choice}.svg" alt="${choice}"></button>`;
        break;
        case 'scissors':
        iconHTML = `<button class="choice button" id="${choice}"><img src="./images/icon-${choice}.svg" alt="${choice}"></button>`;
        break;
    }
    return iconHTML;
}