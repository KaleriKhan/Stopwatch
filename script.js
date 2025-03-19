let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId); // Clear the previous interval before starting a new one
    }
    timerId = setInterval(startTimer, 10); // Save the interval ID
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId); // Stop the timer
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId); // Stop the timer when reset
    timerDisplay.innerHTML = `00 : 00 : 00`; // Reset the display
    msec = secs = mins = 0; // Reset the time variables
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
