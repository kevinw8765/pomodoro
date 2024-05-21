let pomodoroBtn = document.querySelector(".pom");
let shortBreak = document.querySelector(".sb");
let longBreak = document.querySelector(".lb");


let timer = document.querySelector(".timer");
let current = 'Pomodoro';
let timerMins = 25;
let timerSecs = timerMins * 60;
let timerInterval;

function startTimer() {
    timerSecs--;
    let minutes = Math.floor(timerSecs/60);
    let seconds = Math.floor(timerSecs % 60);
    
    if(timerSecs < 0)
    {
        timer.textContent = "00:00";
        clearInterval(timerInterval);
        return;
    }

    if (minutes < 10)
    {
        minutes = '0' + minutes;
    }   
    if (seconds < 10)
    {
        seconds = '0' + seconds;
    }

    timer.textContent = minutes + ':' + seconds;
}


function reset(time) {
    timerMins = time;
    timerSecs = timerMins * 60;
    clearInterval(timerInterval);
}

let btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = setInterval(startTimer, 1000);
        timerMins = parseInt(btn.value);
        timerSecs = (timerMins * 60) + 1;
        current = btn.textContent;
    });
});

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

startBtn.addEventListener('click', () => {
    clearInterval();
    timerInterval = setInterval(startTimer, 1000);
    if (current == 'Pomodoro')
    {
        timerMins = 25;
        timerSecs = timerMins * 60;
    }
    else if (current == 'Short Break')
    {
        timerMins = 5;
        timerSecs = timerMins * 60;
    }
    else
    {
        timerMins = 10;
        timerSecs = timerMins * 60;
    }
});