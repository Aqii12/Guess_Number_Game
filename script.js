
// let randomNumber = Math.floor(Math.random() * 15) + 1;
// let guesses = [];
// let numberOfGuesses = 0;
// const maxGuesses = 3; // Maximum allowed guesses

// // Audio element for success sound
// const successSound = document.getElementById('successSound');

// function checkGuess() {
//     const guessInput = document.getElementById('guessInput');
//     const message = document.getElementById('message');
//     const guessedNumbers = document.getElementById('guessedNumbers');
//     const numberOfGuessesElement = document.getElementById('numberOfGuesses');

//     const userGuess = parseInt(guessInput.value);
    
//     // Validate user input
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 15) {
//         message.textContent = 'Please enter a valid number between 1 and 15.';
//         return;
//     }

//     guesses.push(userGuess);
//     numberOfGuesses++;

//     // Check if the guess is correct
//     if (userGuess === randomNumber) {
//         message.textContent = 'Correct! You guessed the number!';
//         successSound.play(); // Play the success sound when the guess is correct
//         guessInput.disabled = true;
//     } else if (numberOfGuesses >= maxGuesses) {
//         message.textContent = `Game over! The correct number was ${randomNumber}.`;
//         guessInput.disabled = true; // Disable input after 3 tries
//     } else if (userGuess > randomNumber) {
//         message.textContent = 'Your guess is too high.';
//     } else {
//         message.textContent = 'Your guess is too low.';
//     }

//     // Update the guessed numbers and number of guesses
//     guessedNumbers.textContent = `Guessed numbers: ${guesses.join(', ')}`;
//     numberOfGuessesElement.textContent = `No. of guesses: ${numberOfGuesses}`;

//     // Clear the input for the next guess
//     guessInput.value = '';
// }





let randomNumber;
let guesses = [];
let numberOfGuesses = 0;
let maxGuesses;
let rangeMax;
let isGameActive = false;

// Audio element for success sound
const successSound = document.getElementById('successSound');

function setDifficulty(level) {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    if (level === 'easy') {
        rangeMax = 10;
        maxGuesses = 5;
        message.textContent = "Easy Mode: Guess a number between 1 and 10.";
    } else if (level === 'medium') {
        rangeMax = 15;
        maxGuesses = 4;
        message.textContent = "Medium Mode: Guess a number between 1 and 15.";
    } else if (level === 'hard') {
        rangeMax = 20;
        maxGuesses = 3;
        message.textContent = "Hard Mode: Guess a number between 1 and 20.";
    }

    randomNumber = Math.floor(Math.random() * rangeMax) + 1;
    guesses = [];
    numberOfGuesses = 0;
    isGameActive = true;

    // Enable input and button for guessing
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = '';
    document.getElementById('guessedNumbers').textContent = '';
    document.getElementById('numberOfGuesses').textContent = '';
}

function checkGuess() {
    if (!isGameActive) return; // Exit if no game is active
    
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guessedNumbers = document.getElementById('guessedNumbers');
    const numberOfGuessesElement = document.getElementById('numberOfGuesses');

    const userGuess = parseInt(guessInput.value);

    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > rangeMax) {
        message.textContent = `Please enter a valid number between 1 and ${rangeMax}.`;
        return;
    }

    guesses.push(userGuess);
    numberOfGuesses++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = 'Correct! You guessed the number!';
        successSound.play();
        isGameActive = false;
        guessInput.disabled = true;
        document.getElementById('guessButton').disabled = true;
    } else if (numberOfGuesses >= maxGuesses) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        guessInput.disabled = true;
        document.getElementById('guessButton').disabled = true;
        isGameActive = false;
    } else if (userGuess > randomNumber) {
        message.textContent = 'Your guess is too high.';
    } else {
        message.textContent = 'Your guess is too low.';
    }

    // Update the guessed numbers and number of guesses
    guessedNumbers.textContent = `Guessed numbers: ${guesses.join(', ')}`;
    numberOfGuessesElement.textContent = `No. of guesses: ${numberOfGuesses}`;

    // Clear the input for the next guess
    guessInput.value = '';
}
