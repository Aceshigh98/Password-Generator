function SubmitOnClicked() {
  var results;
  var userInfo = [];
  userInfo[0] = document.getElementById('firstName').value;
  userInfo[1] = document.getElementById('lastName').value;
  userInfo[2] = document.getElementById('address').value;
  userInfo[3] = document.getElementById('city').value;
  userInfo[4] = document.getElementById('State').value;
  userInfo[5] = document.getElementById('Zip').value;
  userInfo[6] = document.getElementById('Phone').value;
  userInfo[7] = document.getElementById('Username').value;
  userInfo[8] = document.getElementById('Password').value;
  userInfo[9] = document.getElementById('Email').value;
  results = userInfo.toString();
  PasswordRequirementChecks(userInfo[8]);
  phoneLength(userInfo[6]);
  alert(results);
}

function PasswordRequirementChecks(userInfo) {
  var expression = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");

  if (userInfo.length < 4) {
    alert('Password is to short.')
  }
  else if (!expression.test(userInfo)) {
    alert('Password is not meeting minimum requirements (1 special character, 1 capital letter, 1 lowercase letter, and 1 number...)');
  }
}

function phoneLength(userInfo) {
  if (userInfo.length != 14) {
    alert('Phone Number is invalid.')
  }
}