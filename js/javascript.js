let computerScore = 0;
let humanScore = 0;

function randomNumber () {
  let result;
  let minNumber = 1;
  let maxNumber = 3;

  result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return result;
}

function checkPrompt (choice) {
  if (choice && isNaN(Number(choice))) {
    return true;
  }

  return false;
}

function checkIfValid(choice) {
  if (!checkPrompt(choice)) {
    return false;
  }

  let choiceLowerCase = choice.toLowerCase();

  if (choiceLowerCase === "rock" || choiceLowerCase === "paper" || choiceLowerCase === "scissors") {
    return true;
  } else {
    return false;
  }
}

function playerChoiceToNum (choice) {
  if (!checkIfValid(choice)) {
    return 0;
  }
  
  let choiceLowerCase = choice.toLowerCase();
  let resultNum;

  switch (choiceLowerCase) {
    case "rock":
      resultNum = 1;
      break;
    case "paper":
      resultNum = 2;
      break;
    case "scissors":
      resultNum = 3;
  }

  return resultNum;
}


function getComputerChoice () {
  let randomNum = randomNumber();
  let computerResult = randomNum;

  //1 = rock || 2 = paper || 3 = scissors

  return computerResult;
}

function getHumanChoice () {
  let humanResult = prompt("Pick rock, paper or scissors:");

  while (!checkIfValid(humanResult)) {
    humanResult = prompt("Only Rock, Paper or Scissors al valid inputs:");
  }

  humanResult = humanResult.toLowerCase();
  let numHumanResult = playerChoiceToNum(humanResult);

  return numHumanResult;
}

function getWinner (humanChoice, computerChoice) {
  switch (humanChoice) {
    case 1:
      if (computerChoice === 1) {
        console.log("It's a draw!");
        console.log(`Human: ${humanScore} - Computer ${computerScore}`);

      } else if (computerChoice === 2) {
        console.log("You lost...");
        console.log(`Human: ${humanScore} - Computer ${++computerScore}`);

      } else if (computerChoice === 3) {
        console.log("You won!");
        console.log(`Human: ${++humanScore} - Computer ${computerScore}`);
      }
      break;

    case 2:
      if (computerChoice === 1) {
        console.log("You won!");
        console.log(`Human: ${++humanScore} - Computer ${computerScore}`);

      } else if (computerChoice === 2) {
        console.log("It's a draw!");
        console.log(`Human: ${humanScore} - Computer ${computerScore}`);

      } else if (computerChoice === 3) {
        console.log("You lost...");
        console.log(`Human: ${humanScore} - Computer ${++computerScore}`);
      }
      break;

    case 3:
      if (computerChoice === 1) {
        console.log("You lost...");
        console.log(`Human: ${humanScore} - Computer ${++computerScore}`);

      } else if (computerChoice === 2) {
        console.log("You won!");
        console.log(`Human: ${++humanScore} - Computer ${computerScore}`);

      } else if (computerChoice === 3) {
        console.log("It's a draw!");
        console.log(`Human: ${humanScore} - Computer ${computerScore}`);
      }
  }
}

function playRound (humanScore, computerScore) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log(`The human choice is ${humanChoice}`);
  console.log(`The computer choice is ${computerChoice}`);

  getWinner(humanChoice, computerChoice);

}

function playGame () {

  for (let i = 1; i <= 5; i++) {
    playRound();
  }

  console.log(`The final score is:\nHuman: ${humanScore} - Computer: ${computerScore}`);
}

playGame();
