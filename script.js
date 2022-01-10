//generates computer move
function computerPlay() {
    const compOptions = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * compOptions.length);
    showComputerMove(compOptions[randomNum]);
    return compOptions[randomNum];
}

//showing computer Move
function showComputerMove(compMove) {
  const container = document.querySelector('.computerChoices');
  const compSel = container.querySelectorAll('img');
  compSel.forEach((element) => {
    element.classList.remove('chosen');
    if (element.id === compMove) { 
      element.classList.add('chosen'); //shows chosen option
    }
    else {
      return;
    }
  })

}

//function that playes round of rps
function playRound(playerSelection, computerSelection) {
    let playerWins = parseInt(document.getElementById('playerScore').textContent);
    let computerWins = parseInt(document.getElementById('computerScore').textContent);
    if (playerWins <= 3 && computerWins <= 3) { //why it works ? :D
      if (playerSelection === "rock" && computerSelection === "scissors") {
          playerWins++;
          document.getElementById('playerScore').textContent = playerWins;
      }else if (playerSelection === "scissors" && computerSelection === "paper") {
          playerWins++;
          document.getElementById('playerScore').textContent = playerWins;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
          playerWins++;
          document.getElementById('playerScore').textContent = playerWins;
      } else if (playerSelection === "rock" && computerSelection === "paper") {
          computerWins++;
          document.getElementById('computerScore').textContent = computerWins;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
          computerWins++;
          document.getElementById('computerScore').textContent = computerWins;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
          computerWins++;
          document.getElementById('computerScore').textContent = computerWins;
      } else {
          return playerWins, computerWins;
      }
    } else if (playerWins > computerWins) {
        winner();
    } else if (playerWins < computerWins) {
        loser();
    }
}


//Player options event catcher
const playerButtons = document.querySelector('.playerChoices')
const buttons = playerButtons.querySelectorAll('img');
//loops through all button nodes in selector
buttons.forEach((button) => {
  //adds event listener to each button, returns playRound function value
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());
  });
});


function winner() {
  const gameScreen = document.querySelector('.gameScreen');
  gameScreen.style.display = 'none';

  const container = document.querySelector('body');
  const endScreen = document.createElement('div');
  endScreen.style.backgroundColor = 'red';
  endScreen.textContent = "Winner";
  container.appendChild(endScreen);
}
function loser() {
  const gameScreen = document.querySelector('.gameScreen');
  gameScreen.style.display = 'none';

  const container = document.querySelector('body');
  const endScreen = document.createElement('div');
  endScreen.style.backgroundColor = 'grey';
  endScreen.textContent = "Loser";
  container.appendChild(endScreen);
}
