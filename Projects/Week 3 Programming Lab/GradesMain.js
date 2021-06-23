
function clicked() {
  var numberGrade = document.getElementById("grade").value;
  var roundedNumberGrade = Math.round(numberGrade);

  if (roundedNumberGrade <= 100 && roundedNumberGrade >= 90) {
    document.getElementById("letterA").style.color = "#00FF00";
    setTimeout(DefaultColor, 2000);
  }
  else if (roundedNumberGrade <= 89 && roundedNumberGrade >= 80) {
    document.getElementById("letterB").style.color = "#00FF00";
    setTimeout(DefaultColor, 2000);
  }
  else if (roundedNumberGrade <= 79 && roundedNumberGrade >= 70) {
    document.getElementById("letterC").style.color = "#00FF00";
    setTimeout(DefaultColor, 2000);
  }
  else if (roundedNumberGrade <= 69 && roundedNumberGrade >= 60) {
    document.getElementById("letterD").style.color = "#00FF00";
    setTimeout(DefaultColor, 2000);
  }
  else if (roundedNumberGrade <= 59 && roundedNumberGrade >= 0) {
    document.getElementById("letterF").style.color = "#00FF00";
    setTimeout(DefaultColor, 2000);
  }
  else {
    gradeOutOfBounds();

  }
}

function DefaultColor() {
  document.getElementById("letterA").style.color = "brown";
  document.getElementById("letterB").style.color = "brown";
  document.getElementById("letterC").style.color = "brown";
  document.getElementById("letterD").style.color = "brown";
  document.getElementById("letterF").style.color = "brown";

}
function redColor() {
  document.getElementById("letterA").style.color = "red";
  document.getElementById("letterB").style.color = "red";
  document.getElementById("letterC").style.color = "red";
  document.getElementById("letterD").style.color = "red";
  document.getElementById("letterF").style.color = "red";
}
function yellowColor() {
  document.getElementById("letterA").style.color = "yellow";
  document.getElementById("letterB").style.color = "yellow";
  document.getElementById("letterC").style.color = "yellow";
  document.getElementById("letterD").style.color = "yellow";
  document.getElementById("letterF").style.color = "yellow";
}
function gradeOutOfBounds() {
  var flash = 1;
  for (let x = 0; x <=1; x++) {
    if (flash == 1) {
      var redFlash = setInterval(redColor, 500)
      setTimeout(function(){clearInterval(redFlash);}, 5000)
      setTimeout(DefaultColor, 6000);  
      flash--;
    }
    else if(flash == 0) {
      var yellowFlash = setInterval(yellowColor, 1000)
      setTimeout(function(){clearInterval(yellowFlash);}, 5000)
      setTimeout(DefaultColor, 6000); 
      flash++;
    } 
  }
}
