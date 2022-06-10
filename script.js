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
    displayMessage('No Number😞😞');
  } else if (guess === secretNumber) {
    displayMessage('CORRECT NUMBER👌👌👌');
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
          ? 'THE NUMBER IS  TOO HIGH 😞😞'
          : 'THE NUMBER IS  TOO LOW😞😞'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST THE GAME😞😞');
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
