function computerPlay() {
    const compOptions = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * compOptions.length);
    return compOptions[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    let playerWins = 0;
    let computerWins = 0;

    if (playerMove === "rock" && computerSelection === "scissors") {
        return playerWins = 1;
    }else if (playerMove === "scissors" && computerSelection === "paper") {
        return playerWins = 1;
    } else if (playerMove === "paper" && computerSelection === "rock") {
        return playerWins = 1;
    } else if (playerMove === "rock" && computerSelection === "paper") {
        return computerWins = 2;
    } else if (playerMove === "scissors" && computerSelection === "rock") {
        return computerWins = 2;
    } else if (playerMove === "paper" && computerSelection === "scissors") {
        return computerWins = 2;
    } else {
        return 0;
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

    if (playerScore > computerScore) {
        console.log(`Players WON! Score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer WON! Score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
    } else {
        console.log("It's a DRAW!");
    }
}

game();
