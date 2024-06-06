function getHumanChoice() {
  let humanChoice = prompt("Please pick Rock,Paper or Scissors: ");

  if (humanChoice === null || humanChoice.trim() === "") {
    console.log("You didn't pick a valid item!");
    return "Invalid";
  }

  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock") {
    console.log("You pick Rock!");
    return "Rock";
  } else if (humanChoice === "paper") {
    console.log("You pick Paper!");
    return "Paper";
  } else if (humanChoice === "scissors") {
    console.log("You pick Scissors!");
    return "Scissors";
  } else {
    console.log("You didn't pick any item!");
    return "Ivalid";
  }
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  switch (computerChoice) {
    case 1:
      console.log("Computer pick Rock!");
      return "Rock";
    case 2:
      console.log("Computer pick Paper!");
      return "Paper";
    case 3:
      console.log("Computer pick Scissors!");
      return "Scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Ivalid") {
      console.log("Invalid choice by human, round cannot be played.");
      return;
    }

    if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore++;
      console.log(
        `You win ${humanChoice}, beats ${computerChoice} your socre is ${humanScore}`
      );
    } else if (
      (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Scissors") ||
      (humanChoice === "Scissors" && computerChoice === "Rock")
    ) {
      computerScore++;
      console.log(
        `You lost round, ${humanChoice} lose to ${computerChoice} computer score is ${computerScore}`
      );
    } else {
      console.log("It's a DRAW!");
    }
  }
  for (let i = 0; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(
      `You won the game! Final score: Human ${humanScore} - Computer ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lost the game! Final score: Human ${humanScore} - Computer ${computerScore}`
    );
  } else {
    console.log(
      `The game is a draw! Final score: Human ${humanScore} - Computer ${computerScore}`
    );
  }
}

playGame();