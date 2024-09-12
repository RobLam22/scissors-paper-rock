const choices = ["scissors", "paper", "rock"]

const getComputerChoice = () => choices[Math.floor(Math.random()*3)]

let scores = { computerScore: 0, playerScore: 0}

const playRound = (computerChoice, humanChoice) => {

    if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        scores.playerScore++
        return updateLiveScore(), displayResult(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        scores.playerScore++
        return updateLiveScore(), displayResult(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        scores.playerScore++
        return updateLiveScore(), displayResult(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if (humanChoice.toLowerCase() === computerChoice) {
        return displayResult(`It's a tie! You both selected ${humanChoice}.`)
    } else {
        scores.computerScore++
        return updateLiveScore(), displayResult(`You lost! ${computerChoice} beats ${humanChoice}.`)
    }
}

const roundEnd = () => {}

const createButtons = () => {
    const div = document.createElement('div')
    div.classList.add("buttonDiv")
    document.body.appendChild(div)

    choices.forEach(choice => {
        const btn = document.createElement('button')
        btn.id = choice
        btn.value = choice
        btn.innerText = choice
        btn.addEventListener("click", (e) => playRound(getComputerChoice() ,e.target.value))
        document.querySelector(".buttonDiv").appendChild(btn)
    })
}

const createResult = () => {
    const div = document.createElement('div')
    div.classList.add("resultDiv")
    document.body.appendChild(div)

    const p = document.createElement('p')
    p.id = 'result'
    div.appendChild(p)
}

const createScoreboard = () => {
    const div = document.createElement('div')
    div.classList.add("scoreboardDiv")
    document.body.appendChild(div)

    for (const [key,value] of Object.entries(scores)) {
        const p = document.createElement('p')
        p.id = key
        p.textContent = `${key}: ${value}`
        div.appendChild(p)
    }

}

const createPage = () => {
    createButtons()
    createResult()
    createScoreboard()
}

createPage()

const updateLiveScore = () => {
    const computerScore = document.getElementById("computerScore")
    computerScore.textContent = `Computer: ${scores.computerScore}`
    const playerScore = document.getElementById("playerScore")
    playerScore.textContent = `Player: ${scores.playerScore}`
}

const displayResult = (msg) => document.getElementById('result').textContent = msg