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
  
function getPlayerSelection() {
    let selectionInput = prompt('What your choice?');
    let selection = selectionInput.toLowerCase();
    //console.log(selection)    
    return selection;
}
  
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie'
  } else if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'scissors':
        return 'You Win! Rock beats Scissors';
      case 'paper':
       return 'You Lose! Paper beats Rock';
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return 'You Lose! Rock beats Scissors';
      case 'paper':
        return 'You Win! Scissors beats Paper';
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return 'You Win! Paper beats Rock';
      case 'scissors':
        return 'You Lose! Scissors beats Paper'
    }
  } else {
    return 'Inavalid Selection'
  }
}

function game() {
  let playerSelection;
  let computerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    console.log(playerSelection)
    console.log(computerSelection)

    console.log(playRound(playerSelection, computerSelection))
  }
}

game();