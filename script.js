let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! Both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
  }

  document.getElementById("result").textContent = result;
  updateScore();
  checkWinner();
}

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5) {
    document.getElementById("result").textContent =
      "Congratulations! You are the winner!";
    disableButtons();
  } else if (computerScore === 5) {
    document.getElementById("result").textContent =
      "Computer wins! Better luck next time!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));
