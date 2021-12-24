function computerPlay() {
    const compOptions = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random() * compOptions.length);
    return compOptions[randomNum];
}

console.log(computerPlay());

