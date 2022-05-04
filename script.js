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

function getMovesIcons(compC, usC) {
  const moveComp = document.getElementById(compC).cloneNode(true);
  moveComp.setAttribute('id', 'compMove');
  moveComp.setAttribute('class', 'chosen');
  const moveUser = document.getElementById(usC).cloneNode(true);
  moveUser.setAttribute('id', 'usC');
  moveUser.setAttribute('class', 'chosen');

  const showIconChoices = document.createElement('div');
  const pExpl = document.createElement('p');
  const pExplText = document.createTextNode(`computer's vs user's`);
  showIconChoices.setAttribute('class', 'choices-icons');
  pExpl.appendChild(pExplText);
  showIconChoices.appendChild(moveComp);
  showIconChoices.appendChild(pExpl);
  showIconChoices.appendChild(moveUser);
  return showIconChoices;
}

function showWinnerRound(textRound, count, compC, usC) {
  const pWin = document.createElement('p');
  const nodeWinText = document.createTextNode(textRound);
  const nodeContGame = document.createTextNode('.    Count----> ' + count);
  const roundTitle = document.createElement('h2');
  const titleR = document.createTextNode('Round Result');
  const resultGame = document.getElementById('result-game');

  const showIconChoices = getMovesIcons(compC, usC);

  resultGame.innerHTML = '';
  pWin.setAttribute('class', 'p-win');
  pWin.appendChild(nodeWinText);
  pWin.appendChild(nodeContGame);
  roundTitle.appendChild(titleR);
  resultGame.appendChild(roundTitle);

  resultGame.appendChild(showIconChoices);

  resultGame.appendChild(pWin);
}

function createNewBody(winner, count, compC, usC){
  const newBody = document.createElement('body');
  const newCont = document.createElement('div');
  const gameOverTitle = document.createElement('h1');
  const titleText = document.createTextNode('GAME OVER');
  const pOver = document.createElement('p');
  const pText = document.createTextNode(`${winner} and the total count was ${count}`);
  const retry = document.createElement('div');

  retry.innerHTML = '<span class=reload>&#x21bb;</span>';
  retry.addEventListener('click', () => location.reload());

  const showIconChoices = getMovesIcons(compC, usC);

  document.body = newBody;
  newBody.setAttribute('class', 'final');
  newCont.setAttribute('class', 'game-over');
  pOver.setAttribute('class', 'p-over');
  gameOverTitle.appendChild(titleText);
  pOver.appendChild(pText);
  newCont.appendChild(gameOverTitle);
  newCont.appendChild(showIconChoices);
  newCont.appendChild(pOver);
  newBody.appendChild(newCont);
  newBody.appendChild(retry);
}

choices.forEach(choice => {
  choice.addEventListener('click', function() {
    let userChoice = choice.id;
    let compChoice = computerPlay()
    let round = playRound(compChoice, userChoice);
    if (round.charAt(0) === "C") {
      contComp++;
    }
    if (round.charAt(0) === "Y") {
      contUser++;
    }
    console.log(round);
    let contT = `user: ${contUser}, comp: ${contComp}`;
    showWinnerRound(round, contT, compChoice, userChoice);
    console.log(contT);
    if (contUser === 5) {
      console.log(`User won`);
      createNewBody(`User won`, contT, compChoice, userChoice);
    } else if(contComp === 5) {
      console.log(`Computer won`);
      createNewBody(`Computer won`, contT, compChoice, userChoice);
    }
});
});