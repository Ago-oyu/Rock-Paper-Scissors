function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    }
}
  
function playRound(playerSelection, computerSelection) {
  let message;
  displaySelected(playerSelection, computerSelection);
  console.log(playerSelection, computerSelection)
  if (playerSelection === computerSelection) {
    message = 'Tie';
  } else if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'scissors':
        message = 'You Win! Rock beats Scissors';
        break;
      case 'paper':
        message = 'You Lose! Paper beats Rock';
        break;
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        message = 'You Lose! Rock beats Scissors';
        break;
      case 'paper':
        message = 'You Win! Scissors beats Paper';
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        message = 'You Win! Paper beats Rock';
        break;
      case 'scissors':
        message = 'You Lose! Scissors beats Paper';
        break;
    }
  }
  result.textContent = message
  countScore(message)
 
}

function countScore(text) {
  if (text.includes('Win')) {
    playerScore.textContent++
    if (playerScore.textContent == 5) {
      result.textContent = "Congrats, You Win The Game!"
      alert("Congrats, You Win The Game!");
      resetGame();
    }
  } else if (text.includes('Lose')) {
    computerScore.textContent++
    if (computerScore.textContent == 5) {
      alert("Sorry, You Lose The Game!")
      result.textContent = "Sorry, You Lose The Game!"
      resetGame();
    }
  }
 
}

function displaySelected(playerSelection, computerSelection) {
  let playerSymbol = '';
  let computerSymbol = '';
  if (playerSelection == 'rock') {
    playerSelected.textContent = '✊'
  } else if (playerSelection == 'paper') {
    playerSelected.textContent = '🖐️'
  } else if (playerSelection == 'scissors') {
    playerSelected.textContent = '✌️'
  }
  if (computerSelection == 'rock') {
    computerSelected.textContent = '✊'
  } else if (computerSelection == 'paper') {
    computerSelected.textContent = '🖐️'
  } else if (computerSelection == 'scissors') {
    computerSelected.textContent = '✌️'
  }
}

function resetGame() {
  result.textContent = "";
  playerScore.textContent = "0";
  computerScore.textContent = "0";
}

const result = document.querySelector('.display-result>h1')
const choices = document.querySelectorAll('.selection-btn')
const playerScore = document.querySelector('.score--player').lastElementChild
const computerScore = document.querySelector('.score--computer').lastElementChild
const playerSelected = document.querySelector('#player-selection > p')
const computerSelected = document.querySelector('#computer-selection > p')

choices.forEach(choice => choice.addEventListener('click', function(){
  playRound(choice.id, getComputerChoice())
}))