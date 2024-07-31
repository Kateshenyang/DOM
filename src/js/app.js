let moleInterval;

function startGame() {
  moleInterval = setInterval(comeout, 1000);
  document.getElementById('startButton').disabled = true;
  document.getElementById('stopButton').disabled = false;
}

function stopGame() {
  clearInterval(moleInterval);
  const currentMole = document.querySelector('.mole');
  if (currentMole) {
    currentMole.classList.remove('mole');
    currentMole.removeEventListener('click', handleMoleClick);
  }
  document.getElementById('startButton').disabled = false;
  document.getElementById('stopButton').disabled = true;
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  startButton.addEventListener('click', startGame);
  stopButton.addEventListener('click', stopGame);
  stopButton.disabled = true;
});

function comeout() {
  const holes = document.querySelectorAll(".hole");
  const currentMole = document.querySelector('.mole');

  if (currentMole) {
    currentMole.classList.remove('mole');
    currentMole.removeEventListener('click', handleMoleClick);
  }

  let randomIndex;
  let newHole;

  do {
    randomIndex = Math.floor(Math.random() * holes.length);
    newHole = holes[randomIndex];
  } while (newHole === currentMole);

  newHole.classList.add('mole');
  newHole.addEventListener('click', handleMoleClick);
}

function handleMoleClick() {
  this.classList.remove('mole');
}