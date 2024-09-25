// let randomNumber;
// let guesses = [];
// let numberOfGuesses = 0;
// let maxGuesses;
// let rangeMax;
// let isGameActive = false;

// // Audio element for success sound
// const successSound = document.getElementById('successSound');

// // Function to set the difficulty level
// function setDifficulty(level) {
//     const guessInput = document.getElementById('guessInput');
//     const guessButton = document.getElementById('guessButton');
//     const message = document.getElementById('message');

//     // Set difficulty levels
//     if (level === 'easy') {
//         rangeMax = 10;
//         maxGuesses = 5;
//         message.textContent = "Easy Mode: Guess a number between 1 and 10.";
//     } else if (level === 'medium') {
//         rangeMax = 15;
//         maxGuesses = 4;
//         message.textContent = "Medium Mode: Guess a number between 1 and 15.";
//     } else if (level === 'hard') {
//         rangeMax = 20;
//         maxGuesses = 3;
//         message.textContent = "Hard Mode: Guess a number between 1 and 20.";
//     }

//     // Set min and max for the input field based on difficulty
//     guessInput.min = 1;
//     guessInput.max = rangeMax;
//     randomNumber = Math.floor(Math.random() * rangeMax) + 1;
//     guesses = [];
//     numberOfGuesses = 0;
//     isGameActive = true;

//     // Enable input and button for guessing
//     guessInput.disabled = false;
//     guessButton.disabled = false;
//     guessInput.value = '';
//     document.getElementById('guessedNumbers').textContent = '';
//     document.getElementById('numberOfGuesses').textContent = '';

//     // Add event listener to prevent typing values beyond the allowed max
//     guessInput.addEventListener('input', () => {
//         if (parseInt(guessInput.value) > rangeMax) {
//             guessInput.value = rangeMax; // Restrict input to max value
//         }
//     });
// }

// // Function to check the user's guess
// function checkGuess() {
//     if (!isGameActive) return; // Exit if no game is active
    
//     const guessInput = document.getElementById('guessInput');
//     const message = document.getElementById('message');
//     const guessedNumbers = document.getElementById('guessedNumbers');
//     const numberOfGuessesElement = document.getElementById('numberOfGuesses');

//     const userGuess = parseInt(guessInput.value);

