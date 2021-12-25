function computerPlay() {
    const compOptions = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * compOptions.length);
    return compOptions[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();

    if (playerMove === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }else if (playerMove === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    } else if (playerMove === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerMove === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock."
    } else if (playerMove === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors."
    } else if (playerMove === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper."
    } else {
        return "It's a Draw!"
    }



    
}


const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));