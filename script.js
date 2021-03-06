'use strict';

let secretNumber = Math.trunc(Math.random() * 500) + 1;
let score = 500;
let highScore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No Numberππ');
  } else if (guess === secretNumber) {
    displayMessage('CORRECT NUMBERπππ');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'THE NUMBER IS  TOO HIGH ππ'
          : 'THE NUMBER IS  TOO LOWππ'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST THE GAMEππ');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 500;
  document.querySelector('.score').textContent = 500;

  secretNumber = Math.trunc(Math.random() * 500) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
