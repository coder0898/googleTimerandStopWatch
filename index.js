// Tabs script
const tabs = document.querySelectorAll('.tab_btn');
const contents = document.querySelectorAll('.content');
const lineLayout = document.querySelector('.line');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tabBtn => { tabBtn.classList.remove('active') });
        tab.classList.add('active');

        // for display line below active tab
        lineLayout.style.display = 'block';
        lineLayout.style.width = e.target.offsetWidth + 'px';
        lineLayout.style.left = e.target.offsetLeft + 'px';

        // activating the content of that tag
        contents.forEach(content => { content.classList.remove('active') });
        contents[index].classList.add('active');
    })
})

// StopWatch Script
const hoursSpan = document.getElementById('hoursSpan');
const minuteSpan = document.getElementById('minuteSpan');
const secondsSpan = document.getElementById('secondsSpan');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let secondsCount = 0;
let minuteCount = 0;
let hoursCount = 0;

let Interval;

const startTimer = () => {
    secondsCount++;
    if (secondsCount < 10) {
        secondsSpan.innerHTML = `0${secondsCount}`;
    }
    if (secondsCount >= 10) {
        secondsSpan.innerHTML = secondsCount;
    }

    if (secondsCount > 59) {
        minuteCount++;
        minuteSpan.innerHTML = `0${minuteCount}`;
        secondsCount = 0;
        secondsSpan.innerHTML = `0${secondsCount}`;
    }

    if (minuteCount <= 9) {
        minuteSpan.innerHTML = `0${minuteCount}`;
    }
    if (minuteCount > 9) {
        minuteSpan.innerHTML = `${minuteCount}`;
    }
    if (minuteCount > 59) {
        hoursCount++;
        hoursSpan.innerHTML = `0${hoursCount}`;
        minuteCount = 0;
        minuteSpan.innerHTML = `0${minuteCount}`;
    }

    if (hoursCount > 9) {
        hoursSpan.innerHTML = `${hoursCount}`;
    }

}

startBtn.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
})

stopBtn.addEventListener('click', () => {
    clearInterval(Interval);
})

resetBtn.addEventListener('click', () => {
    clearInterval(Interval);
    secondsCount = 0;
    minuteCount = 0;
    hoursCount = 0;

    hoursSpan.innerHTML = `0${hoursCount}`;
    minuteSpan.innerHTML = `0${minuteCount}`;
    secondsSpan.innerHTML = `0${secondsCount}`;
})


// Timer Script
const startTimerBtn = document.getElementById('startTimerBtn');
const resetTimerBtn = document.getElementById('resetTimerBtn');

const hourInput = document.getElementById('hourInput');
const minuteInput = document.getElementById('minuteInput');
const secondInput = document.getElementById('secondInput');

let startCountDownTimer = null;

const TimerStartFunction = ()=>{
    if(hourInput.value == 0 && minuteInput.value == 0 && secondInput.value == 0){
        hourInput.value = 0;
        minuteInput.value = 0;
        secondInput.value = 0;
    } else if(secondInput.value != 0){
        secondInput.value--;
    } else if(minuteInput.value != 0 && secondInput.value == 0){
        secondInput.value = 59;
        minuteInput.value--;
    } else if(hourInput.value != 0 && minuteInput.value == 0){
        minuteInput.value = 60;
        hourInput.value--;
    }

    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startCountDownTimer);
}

startTimerBtn.addEventListener('click', () => {
    function startInterval() {
        startCountDownTimer = setInterval(function () {
            TimerStartFunction();
        }, 1000);
    }
    startInterval();
}
);

resetTimerBtn.addEventListener('click',()=>{
    hourInput.value = 0;
    minuteInput.value = 0;
    secondInput.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})