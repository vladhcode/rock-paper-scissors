// Создайте новую функцию с именем getComputerChoice.
// Напишите код так, чтобы getComputerChoiceслучайным образом получалось return одно из следующих строковых значений: «камень», «бумага» или «ножницы».
// Подсказка : метод Math.random возвращает случайное число, которое больше или равно 0, но меньше 1. Подумайте, как вы можете использовать это для условного возврата одного из нескольких вариантов.

let humanChoice = getHumanChoice(
  prompt("Please pick Rock,Paper or Scissors: ")
);
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
  switch (computerChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return getComputerChoice(Math.floor(Math.random() * 3 + 1));
  }
}

// Создайте новую функцию с именем getHumanChoice.
// Напишите код так, чтобы он getHumanChoice возвращал один из допустимых вариантов в зависимости от того, что вводит пользователь.
// Подсказка : используйте метод подсказки , чтобы получить вводимые пользователем данные.
// Проверьте, что возвращает ваша функция, используя console.log.

function getHumanChoice(humanChoice) {
  if (humanChoice === "Rock") {
    console.log("You pick rock!");
  } else if (humanChoice === "Paper") {
    console.log("You pick paper!");
  } else if (humanChoice === "Scissors") {
    console.log("You pick scissors!");
  } else {
    console.log("Please, pick between Rock,Paper or Scissors.");
  }
}

// Создайте новую функцию с именем playRound.
// Определите два параметра для playRound: humanChoiceи computerChoice. Используйте эти два параметра, чтобы принять выбор человека и компьютера в качестве аргументов.
// Сделайте параметр вашей функции humanChoiceнечувствительным к регистру, чтобы игроки могли вводить слова «rock», «ROCK», «RocK» или другие варианты.
// Запишите код своей playRoundфункции в console.logстроковое значение, обозначающее победителя раунда, например: «Вы проиграли! Бумага побеждает камень».
// Увеличьте переменную humanScoreили computerScoreв зависимости от победителя раунда.

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win!");
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win!");
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win");
  } else {
    console.log("You lose!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
