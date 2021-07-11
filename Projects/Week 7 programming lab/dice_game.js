
var cube1 = document.querySelector('.cube1');
var cube2 = document.querySelector('.cube2');
var rollBtn = document.querySelector('.rollBtn');
var QuitBtn = document.querySelector('.QuitBtn');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var currentClass1 = '';
var currentClass2 = '';
var player1 = 0;
var player2 = 0;
var playerTurns = 0;


//finds a random integer between 1-6.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
//Alerts user when one player reaches a score of 100 or greater.
function Winner() {
  if (player1 >= 100) {
    alert('Player 1 Wins! Score: ' + player1);
    player1 = 0;
    player2 = 0;
    score2.innerHTML = player2;
    score1.innerHTML = player1;
  }
  else if (player2 >= 100) {
    alert('Player 2 Wins! Score: ' + player2);
    player1 = 0;
    player2 = 0;
    score2.innerHTML = player2;
    score1.innerHTML = player1;
  }
}

//Determines which players turn it is to roll dice.
function Turns(score) {
  if (playerTurns == 0) {
    calculatePlayer1Scores(score);
    playerTurns++;
  }
  else if (playerTurns == 1) {
    calculatePlayer2Scores(score);
    playerTurns--;
  }
}

//Updates and calculates players scores
function calculatePlayer1Scores(player1Score) {
  player1 += player1Score;
  score1.innerHTML = player1;
}
function calculatePlayer2Scores(player2Score) {
  player2 += player2Score;
  score2.innerHTML = player2;
}

function endGame() {
  alert('Player has quit the game!');
  player1 = 0;
  player2 = 0;
  score2.innerHTML = player2;
  score1.innerHTML = player1;
}

function Dice() {
  var randNum1 = getRandomInt(1, 7);
  var randNum2 = getRandomInt(1, 7);
  var totalScore = randNum1 + randNum2;

  //Cube1
  console.log('cube1 ' + randNum1)
  var showClass1 = 'show-' + randNum1;
  console.log(showClass1)
  if (currentClass1) {
    cube1.classList.remove(currentClass1);
  }
  cube1.classList.add(showClass1);
  currentClass1 = showClass1;

  //Cube2
  console.log('cube2 ' + randNum2)
  var showClass2 = 'show-' + randNum2;
  console.log(showClass2)
  if (currentClass2) {
    cube2.classList.remove(currentClass2);
  }
  cube2.classList.add(showClass2)
  currentClass2 = showClass2;

  function doublePoints(dice1, dice2) {
    if (dice1 == dice2) {
      totalScore = (dice1 + dice2) * 2;
    }
  }

  //Calculate Scores for each Player
  doublePoints(randNum1, randNum2);
  Turns(totalScore);
  Winner();
}


QuitBtn.addEventListener("click", endGame);
rollBtn.addEventListener("click", Dice);