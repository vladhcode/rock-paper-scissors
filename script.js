function getHumanChoice() {
  let humanChoice = prompt("Please pick Rock,Paper or Scissors: ");
  if (humanChoice === "Rock") {
    console.log("You pick rock!");
    return "Rock";
  } else if (humanChoice === "Paper") {
    console.log("You pick paper!");
    return "Paper";
  } else if (humanChoice === "Scissors") {
    console.log("You pick scissors!");
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log(`You win round, your socre is ${humanScore}`);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    console.log(`You lost round, computer score is ${computerScore}`);
  } else {
    console.log("It's a DRAW!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
