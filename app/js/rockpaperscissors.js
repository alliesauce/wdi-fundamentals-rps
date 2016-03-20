////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
    // Write an expression that operates on a variable called `move`
    // If a 'move' has a value, your expression should evaluate to that value.
    // However, if 'move' is not specified / i snull, your expression should equal 'getInput()'.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'rock' && computerMove === 'scissors') {
    	winner = "player";
    } else if (playerMove === 'rock' && computerMove === 'paper') {
    	winner = "computer";
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
    	winner = "computer";
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
    	winner = "player";
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
    	winner = "computer";
    } else if (playerMove === 'paper' && computerMove === 'rock') {
    	winner = "player";
    } else if (playerMove === computerMove) {
    	winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // had to make wins for 3 points and tie for one points so it didn't keep going, not sure what problem is.
    while (playerWins < 5 && computerWins < 5) {
    	var winner = getWinner(playerMove,computerMove);
    	var playerMove = getPlayerMove();
    	var computerMove = getComputerMove();
    	if (winner === 'player') {
    		playerWins += 3;
    		console.log(winner + ' won this round.');
    		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    		console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    	} else if (winner === 'computer') {
    		computerWins += 3;
    		console.log(winner + ' won this round.');
    		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    		console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    	} else {
    		playerWins += 1;
    		computerWins += 1;
    		console.log("This round is a " + winner);
    		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    		console.log('The score remains ' + playerWins + ' to ' + computerWins);
    	}
    }
    return [playerWins, computerWins];
}
playToFive(5);
