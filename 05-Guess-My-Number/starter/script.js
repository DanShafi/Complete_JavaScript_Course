'use strict';

const randomNumber = Math.trunc(Math.random() * 20 + 1);
const numberToGuess = document.querySelector('.number').textContent = randomNumber;

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    const displayMsg = document.querySelector('.message');
    let score = document.querySelector('.score');
    let highScore = document.querySelector('.highscore');
    let counter = score.textContent -= 1;

    const decrement = () => {
        if(counter.textContent > 0) {
          counter;
        }
      }

    const loseGame = () => {
        if (score.textContent == 0) {
            displayMsg.textContent = '😭 You lose!'
            document.body.style.backgroundColor = "#CF4444";
        }
    }

    if (!guess) {
        displayMsg.textContent = '❌ No number!';

    } else if (guess === numberToGuess) {
        displayMsg.textContent = '🎉 Winner!';
        document.body.style.backgroundColor = "#60b347";
        highScore.textContent = score.textContent;

    } else if (guess > numberToGuess) {
        displayMsg.textContent = '👆🏻 Too High!';
        decrement();
        loseGame();
    
    } else if (guess < numberToGuess) {
        displayMsg.textContent = '👇🏼 Too Low!';
        decrement();
        loseGame();
    }
});

const reloadBtn = document.querySelector('.again');
reloadBtn.addEventListener('click', function() {
    location.reload();
})

