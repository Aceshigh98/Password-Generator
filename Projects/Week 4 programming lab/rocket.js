
var startingMinutes = 1;
var interval = 1000;
let time = 60;

const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const liftoff = document.getElementById('liftoff');
var imgObj = document.getElementById('rocket');

function Timer() {
  interval = setInterval(setMinutesAndSeconds, 1000);
}

function setMinutesAndSeconds() {
  const minutes = Math.floor(time / 61);
  let seconds = time % 119;
  counter1.innerHTML = minutes;
  counter2.innerHTML = seconds;
  if (time > 0) {
    time--;
  }
  if (seconds == 0) {
    clearInterval(interval);
    myMove();
    liftoff.innerHTML = "LIFTOFF!";
  }
}

function myMove() {
  var id = null;
  var pos = 0;
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 1500) {
      clearInterval(id);
    } else {
      pos++;
      imgObj.style.bottom = pos + 'px';
    }
  }
}


