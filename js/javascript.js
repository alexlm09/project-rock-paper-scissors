function randomNumber () {
  let result;
  let minNumber = 1;
  let maxNumber = 3;

  result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return result;
}

function getComputerChoice () {
  let randomNum = randomNumber();
  let computerResult;

  switch (randomNum) {
    case 1:
      computerResult = "Rock";
      break;
    case 2:
      computerResult = "Paper";
      break;
    case 3:
      computerResult = "Scissors";
  }

  return computerResult;
}


