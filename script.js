const choices = ["scissors", "paper", "rock"]

const getComputerChoice = () => choices[Math.floor(Math.random()*3)]

const getPlayerChoice = () => prompt(`"scissors", "paper", "rock"?`)

let computerScore = 0;
let humanScore = 0;

const playRound = (computerChoice, humanChoice) => {

    // const winningMessage = console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    // const losingMessage = console.log(`You win! ${computerChoice} beats ${humanChoice}`)
    // const drawMessage = console.log(`It's a tie! You both selected ${humanChoice}`)

    if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        humanScore++
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        humanScore++
        return console.log(`You win! ${humanChoice} beats ${computerChoice}.  The score is Player: ${humanScore}. Computer: ${computerScore}`)
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        humanScore++
        return console.log(`You win! ${humanChoice} beats ${computerChoice}.  The score is Player: ${humanScore}. Computer: ${computerScore}`)
    } else if (humanChoice.toLowerCase() === computerChoice) {
        return console.log(`It's a tie! You both selected ${humanChoice}.  The score is Player: ${humanScore}. Computer: ${computerScore}`)
    } else {
        computerScore++
        return console.log(`You win! ${computerChoice} beats ${humanChoice}. The score is Player: ${humanScore}. Computer: ${computerScore}`)
    }

}

for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getPlayerChoice())
}