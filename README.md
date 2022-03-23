# RockPaperScissorsOdin
Problem:
We are going to play RPS game against the computer.
The whole game will be played in the console
The computer make a random decision and choose beetwen three options available, those being, Rock, Paper and Scissors.
There must be user input, and will be case sensitive
The game will be five rounds long

Plan:
--define function computerPlay():
  --define an array of three options ["rock", "paper", "scissor"], assign it to computerOptions array
  --generate a random number greater or equal to 0, and lower to 3, assign it to randIndex variable
  --get the element of computerOptions in the position randIndex, assign it to computerChoice variable
  --return computerChoice

--define function userPlay():
  --input from the user with a prompt, assign it to userChoice
  --make input lowerCase, assign it to userChoice
  --while input doesn't match the options: input again
  --if it matches return userChoice

--define function playRound(computerChoice, userChoice):
  --define variable winnerRound = "It's a tie"
  --in conditionals make winnerRound = "Computer Wins..." or winnerRound = "You win..."
  --return winnerRound

--define funtion game():
  --define counterComputer and counterUser, set both to 0
  --loop for 5 rounds and make the following
    --call computerPlay() and assign it to compSel
    --call userPlay() and assign it to userSel
    --call playRound, pass it compSel and userSel, and assign it to roundResult
    --if computer wins counterComputer++
    --if user wins counterUser++
    --output in console roundResult
  --define gameResult = "The game it's a tie"
  --if counterComputer > counterUsuer and counterComputer not equal to counterUsuer in console, gameResult = "Computer won the game"
  --else gameResult = "You won the game, congrats"
  --in console print gameResult

--call game()
