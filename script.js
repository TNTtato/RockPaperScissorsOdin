function computerPlay() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * 3);
  let computerChoice = computerOptions[randIndex];
  return computerChoice;
}
function userPlay() {
  let userChoice = prompt("Input your choice: ");
  userChoice = userChoice.toLowerCase();
  while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("Input a correct choice: ");
  }
  return userChoice;
}
function playRound(computerChoice, userChoice) {
  let winnerRound = "";
  let compWinning = computerChoice === "rock" && userChoice === "scissors" || computerChoice === "scissors" && userChoice === "paper" || computerChoice === "paper" && userChoice === "rock";
  let tieCond = computerChoice === userChoice;
  let usWinnig = tieCond === false && compWinning === false;
  if (tieCond) {
    winnerRound = `It's a tie, computer: ${computerChoice}, you: ${userChoice}`;
  }
  if (compWinning) {
    winnerRound = `Computer wins this round, computer: ${computerChoice}, you: ${userChoice}`;
  }
  if (usWinnig) {
    winnerRound = `You win this round, computer: ${computerChoice}, you: ${userChoice}`;
  }
  return winnerRound;
}
function game() {
  
}