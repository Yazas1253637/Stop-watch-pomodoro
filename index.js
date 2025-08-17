// Select the timer display and buttons
const Tomato = document.querySelector('.tomato img');
const timerDisplay = document.querySelector('.timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const AddBtn = document.getElementById('add5-btn');
const SubBtn = document.getElementById('sub5-btn');
const ResetBn = document.getElementById('reset-btn');
stopBtn.disabled= true;
let timerInterval;  // This will hold the interval ID
let totalSeconds = 25 * 60;  // Starting from 25 minutes

// Function to update the timer display (formats mm:ss)
function updateDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

// Countdown function that runs every second
function countdown() {
  if (totalSeconds > 0) {
    totalSeconds--;
    updateDisplay(totalSeconds);
  } else {
    clearInterval(timerInterval);
    alert("Time's up!"); 
     // You can replace with better UX later
  }
}

// Start button event: start countdown if not already running
startBtn.addEventListener('click', () => {
  if (!timerInterval) {
    countdown(); // Run once immediately to update display instantly
    timerInterval = setInterval(countdown, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    AddBtn.disabled=true;
    SubBtn.disabled=true;
    Tomato.classList.add('bouncing')
  }

});

// Stop button event: pause countdown
stopBtn.addEventListener('click', () => {
    Tomato.classList.remove('bouncing')
  clearInterval(timerInterval);
  timerInterval = null;
  if(!timerInterval){
    stopBtn.disabled=true;
    startBtn.disabled=false;
    AddBtn.disabled=false;
    SubBtn.disabled=false;

  }
});

AddBtn.addEventListener('click', () =>{

  totalSeconds += 5 * 60; // add 5 minutes in seconds
  UserTime = totalSeconds;
  updateDisplay(totalSeconds); // update the timer display immediately

});

SubBtn.addEventListener('click', ()=>{
    totalSeconds -= 5*60;
    UserTime = totalSeconds;
    updateDisplay(totalSeconds);
    if (totalSeconds < 0){
        alert("Please set a real time!")
        totalSeconds = 5*60;
        updateDisplay(totalSeconds);
    }
})

ResetBn.addEventListener('click', ()=>{
     Tomato.classList.remove('bouncing')
    totalSeconds = 25*60;
    updateDisplay(totalSeconds);
    clearInterval(timerInterval);
    timerInterval= null;
    startBtn.disabled=false;
    stopBtn.disabled=true;
    AddBtn.disabled=false;
    SubBtn.disabled=false;
})

// Initialize display at page load
updateDisplay(totalSeconds);
console.log(timerDisplay);