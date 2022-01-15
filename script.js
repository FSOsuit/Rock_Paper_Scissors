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
    if (playerWins <= 3 && computerWins <= 3) { 
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
      rmTitle();
      addPlayAgainBtn();

    } else if (playerWins < computerWins) {
      loser();
      rmTitle();
      addPlayAgainBtn();
    }
}

//starting the game
const playButton = document.querySelector('.playButton');
const playGame = document.querySelector('.gameScreen');
playButton.addEventListener('click', () => {
  playGame.classList.remove('hideGame');
  playButton.classList.add('hideGame');
});



//Player options event catcher
const playerButtons = document.querySelector('.playerChoices');
const buttons = playerButtons.querySelectorAll('img');
//loops through all button nodes in selector
buttons.forEach((button) => {
  //adds event listener to each button, returns playRound function value
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());
  });
});

//function for displaying winner msg
function winner() {
  const gameScreen = document.querySelector('.gameScreen');
  gameScreen.classList.add('hideGame');

  const container = document.querySelector('body');
  const endScreen = document.createElement('div');
  endScreen.textContent = "Winner";
  endScreen.classList.add('title');
  container.appendChild(endScreen);
}

//displaying loser msg
function loser() {
  const gameScreen = document.querySelector('.gameScreen');
  gameScreen.classList.add('hideGame');

  const container = document.querySelector('body');
  const endScreen = document.createElement('div');
  endScreen.textContent = "Loser";
  endScreen.classList.add('title');
  container.appendChild(endScreen);
}

//function to remove title at the end
function rmTitle () {
  const title = document.querySelector('.title');
  const condition = document.getElementById('condition');
  title.classList.add('hideGame');
  condition.classList.add('hideGame');
}

//adding  play again button
function addPlayAgainBtn () {
  const playAgainContainer = document.querySelector('body');
  const playAgain = document.createElement('button');
  playAgain.classList.add('playButton')
  playAgain.textContent = "play again!"
  playAgainContainer.appendChild(playAgain);
  playAgain.addEventListener('click', () => {
    location.reload();
  });
}


