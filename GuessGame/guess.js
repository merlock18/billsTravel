// select DOM elements
const resetButton = document.getElementById("resetButton");
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");
const currentScore = document.getElementById("currentScore");
const highScore = document.getElementById("highScore");
const playButton = document.getElementById("playButton");
const secretNumberElement = document.getElementById("secretNumberValue");
const errorMessage = document.getElementById("errorMessage");

// check if the local storage is supported
if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
  console.log(localStorage.clickcount);
} else {
  localStorage.clickcount = 1;
  console.log(localStorage.clickcount);
}

// initialize variables
let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;
let historyHighScore = 0;

// helper function to check if a number is valid
function isValidNumber(num) {
  return typeof num === "number" && num >= 1 && num <= 100;
}

// helper function to check if a guess is correct
function isCorrectGuess(guess) {
  return guess === secretNumber;
}

// helper function to update the score and handle game over
function updateScore() {
  // decrement the score
  score--;

  // update the message
  message.textContent = `You have ${score} guesses left`;

  // update the current score element
  currentScore.textContent = score;

  // if the score is zero, the game is over
  if (score === 0) {
    // show the secret number
    secretNumberElement.textContent = `The secret number was ${secretNumber}`;
    secretNumberElement.style.display = "block";

    // update the message
    message.textContent = "Sorry, game is over";
    message.classList.add("incorrect");

    // disable the input field and the check button
    guessInput.disabled = true;
    checkButton.disabled = true;

    // update the history high score if the current score is higher
    if (historyHighScore < score) {
      historyHighScore = score;
      highScore.textContent = historyHighScore;
    }
  }
}

// event listener for the user input
guessInput.addEventListener("input", function () {
  // console.log("input changed: ", guessInput.value);
  // console.log("Is Number: ", Number.parseInt(guessInput.value) );
  // isValidNumber(guessInput.value);
  if (!isValidNumber(Number.parseInt(guessInput.value))) {
    console.log("not a valid number");
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

// event listener for the check button
checkButton.addEventListener("click", function () {
  console.log("check button clicked");
  // get the guess from the input field
  const guess = Number(guessInput.value);

  // clear the input field
  guessInput.value = "";

  // check if the guess is valid
  if (!isValidNumber(guess)) {
    // show an error message if the guess is not valid
    message.textContent = "Please enter a valid number between 1 and 100";
    message.classList.add("incorrect");
  } else {
    // check if the guess is correct
    if (isCorrectGuess(guess)) {
      // update the message and the background color if the guess is correct
      message.textContent = "Congratulations, you guessed the secret number!";
      message.classList.add("correct");
      document.body.style.backgroundColor = "green";

      // show the secret number
      secretNumberElement.textContent = secretNumber;
      secretNumberElement.style.display = "block";

      // update the history high score if the current score is higher
      if (historyHighScore < score) {
        historyHighScore = score;
        highScore.textContent = historyHighScore;
      }
    } else {
      // update the message and the score if the guess is incorrect
      if (guess < secretNumber) {
        message.textContent = `Your guess is too low, try again!`;
      } else {
        message.textContent = `Your guess is too high, try again!`;
      }
      message.classList.add("incorrect");
      updateScore();
    }
  }
});

// event listener for the play button
playButton.addEventListener("click", function () {
  // reset the secret number and the score
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;

  //// reset the message, the input field, and the CSS styles
  message.textContent = "Guess a number between 1 and 100";
  message.classList.remove("correct", "incorrect");
  document.body.style.backgroundColor = "";
  guessInput.disabled = false;
  checkButton.disabled = false;
  guessInput.value = "";

  // hide the secret number
  secretNumberElement.style.display = "none";

  // update the current score element
  currentScore.textContent = score;
});

// event listener for the reset button
restButton.addEventListener("click", function () {
  // reset the secret number and the score
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;

  //// reset the message, the input field, and the CSS styles
  message.textContent = "Guess a number between 1 and 100";
  message.classList.remove("correct", "incorrect");
  document.body.style.backgroundColor = "";
  guessInput.disabled = false;
  checkButton.disabled = false;
  guessInput.value = "";

  // hide the secret number
  secretNumberElement.style.display = "none";

  // update the current score element
  currentScore.textContent = score;
});

// initialize the game
message.textContent = "Guess a number between 1 and 100";
currentScore.textContent = score;
highScore.textContent = historyHighScore;
secretNumberElement.style.display = "none";
