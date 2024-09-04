let randomNumber;
let remainingGuesses;
let gameOver = false;

function startNewGame() {
    randomNumber = Math.floor(Math.random() * 101); // Number between 0 and 100
    remainingGuesses = 15;
    gameOver = false;

    document.getElementById('result-message').textContent = '';
    document.getElementById('score-message').textContent = `Guesses Remaining: ${remainingGuesses}`;
    document.getElementById('guess-input').value = '';
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('reset-btn').style.display = 'none';
}

document.getElementById('submit-btn').addEventListener('click', function() {
    if (gameOver) return;

    let userGuess = parseInt(document.getElementById('guess-input').value);
    let resultMessage = document.getElementById('result-message');
    let scoreMessage = document.getElementById('score-message');

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a valid number between 0 and 100.';
        resultMessage.style.color = 'red';
        return;
    }

    remainingGuesses--;

    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number!';
        resultMessage.style.color = 'green';
        gameOver = true;
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color = 'red';
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
        resultMessage.style.color = 'red';
    }

    scoreMessage.textContent = `Guesses Remaining: ${remainingGuesses}`;

    if (remainingGuesses === 0 && userGuess !== randomNumber) {
        resultMessage.textContent = `Game Over! The correct number was ${randomNumber}.`;
        resultMessage.style.color = 'black';
        gameOver = true;
    }

    if (gameOver) {
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('reset-btn').style.display = 'inline-block';
    }
});

document.getElementById('reset-btn').addEventListener('click', function() {
    startNewGame();
});

startNewGame();

