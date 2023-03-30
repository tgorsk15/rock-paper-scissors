const body = document.querySelector('body');
body.style.backgroundColor = 'purple';

// create a function (getComputerChoice) that randomly generates rock, paper or scissors
        // Note: use the console to mak sure this function is working correctly

const gameOutcomes = ['rock', 'scissors', 'paper'];
function getComputerChoice() {
    return gameOutcomes[Math.floor(Math.random() * gameOutcomes.length)];
}

// trying to write a separate function whose sole purpose is to get the player's selection .... not working, deleted

// addevent Listeners for player buttons
// Rock button
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    // added the computerSelection directly into the event... takes away the need to have the getComputerChoice() function?
    computerSelection = gameOutcomes[Math.floor(Math.random() * gameOutcomes.length)]
    playRound();
});

// Paper button
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = gameOutcomes[Math.floor(Math.random() * gameOutcomes.length)]
    playRound();
});

// Scissors button
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = gameOutcomes[Math.floor(Math.random() * gameOutcomes.length)]
    playRound();
});


// setting up two different variables that keep track of each player's score
let playerScore = 0
let computerScore = 0

        // function, playRound(), that plays a SINGLE ROUND of rock/p/s
            // two parameters: what the player selects and what the computer selects
            // return string that says who won (ex: 'Computer wins! Paper beats rock!')
            // *****PROBLEM: it is fading out my 'computerSelection' parameter, which was defined above
function playRound() {
    // make their choice case insenstive
    // make an else option at the end if user didn't put in any of the three possible answers
    // IMPORTANT: changed all of the '=s' to '===' and it started correctly using the logic of the selections and round outcomes
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            console.log("It's a tie! You both picked Rock")
        } else if (computerSelection === 'paper') {
            computerScore++
            console.log("You lost! Paper beats Rock")
        } else {
            playerScore++
            console.log("You won! Rock beats Scissors!")
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            console.log("It's a tie! You both picked Paper")
        } else if (computerSelection === 'rock') {
            playerScore++
            console.log("You won! Paper beats Rock")
        } else {
            computerScore++
            console.log('You lost! Scissors beats paper')
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            console.log('You lost! Rock beats Scissors')
        } else if (computerSelection === 'scissors') {
            console.log("It's a tie! You both picked Scissors")
        } else {
            playerScore++
            console.log('You won! Scissors beats paper')
        }
    } else {
        console.log('You did not give a valid answer. Try again')
    }
}



        // write another function game(), that calls the playRound() function INSIDE of this that plays a 5 round game and keeps score and reports winner at the end
            // use console.log() to display the results of each round

    // create a loop... that ends after 5 rounds
    // IDEA: Only increment i IF either playerScore or computerScore increased... otherwise invoke playRound() again without adding an instance
    // Maybe not... its only asking for 5 rounds
    // IDEA: use an if statement to check what the score is if i < 5, otherwise if i = 5, give the resultof the game
    function game(){
        // for (let i = 0; i < 5; i++) {
            // computerSelection = getComputerChoice()
            // want to alter playerSelection so it matches whatever button was pressed
            // IDEA: could create 3 separate functions that correlate with the different buttons to return the right string
            // OR i could create an event listener that comes with a function attached to it, and goes through a conditional statement
            // eneded up creating three event listeners for each button, that each came with a function
            // playerSelection = prompt('Do you want to choose rock, paper,or scissors?', '').toLowerCase()
            playRound()
            console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`)
        }

        // IDEA: write a separate IF statement AFTER the loop is ran through, which declares who the winner who is
        // if (computerScore > playerScore) {
        //     console.log("You lost the game. Better luck next time!")
        // } else if (playerScore > computerScore) {
        //     console.log("You won the game! Good job!")
        // } else {
        //     console.log("You tied with the computer!")
        // }
    //}
    


console.log(computerScore)
console.log(playerScore)