let moleInterval;
function startGame() {
  moleInterval = setInterval(comeout, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', startGame);
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