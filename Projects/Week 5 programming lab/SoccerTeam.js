
var results;

function calculateResults() {
  var age1Entries = document.getElementById('input1').value;
  var age2Entries = document.getElementById('input2').value;
  var age3Entries = document.getElementById('input3').value;
  var sumPlayers = parseInt(age1Entries) + parseInt(age2Entries) + parseInt(age3Entries);

  if (age1Entries < 0 || age2Entries < 0 || age3Entries < 0) {
    results = "The number of players entered must be greater than or equal to 0."
  } else if (age1Entries >= 0 && age2Entries >= 0 && age3Entries >= 0) {
    results = "Age Group 4-7: " + age1Entries + "<br/>" + " Age Group 8-11: " + age2Entries + "<br/>" + " Age Group 12-15: " + age3Entries + "<br/>" + " Total Players: " + sumPlayers;
  }
}
function getResults() {
  var displayResults = document.getElementById('results');
  displayResults.innerHTML = results;
}
