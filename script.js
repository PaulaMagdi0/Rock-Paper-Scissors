const choices = document.querySelectorAll('.choice');
const buttons = document.querySelectorAll('.button');
const rulesBtn = document.getElementById('rules-btn');
const rulesPopup = document.getElementById('rules-popup');

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        window.location.href = `result.html?playerChoice=${playerChoice}&computerChoice=${computerChoice}`;
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

rulesBtn.addEventListener('click', () => {
rulesPopup.style.display = 'block';
});

document.addEventListener('click', (e) => {
if (e.target!== rulesPopup && e.target!== rulesBtn) {
    rulesPopup.style.display = 'none';
}
});

let playerScore = localStorage.getItem('playerScore') || 0;
let computerScore = localStorage.getItem('computerScore') || 0;

const scoreElement = document.getElementById('score');
scoreElement.innerHTML = `${playerScore}`;

if (performance.navigation.type === 1) { // 1 = Reload
    localStorage.removeItem('playerScore');
    localStorage.removeItem('computerScore');
    playerScore = 0;
    computerScore = 0;
    scoreElement.innerHTML = `0`;
}

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

rulesBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});