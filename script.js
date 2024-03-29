const body = document.querySelector('body');
body.style.backgroundColor = 'purple';

// setting up two different variables that keep track of each player's score
let playerScore = 0
let computerScore = 0


// create a function (getComputerChoice) that randomly generates rock, paper or scissors
        // Note: use the console to mak sure this function is working correctly

const gameOutcomes = ['rock', 'scissors', 'paper'];
function getComputerChoice() {
    return gameOutcomes[Math.floor(Math.random() * gameOutcomes.length)];
}

// Check() function to see if game has ended
function check() {
    if (playerScore === 5) {
        scoreboard.textContent = "You won the game! Good job!";
        disableButton();
    } else if (computerScore === 5) {
        scoreboard.textContent = "You lost the game. Better luck next time!";
        disableButton();
    }
}


// resetGame function
function resetButton() {
    reset.style.visibility = 'visible'
    // const reset = document.createElement('button');

    // reset.addEventListener('click', () => {
    // reset.remove();
    // playerScore === 0;
    // computerScore === 0;
    // rock.disabled = false;
    // paper.disabled = false;
    // scissors.disabled = false;
    // scoreboard.textContent = ''
// })
}

// disableGame() function to disable buttons after end has been reached
function disableButton() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    resetButton()
}



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

// Reset button event listener... resets scores and triggers new game
const reset = document.querySelector('#reset-button');
reset.style.visibility = 'hidden';


// reference to results-box container
const boxScore = document.querySelector('.results-box')

// reference to scoreboard
const scoreboard = document.querySelector('.scoreboard')



        // function, playRound(), that plays a SINGLE ROUND of rock/p/s
            // two parameters: what the player selects and what the computer selects
            
            
function playRound() {
    // make their choice case insenstive
    // make an else option at the end if user didn't put in any of the three possible answers
    // IMPORTANT: changed all of the '=s' to '===' and it started correctly using the logic of the selections and round outcomes
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            boxScore.textContent = "It's a tie! You both picked Rock"
        } else if (computerSelection === 'paper') {
            computerScore++
            boxScore.textContent = "You lost! Paper beats Rock"
        } else {
            playerScore++
            boxScore.textContent = "You won! Rock beats Scissors!"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            boxScore.textContent = "It's a tie! You both picked Paper"
        } else if (computerSelection === 'rock') {
            playerScore++
            boxScore.textContent = "You won! Paper beats Rock"
        } else {
            computerScore++
            boxScore.textContent = 'You lost! Scissors beats paper'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerScore++
            boxScore.textContent = 'You lost! Rock beats Scissors'
        } else if (computerSelection === 'scissors') {
            boxScore.textContent = "It's a tie! You both picked Scissors"
        } else {
            playerScore++
            boxScore.textContent = 'You won! Scissors beats paper'
        }
    } else {
        boxScore.textContent = 'You did not give a valid answer. Try again'
    };
    scoreboard.textContent = `Computer: ${computerScore}   You: ${playerScore}`;

    check();
}



        // write another function game(), that calls the playRound() function INSIDE of this that plays a 5 round game and keeps score and reports winner at the end
            // use console.log() to display the results of each round

    function game(){
        for (let i = 0; i < 10; i++) {
            // computerSelection = getComputerChoice()
            // IDEA: could create 3 separate functions that correlate with the different buttons to return the right string
            // OR i could create an event listener that comes with a function attached to it, and goes through a conditional statement
            // eneded up creating three event listeners for each button, that each came with a function
            // NEW: trying to use a WHILE loop instead of a FOR loop to be able to end the game at 5 points for either side
            
            
            //do {
            playRound();

            // console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`)
            //} while (playerScore < 5 && computerScore < 5);
        }
        if (playerScore === 5) {
            scoreboard.textContent = "You won the game! Good job!";
        } else if (computerScore === 5) {
            scoreboard.textContent = "You lost the game. Better luck next time!";
        }
        
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
    

