// select DOM elements
const resetButton = document.getElementById("resetButton");
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");
const currentScore = document.getElementById("currentScore");
const highScore = document.getElementById("highScore");
const winsecretNumberElement = document.getElementById("winsecretNumber");
const lossNumberElement = document.getElementById("lossNumberElement");
const errorMessage = document.getElementById("errorMessage");
const enterNumber = document.getElementById("enterNumber");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const playBtn = document.getElementById("playBtn");
const history = document.getElementById("guessHistory");

// check if the local storage is supported
if (localStorage.highScore) {
  localStorage.highScore = Number(localStorage.highScore);
  console.log(localStorage.highScore);
}

// initialize variables
let secretNumber = Math.floor(Math.random() * 100) + 1;

let score = 10;

let historyHighScore = 0;
const guessHistory = [];

// helper function to check if a number is valid
function isValidNumber(num) {
  if (typeof num === "number" && num >= 1 && num <= 100) {
    errorMessage.style.display = "none";
    return true;
  } else {
    console.log("not a valid number");
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please enter a number between 1 and 100";
    guessInput.value = "";
    return false;
  }
}

// helper function to check if a guess is correct
function isCorrectGuess(guess) {
  console("is correct guess: ", guess, secretNumber);
  return guess == secretNumber;
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
  if (score == 0) {
    // show the secret number
    message.textContent = `The secret number was ${secretNumber}`;

    // update the message
    message.textContent = "Sorry, game is over";
    message.classList.add("incorrect");

    // show the secret number and win message
    lossNumberElement.textContent = `My number was ${secretNumber}`;
    loss.style.display = "block";

    // hide the input field and the check button
    enterNumber.style.display = "none";
  }
}

// event listener for the user input
guessInput.addEventListener("input", function () {
  // console.log("input changed: ", guessInput.value);
  console.log("In input event listener");
  isValidNumber(Number(guessInput.value));
});

// event listener for the check button
checkButton.addEventListener("click", function () {
  console.log("check button event listener");
  // get the guess from the input field
  const guess = Number(guessInput.value);

  console.log("guess: ", guess, typeof guess);
  console.log("secret number: ", secretNumber, typeof secretNumber);

  // check if the guess is correct

  if (guess == secretNumber) {
    // update the message and the background color if the guess is correct
    // message.textContent = "Congratulations, you guessed the secret number!";
    message.textContent = `Congratulations, you guessed the secret number  ${secretNumber}!`;
    message.classList.add("correct");
    document.body.style.backgroundColor = "green";

    // hide the input field and the check button
    enterNumber.style.display = "none";

    // show the secret number and win message
    winsecretNumberElement.textContent = `${secretNumber}`;
    win.style.display = "block";

    // update the history high score if the current score is higher
    if (historyHighScore < score) {
      historyHighScore = score;
      highScore.textContent = historyHighScore;
    }
  } else {
    // update the message and the score if the guess is incorrect
    if (guess < secretNumber) {
      guessMessage.textContent = `Your guess is too low, try again!`;
    } else {
      guessMessage.textContent = `Your guess is too high, try again!`;
    }

    // add to guess history
    let li = document.createElement("li"); // create li element.
    li.innerHTML = guess; // assigning text to li using array value.
    history.appendChild(li); // append li to ul.

    // create ul element and set the attributes.
    /*
    for (i = 0; i <= guessHistory.length - 1; i++) {
      let li = document.createElement("li"); // create li element.
      li.innerHTML = guessHistory[i]; // assigning text to li using array value.
      li.setAttribute("style", "display: block;"); // remove the bullets.
      history.appendChild(li); // append li to ul.
    }
    */
    guessMessage.classList.add("incorrect");
    updateScore();
  }

  console.log("message after: ", errorMessage.textContent);
});

// event listener for the play button
resetButton.addEventListener("click", function () {
  // reset the secret number and the score
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;

  //// reset the message, the input field, and the CSS styles
  message.textContent = "Guess a number between 1 and 100";
  message.classList.remove("correct", "incorrect");
  document.body.style.backgroundColor = "";
  guessInput.value = "1";
  enterNumber.style.display = "block";
  errorMessage.style.display = "none";
  win.style.display = "none";
  guessMessage.textContent = "";
  guessMessage.style.backgroundColor = "";
  history.innerHTML = "";
  // update the current score element
  currentScore.textContent = score;
  highScore.textContent = historyHighScore;
});

tryAgainBtn.addEventListener("click", function () {
  // reset the secret number and the score
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;

  //// reset the message, the input field, and the CSS styles
  message.style.display = "block";
  message.textContent = "Guess a number between 1 and 100";
  message.classList.remove("correct", "incorrect");
  document.body.style.backgroundColor = "";
  enterNumber.style.display = "block";
  loss.style.display = "none";
  guessInput.value = "1";

  // update the current score element
  currentScore.textContent = score;
  highScore.textContent = historyHighScore;
});

playBtn.addEventListener("click", function () {
  // reset the secret number and the score
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 10;

  //// reset the message, the input field, and the CSS styles
  message.style.display = "block";
  message.textContent = "Guess a number between 1 and 100";
  message.classList.remove("correct", "incorrect");
  document.body.style.backgroundColor = "";
  enterNumber.style.display = "block";
  loss.style.display = "none";
  guessInput.value = "1";
  win.style.display = "none";

  // update the current score element
  currentScore.textContent = score;
  highScore.textContent = historyHighScore;
});

// initialize the game
message.textContent = "Guess a number between 1 and 100";
currentScore.textContent = score;
highScore.textContent = historyHighScore;