//     // Validate user input
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > rangeMax) {
//         message.textContent = `Please enter a valid number between 1 and ${rangeMax}.`;
//         return;
//     }

//     guesses.push(userGuess);
//     numberOfGuesses++;

//     // Check if the guess is correct
//     if (userGuess === randomNumber) {
//         message.textContent = 'Correct! You guessed the number!';
//         successSound.play();
//         isGameActive = false;
//         guessInput.disabled = true;
//         document.getElementById('guessButton').disabled = true;
//     } else if (numberOfGuesses >= maxGuesses) {
//         message.textContent = `Game over! The correct number was ${randomNumber}.`;
//         guessInput.disabled = true;
//         document.getElementById('guessButton').disabled = true;
//         isGameActive = false;
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



// let randomNumber;
// let guesses = [];
// let numberOfGuesses = 0;
// let maxGuesses;
// let rangeMax;
// let isGameActive = false;

// // Audio element for success sound
// const successSound = document.getElementById('successSound');
// // Video and audio elements for wrong answer
// const wrongAnswerVideo = document.getElementById('wrongAnswerVideo');
// const wrongAnswerAudio = document.getElementById('wrongAnswerAudio');

// function setDifficulty(level) {
//     const guessInput = document.getElementById('guessInput');
//     const guessButton = document.getElementById('guessButton');
//     const message = document.getElementById('message');

//     // Set difficulty levels
//     if (level === 'easy') {
//         rangeMax = 10;
//         maxGuesses = 5;
//         message.textContent = "Easy Mode: Guess a number between 1 and 10.";
//     } else if (level === 'medium') {
//         rangeMax = 15;
//         maxGuesses = 4;
//         message.textContent = "Medium Mode: Guess a number between 1 and 15.";
//     } else if (level === 'hard') {
//         rangeMax = 20;
//         maxGuesses = 3;
//         message.textContent = "Hard Mode: Guess a number between 1 and 20.";
//     }

//     // Set min and max for the input field based on difficulty
//     guessInput.min = 1;
//     guessInput.max = rangeMax;
//     randomNumber = Math.floor(Math.random() * rangeMax) + 1;
//     guesses = [];
//     numberOfGuesses = 0;
//     isGameActive = true;

//     // Enable input and button for guessing
//     guessInput.disabled = false;
//     guessButton.disabled = false;
//     guessInput.value = '';
//     document.getElementById('guessedNumbers').textContent = '';
//     document.getElementById('numberOfGuesses').textContent = '';

//     // Hide video and audio if game is restarted
//     wrongAnswerVideo.style.display = 'none';
//     wrongAnswerVideo.pause();
//     wrongAnswerAudio.pause();
//     wrongAnswerAudio.currentTime = 0; // Reset audio to the beginning
//     wrongAnswerVideo.currentTime = 0; // Reset video to the beginning
// }

// function checkGuess() {
//     if (!isGameActive) return; // Exit if no game is active
    
//     const guessInput = document.getElementById('guessInput');
//     const message = document.getElementById('message');
//     const guessedNumbers = document.getElementById('guessedNumbers');
//     const numberOfGuessesElement = document.getElementById('numberOfGuesses');

//     const userGuess = parseInt(guessInput.value);

//     // Validate user input
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > rangeMax) {
//         message.textContent = `Please enter a valid number between 1 and ${rangeMax}.`;
//         return;
//     }

//     guesses.push(userGuess);
//     numberOfGuesses++;

//     // Check if the guess is correct
//     if (userGuess === randomNumber) {
//         message.textContent = 'Correct! You guessed the number!';
//         successSound.play();
//         isGameActive = false;
//         guessInput.disabled = true;
//         document.getElementById('guessButton').disabled = true;
//     } else if (numberOfGuesses >= maxGuesses) {
//         message.textContent = `Game over! The correct number was ${randomNumber}.`;

//         // Play background video and audio if the user loses after the last guess
//         wrongAnswerVideo.style.display = 'block';
//         wrongAnswerVideo.play();
//         wrongAnswerAudio.play(); // Play both video and audio together

//         guessInput.disabled = true;
//         document.getElementById('guessButton').disabled = true;
//         isGameActive = false;
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
// Video and audio elements for wrong answer
const wrongAnswerVideo = document.getElementById('wrongAnswerVideo');
const wrongAnswerAudio = document.getElementById('wrongAnswerAudio');

function setDifficulty(level) {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');

    // Set difficulty levels
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

    // Set min and max for the input field based on difficulty
    guessInput.min = 1;
    guessInput.max = rangeMax;
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

    // Hide video and audio if game is restarted
    wrongAnswerVideo.style.display = 'none';
    wrongAnswerVideo.pause();
    wrongAnswerAudio.pause();
    wrongAnswerAudio.currentTime = 0; // Reset audio to the beginning
    wrongAnswerVideo.currentTime = 0; // Reset video to the beginning
}

// Validate input to allow only numbers and restrict based on difficulty level
function validateInput(event) {
    const guessInput = document.getElementById('guessInput');
    
    // Prevent non-numeric input
    if (event.key < '0' || event.key > '9') {
        event.preventDefault();
    }

    // Restrict numbers above the current difficulty range
    const currentValue = parseInt(guessInput.value + event.key); // Predict next value with key press
    if (currentValue > rangeMax) {
        event.preventDefault();
    }
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

        // Play background video and audio if the user loses after the last guess
        wrongAnswerVideo.style.display = 'block';
        wrongAnswerVideo.play();
        wrongAnswerAudio.play(); // Play both video and audio together

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

// Event listener for input validation
document.getElementById('guessInput').addEventListener('keypress', validateInput);
