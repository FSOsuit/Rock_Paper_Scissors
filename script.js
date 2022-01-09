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
  const compSel = container.querySelectorAll('button');
  compSel.forEach((element) => {
    element.classList.remove('chosen');
    if (element.textContent.toLowerCase() === compMove) {
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
}

function game() {
    alert("Welcome to the game of rock, paper, scissors!")
    let rounds = prompt("Enter number of rounds you want to play: "); 
    let playerScore = 0;
    let computerScore = 0;
    for (i = 1; i <= rounds; i++) {
        const playerSelection = prompt("Pick rock, paper or scissors: ");
        let roundWinner = playRound(playerSelection, computerPlay())
        if (roundWinner === 1) {
            console.log(`Round ${i} is won by Player.`);
            playerScore++;
        } else if (roundWinner === 2) {
            console.log(`Round ${i} is won by Computer.`);
            computerScore++;
        } else {
            console.log(`Round ${i} is a draw.`)
        }
    }
    //Determening a winner
    if (playerScore > computerScore) {
        console.log(`Players WON! Score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer WON! Score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else {
        console.log("It's a DRAW!");
    }
}


//Player options event catcher
const playerButtons = document.querySelector('.buttons')
const buttons = playerButtons.querySelectorAll('button');
//loops through all button nodes in selector
buttons.forEach((button) => {
  //adds event listener to each button, returns playRound function value
  button.addEventListener('click', () => {
    playRound(button.id, computerPlay());
  });
});

