function computerPlay() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * 3);
  let computerChoice = computerOptions[randIndex];
  return computerChoice;
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

const choices = document.querySelectorAll('.choice');
let contUser = 0;
let contComp = 0;
choices.forEach(choice => {
  choice.addEventListener('click', function() {
    let userChoice = choice.id;
    let round = playRound(computerPlay(), userChoice);
    if (round.charAt(0) === "C") {
      contComp++;
    }
    if (round.charAt(0) === "Y") {
      contUser++;
    }
    console.log(round);
    console.log(`user: ${contUser}, comp: ${contComp}`);
    if (contUser >= 5) {
      console.log(`User won`);
    } else if(contComp >= 5) {
      console.log(`Computer won`);
    }
});
});