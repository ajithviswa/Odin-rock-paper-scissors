console.log("Hello World")
let humanScore=0;
let computerScore=0;

function getComputerChoice() {
    options = ['rock', 'paper', 'scissors']
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(2);
    number =  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let computerChoice = options[number];
    return computerChoice    
}

function getHumanChoice() {
    let humanChoice = window.prompt("Enter any value: Rock, Paper, Scissors").toLowerCase()
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    console.log("Human choice:", humanChoice)
    console.log("Computer choice:", computerChoice)
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
}

function playGame() {
    let counter=0
    while(counter<5) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(); 
        playRound(humanSelection, computerSelection);
        counter++
    }
    console.log('---------------One Round Completed-------------')
    console.log('Human point ------------> ', humanScore)
    console.log('Computer point ------------> ', computerScore)  
    if(humanScore > computerScore) {
        console.log('Human won!! :)')
    } else {
        console.log('Computer won! :(')
    }
}

playGame();
