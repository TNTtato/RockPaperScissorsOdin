function computerPlay() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randIndex = Math.floor(Math.random() * 3);
  let computerChoice = computerOptions[randIndex];
  return computerChoice;
}
/*
function userPlay() {
  let userChoice = prompt("Input your choice: ");
  let lowerChoice = userChoice.toLowerCase();
  while (lowerChoice !== "rock" && lowerChoice !== "paper" && lowerChoice !== "scissors") {
    userChoice = prompt("Input a correct choice: ");
    lowerChoice = userChoice.toLowerCase();
  }
  return lowerChoice;
}*/
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
/*
function game(computer, human) {
  let counterComputer = 0,
    counterUser = 0;
    let compSel = computer;
    let userSel = human;
    let roundResult = playRound(compSel, userSel);
    let condWinnig = roundResult.charAt(0);
    if (condWinnig === "C") {
      counterComputer++;
    }
    if (condWinnig === "Y") {
      counterUser++;
    }
    console.log(roundResult);
    if (counterComputer >= 5) {
      console.log('computer won');
    }
    if (counterUser >= 5) {
      console.log('user won');
    }
}

*/
/*
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener('click', function() {
  let userChoice = 'rock';
  let round = playRound(computerPlay(), userChoice);
  console.log(round);
});
paper.addEventListener('click', function() {
  let userChoice = 'paper';
  let round = playRound(computerPlay(), userChoice);
  console.log(round);
});
scissors.addEventListener('click', function() {
  let userChoice = 'scissors';
  let round = playRound(computerPlay(), userChoice);
  console.log(round);
});
*/
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