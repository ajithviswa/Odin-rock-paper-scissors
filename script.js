console.log("Hello World")
let humanScore=0;
let computerScore=0;
let counter=0;
const choice = document.querySelectorAll("button")
const tablerow = document.querySelector("table")
const humanChoiceValue = document.querySelector("#human")
const computerChoiceValue = document.querySelector("#computer")
const resultsText = document.querySelector(".container")

function getComputerChoice() {
    options = ['rock', 'paper', 'scissors']
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(2);
    number =  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let computerChoice = options[number];
    return computerChoice    
}

function playRound(humanChoice, computerChoice) {
    humanChoiceValue.textContent = `Your choice is: ${humanChoice}`;
    computerChoiceValue.textContent = `Computer choice is: ${computerChoice}`;
    if(humanChoice == computerChoice)
        {console.log(`It's a tie !!! ${humanChoice} on both hands`)}
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||  (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }
    if(counter == 5) {
        let result;
        const resultVal = document.createElement("div")
        if(humanScore > computerScore) {
            result = 'Human won!! :)'
        } else {
            result = 'Computer won! :('
        }
        resultVal.textContent = result;
        resultsText.appendChild(resultVal);
    } 
}

function createRow() {
    document.querySelector("#humanscore").innerHTML = humanScore;
    document.querySelector("#computerscore").innerHTML = computerScore;
}

choice.forEach((button) => {
    button.addEventListener("click", (event) => {
        counter++
        let humanChoice = event.target.value
        console.log(humanChoice);
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        createRow();     
    });
});
