function computerPlay() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * 3);
  let computerChoice = computerOptions[randIndex];
  return computerChoice;
}
function userPlay() {
  let userChoice = prompt("Input your choice: ");
  let lowerChoice = userChoice.toLowerCase();
  while (lowerChoice !== "rock" && lowerChoice !== "paper" && lowerChoice !== "scissors") {
    userChoice = prompt("Input a correct choice: ");
    lowerChoice = userChoice.toLowerCase();
  }
  return lowerChoice;
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
  let counterComputer = 0,
      counterUser = 0;
  for(let i = 0; i < 5 ; i++) {
    let compSel = computerPlay();
    let userSel = userPlay();
    let roundResult = playRound(compSel, userSel);
    let condWinnig = roundResult.charAt(0);
    if (condWinnig === "C") {
      counterComputer++;
    }
    if (condWinnig === "Y") {
      counterUser++;
    }
    console.log(roundResult);
  }
  let gameResult = "";
  if (counterComputer === counterUser) {
    gameResult = `The game it's a tie computer: ${counterComputer}, 
                    You: ${counterUser}`;
  } else if (counterComputer > counterUser) {
    gameResult = `Computer wins the game computer: ${counterComputer}
                  You: ${counterUser}`;
  } else {
    gameResult = `You win the game, congrats computer: ${counterComputer}
    You: ${counterUser}`;
  }
  console.log(gameResult);
}
game();