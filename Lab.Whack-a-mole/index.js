let score = 0;
let highScore = 0;

const holes = document.getElementsByClassName('hole');

setInterval(function () {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle('mole');
}, 500);

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function (e) {
  if (e.target.matches('.mole')) {
    // we hit a mole!
    e.target.classList.toggle('mole');
    score = score + 1;
    document.getElementById('score').innerText = `Score : ${score}`;
  }
});
setInterval(function () {
  if (score > highScore) {
    highScore = score;
    alert(`NEW HIGH SCORE  ${score} Catches \n  YAAAAAAAAAAAY`);
    score = 0;
    document.getElementById('score').innerText = `Score : ${score}`;
  } else {
    alert(`Your Score ${score} Catches \n YOU CAN DO BETTER !!!`);
    score = 0;
    document.getElementById('score').innerText = `Score : ${score}`;
  }
}, 5000);
