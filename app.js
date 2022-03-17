const computerChoiceDisplay = document.getElementById('computer-choice') //Get and store the id as computerChoice
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice // Saves it globally. 
let computerChoice
let result

// When clicking this happens:
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { // e = Event. => = Pass through. Grab btn and listen for a click (if click any of the btn -> something happens)
    userChoice = e.target.id //What I click gets the id and saves as userChoice. 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice() 
    getResult()
}))
// If I click paper btn now, it will show paper in "Your Choice", if chose rock...

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // Function to get a random number. Math.floor -> To get an int. Can use possibleChoices.length as well. +1 to skip the zero since it starts counting at zero. 
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice 
}
// Now randolmly generating "Computer Choice and "Your Choice" when clicking a btn.

function getResult() {
    if (computerChoice === userChoice) {
        result = 'ITS A DRAW!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'YOU WIN!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'YOU LOST!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'YOU WIN!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'YOU LOSE!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'YOU WIN!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'YOU LOSE!'
    }
    resultDisplay.innerHTML = result

}