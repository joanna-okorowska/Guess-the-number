let secretNumber = Math.trunc(Math.random() * 30) + 1;
// document.querySelector(".number").textContent = secretNumber;
let score = 30;
let highscore = 0;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guessInput").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed the number!";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscoreNumber").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "The number is too high";
      score--;
      document.querySelector(".scoreNumber").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost!";
      document.querySelector(".scoreNumber").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "The number is too low";
      score--;
      document.querySelector(".scoreNumber").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost!";
      document.querySelector(".scoreNumber").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  score = 30;
  document.querySelector(".scoreNumber").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guessInput").value = "";
  document.querySelector(".message").textContent = "Your guess";
});
