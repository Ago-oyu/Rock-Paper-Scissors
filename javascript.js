function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
      case 0: {
        return 'rock'
        break;
      }
      case 1: {
        return 'scissors'
        break;
      }
      case 2: {
        return 'paper'
        break;
      }
    }
}
  
function getPlayerSelection() {
    let selectionInput = prompt('What your choice?');
    let selection = selectionInput.toLowerCase();
    //console.log(selection)    
    return selection;
}
  
function playRound(playerSelection, computerSelection) {
//  playerSelection = getPlayerSelection();
//  computerSelection = getComputerChoice();

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win! Scissors beats Paper';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beats Paper'
  } else if (playerSelection === computerSelection) {
    return 'Tie';
  } else {
    return 'Invalid Selection';
  }
}

function game() {
  let playerSelection;
  let computerSelection;

  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();

    //console.log(playerSelection)
    //console.log(computerSelection)

    console.log(playRound(playerSelection, computerSelection))
  }
}

game();