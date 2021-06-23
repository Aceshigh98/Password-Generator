function clicked() {

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var schoolName = document.getElementById("schoolName").value;
  var userName = firstName.charAt(0) + lastName.charAt(0) + schoolName.split(' ')[0];
  var request = "Please fill out all required information.";


  if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(lastName)) {
    window.alert(request);
  } else {
    window.alert(userName);    
  }
}

function isEmpty(str){
  if(str === "" || str == null){
    return true;
  }

  return false;
}