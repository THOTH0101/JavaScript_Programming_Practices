let timer = JSON.parse(localStorage.getItem('timer'));
let timerStart = false;
let intervalId;

const display = document.querySelector('.js-display-timer');
const startButton = document.querySelector('.js-start-button');
const resetButton = document.querySelector('.js-reset-button');

displayTimer();

startButton.addEventListener('click', () => {
        if (!timerStart) {
            startWatch();
        }
        timerCheck();
    });

resetButton.addEventListener('click', () => {
    timer = 0;
    display.innerHTML = '00:00';
});

function timerCheck() {
    if (!timerStart) {
        startButton.innerHTML = 'Stop';
        startButton.classList.add('stop-button');
        timerStart = true;
    } else {
        startButton.innerHTML = 'Start';
        startButton.classList.remove('stop-button');
        timerStart = false;
        clearInterval(intervalId);
        
    }    
}

function startWatch() {
    intervalId = setInterval(() => {
        timer++;
        displayTimer();
    }, 1000);
}

function displayTimer() {
    let timerStr = '';
    let seconds = Math.trunc(timer % 60);
    let minutes = Math.trunc(timer / 60);

    if (minutes === 0) {
        timerStr += '00';
    } else if (minutes < 10) {
        timerStr += '0';
        timerStr += minutes;
    } else if(minutes >= 10) {
        timerStr += minutes;
    }

    timerStr += ':';

    if (seconds === 0) {
        timerStr += '00'
    } else if (seconds < 10) {
        timerStr += '0';
        timerStr += seconds;
    } else if (seconds >= 10) {
        timerStr += seconds;
    }

    localStorage.setItem('timer', JSON.stringify(timer));
    
    display.innerHTML = timerStr;
}