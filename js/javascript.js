function randomNumber () {
  let result;
  let minNumber = 1;
  let maxNumber = 3;

  result = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return result;
}

