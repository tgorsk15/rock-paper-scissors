console.log('Hya partner')
// create a function (getComputerChoice) that randomly generates rock, paper or scissors
        // Note: use the console to mak sure this function is working correctly
const gameOutcomes = ['rock', 'scissors', 'paper'];
function getComputerChoice() {
    let rand = gameOutcomes[Math.floor(Math.random() * gameOutcomes.length)];
    return rand;
}

const playerSelection = prompt('Do you want to choose rock, paper,or scissors?', '').toLowerCase();
const computerSelection = getComputerChoice()
        // function, playRound(), that plays a SINGLE ROUND of rock/p/s
            // two parameters: what the player selects and what the computer selects
            // return string that says who won (ex: 'Computer wins! Paper beats rock!')
            // PROBLEM: it is fading out my 'computerSelection' parameter, which was defined above
function playRound(playerSelection, computerSelection) {
    // make their choice case insenstive
    // make an else option at the end if user didn't put in any of the three possible answers
    if (playerSelection = 'rock') {
        if (rand = rock) {
            alert("It's a tie! You both picked Rock")
        } else if (rand = 'paper') {
            alert("You lost! Paper beats Rock")
        } else {
            alert("You won! Rock beats Scissor!")
        }
    } else if (playerSelection = 'paper') {
        if (rand = 'rock') {
            alert('You won! Paper beats Rock')
        } else if (rand = 'paper') {
            alert("It's a tie! You both picked Paper")
        } else {
            alert('You lost! Scissors beats paper')
        }
    } else if (playerSelection = 'scissors') {
        if (rand = 'rock') {
            alert('You lost! Rock beats Scissors')
        } else if (rand = 'scissors') {
            alert("It's a tie! You both picked Scissors")
        } else {
            alert('You won! Scissors beats paper')
        }
    } else {
        alert('You did not give a valid answer. Try again')
    }
}
playRound()

        // write another function game(), that calls the playRound() function INSIDE of this that plays a 5 round game and keeps score and reports winner at the end
            // use loops!
            // use console.log() to display the results of each round AND the winner at the end
function game() {
    playRound()
}