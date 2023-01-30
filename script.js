const secretNumber = Math.trunc(Math.random() * 30) + 1;
document.querySelector(".number").textContent = secretNumber;
let initialScore = 30;
document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guessInput").value;

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You guessed the number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "The number is too high";
    initialScore--;
    document.querySelector(".scoreNumber").textContent = initialScore;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "The number is too low";
    initialScore--;
    document.querySelector(".scoreNumber").textContent = initialScore;
  }
});
