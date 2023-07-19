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
  let text;

  if (playerSelection === computerSelection) {
    text = 'Tie';
  } else if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'scissors':
        text = 'You Win! Rock beats Scissors';
        break;
      case 'paper':
        text = 'You Lose! Paper beats Rock';
        break;
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        text = 'You Lose! Rock beats Scissors';
        break;
      case 'paper':
        text = 'You Win! Scissors beats Paper';
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        text = 'You Win! Paper beats Rock';
        break;
      case 'scissors':
        text = 'You Lose! Scissors beats Paper';
        break;
    }
  }
  console.log(playerSelection, computerSelection)
  console.log(text)
  result.textContent = text
}

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return 'Tie'
//   } else if (playerSelection === 'rock') {
//     switch (computerSelection) {
//       case 'scissors':
//         return 'You Win! Rock beats Scissors';
//       case 'paper':
//        return 'You Lose! Paper beats Rock';
//     }
//   } else if (playerSelection === 'scissors') {
//     switch (computerSelection) {
//       case 'rock':
//         return 'You Lose! Rock beats Scissors';
//       case 'paper':
//         return 'You Win! Scissors beats Paper';
//     }
//   } else if (playerSelection === 'paper') {
//     switch (computerSelection) {
//       case 'rock':
//         return 'You Win! Paper beats Rock';
//       case 'scissors':
//         return 'You Lose! Scissors beats Paper'
//     }
//   } else {
//     return 'Inavalid Selection'
//   }
// }
 

const result = document.querySelector('.display-result')
const choices = document.querySelectorAll('.selection-btn')
const playerScore = document.querySelector('.score--player')
const computerScore = document.querySelector('.score--computer')
console.log(playerScore.textContent < 5)
console.log(computerScore.textContent < 5)


choices.forEach(choice => choice.addEventListener('click', function(){
  playRound(choice.id, getComputerChoice())
}))

// choices.forEach(choice => choice.addEventListener('click', function(){
//   let computerSelection = getComputerChoice()
//   result.textContent = playRound(this.id, computerSelection);
//   if (result.textContent.includes('Win')) {
//     console.log('win')
//     playerScore.textContent++
//   }
// }))
    
  
  
  
  



// const rock = document.querySelector("#rock")
// rock.addEventListener('click', function(){
//   // let computerSelection = getComputerChoice()
//   console.log(playRound(rock.id, getComputerChoice()))
// })
