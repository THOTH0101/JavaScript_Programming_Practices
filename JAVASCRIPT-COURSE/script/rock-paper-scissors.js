const dialog = document.querySelector('.js-dialog');

const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

updateScoreElement();

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
    dialog.innerHTML = '';
  } else if (event.key === 'p') {
    playGame('paper');
    dialog.innerHTML = '';
  } else if (event.key === 's') {
    playGame('scissors');
    dialog.innerHTML = '';
  } else if (event.key === 'a') {
    autoPlay();
    dialog.innerHTML = '';
  } else if (event.key === 'Backspace') {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  }
});

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  dialog.innerHTML = '';
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  dialog.innerHTML = '';
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  dialog.innerHTML = '';
  });

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetConfirmation();
  });

const autoPlayButton = document.querySelector('.js-auto-play-button');

autoPlayButton.addEventListener('click', () => {
    autoPlay();
    dialog.innerHTML = '';
  });

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      playGame(pickComputerMove());
    }, 1000);

    
    autoPlayButton.innerHTML = 'Stop Playing';

    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    autoPlayButton.innerHTML = 'Auto Play';
    isAutoPlaying = false;
  }
}

function resetConfirmation() {
  dialog.innerHTML = `
  Are you sure you want to reset score?
  <button class="comfirmation-button js-yes-reset">Yes</button>
  <button class="comfirmation-button js-no-reset">No</button>
  `;

  document.querySelector('.js-yes-reset')
  .addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    dialog.innerHTML = '';
  });

  document.querySelector('.js-no-reset')
    .addEventListener('click', () => {
      dialog.innerHTML = '';
    });
}

function playGame(playerMove) {
  let computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'rock') {
    if(computerMove === 'scissors') {
      result = 'You win.';
    } else if(computerMove === 'paper') {
      result = 'You lose.';
    } else if(computerMove === 'rock') {
      result = 'Tie.';
    }
  }
  
  else if(playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You win.';
    } else if(computerMove === 'scissors') {
      result = 'You lose.';
    } else if(computerMove === 'paper') {
      result = 'Tie.';
    }
  }
  
  else if(playerMove === 'scissors') {
    if(computerMove === 'paper') {
      result = 'You win.';
    } else if(computerMove === 'rock') {
      result = 'You lose.';
    } else if(computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  if(result === 'You win.') {
    score.wins += 1;
  } else if(result === 'You lose.') {
    score.losses += 1;
  } else if(result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
  let randomNumber = Math.random();
  
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}