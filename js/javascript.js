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
  let computerResult;

  switch (randomNum) {
    case 1:
      computerResult = "rock";
      break;
    case 2:
      computerResult = "paper";
      break;
    case 3:
      computerResult = "scissors";
  }

  return computerResult;
}

function getHumanChoice () {
  let humanResult = prompt("Pick rock, paper or scissors:");

}


