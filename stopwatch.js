let intervalId;
let isPlaying;

let secondCount = 50;
let minCount = 0;

startStopwatch();

const secondDOC = document.querySelector('.second-js')
const minDOC = document.querySelector('.min-js')
const resetButton = document.querySelector('.reset-js')
const stopButton = document.querySelector('.stop-js')
const startButton = document.querySelector('.start-js')

secondDOC.innerHTML = `:${secondCount}`
minDOC.innerHTML = `0${minCount}`

function startStopwatch() {
  if(isPlaying) {
    return
  }

  isPlaying = true;
  intervalId = setInterval(() => {

    secondCount +=1;
    secondDOC.innerHTML = `:${secondCount}`
  
    if(secondCount === 60) {
      secondCount = 0;
      secondDOC.innerHTML = `${secondCount}`
      minCount +=1;
      minDOC.innerHTML = `0${minCount}`
    }
  },1000);

}

 

resetButton.addEventListener('click',() => {
  secondCount = 0;
  secondDOC.innerHTML = `${secondCount}`
  minCount = 0;
  minDOC.innerHTML = `0${minCount}`
  clearInterval(intervalId);
  isPlaying = false;
  startStopwatch();
})

stopButton.addEventListener('click',() => {
    clearInterval(intervalId);
})

startButton.addEventListener('click', () => {
  isPlaying = false;
  startStopwatch();
})



