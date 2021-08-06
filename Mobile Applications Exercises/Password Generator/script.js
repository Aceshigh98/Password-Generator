
//Main function where all functions are called and stored in variables.
function createPasswords() {
  refreshTable();
  const validNumOfPass = getNumberOfPasswordsNeeded();
  const passLength = getLengthOfPasswords();
  const passArray = passwordArray(validNumOfPass, passLength);
  createTable(validNumOfPass, passArray)
}


//A function that gets the number of passwords through user input.
function getNumberOfPasswordsNeeded() {
  let numOfPass = document.getElementById('numOfPass');
  console.log('number of passwords value = ' + numOfPass.value);

  if (numOfPass.value >= 0) {
    if (numOfPass.value <= 50) {
      let validNum = document.getElementById('errorPass');
      validNum.innerText = '';
      console.log('Valid Number');
      return numOfPass.value;

    } else {
      let invalidNum = document.getElementById('errorPass');
      invalidNum.innerText = 'Maximum 50 passwords can be created.';
      numOfPass.value = '';
      console.log('Maximum passords exceeded');
    }
  }
  else {
    let invalidNum = document.getElementById('errorPass');
    invalidNum.innerText = 'Invalid Number';
    numOfPass.value = '';
    console.log('Invalid Number');
  }
}


//A function that gets the length of a password from user input.
function getLengthOfPasswords() {
  let passLength = document.getElementById('passLength');
  console.log('password length value = ' + passLength.value);

  if (passLength.value >= 0) {
    if (passLength.value <= 50) {
      let validLength = document.getElementById('errorLength');
      validLength.innerText = '';
      console.log('Valid Length');
      return passLength.value;
    } else {
      let invalidLength = document.getElementById('errorLength');
      invalidLength.innerText = 'Maximum password length is 50.';
      console.log('Maximum password length has been exceeded or value is null.');
      passLength.value = '';
      return validNumOfPass == 0;
    }
  }
  else {

    let invalidLength = document.getElementById('errorLength');
    invalidLength.innerText = 'Invalid length';
    passLength.value = '';
    console.log('Invalid Length');
    return validNumOfPass == 0;
  }
}


//Creates an array by using the generateRandomCharacter function to return a string to fill the array.
function passwordArray(validNumOfPass, passLength) {
  let x = validNumOfPass;
  console.log(validNumOfPass);
  let passwords = [];
  for (let i = 0; i < x; i++) {
    passwords.push(generateRandomCharacters(passLength));
  }
  console.log('passwords = ' + passwords);
  return passwords;
}


//Using the length that is obtained through user input this function generates random characters using ASCII and stores each character in to the passString String, then it returns the String. 
//32-126
function generateRandomCharacters(length) {
  console.log('length: ' + length);
  let passString = '';
  for (let i = 0; i < length; i++) {
    try {
      let randomNumber = Math.floor(Math.random() * (127 - 32)) + 32;
      let randomCharacter = '&#' + randomNumber;
      let ASC2 = randomCharacter;
      passString += ASC2;
      console.log(ASC2);
    }
    catch {
      console.log('rejected', err);
    }
  }
  console.log('password string = ' + passString);
  return passString;
}
//Creates the table and inserts cloumns using data from the array, and a counter.
function createTable(validNumOfPass, passArray) {
  let table = document.getElementById('table')
  let count = validNumOfPass;
  for (let i = 0; i < validNumOfPass; i++) {
    let row = table.insertRow(0);
    let column1 = row.insertCell(0);
    let column2 = row.insertCell(1);
    column1.innerHTML = count-i;
    column2.innerHTML = passArray[i];
  }
}
//A function to call when I need to refresh the table when I enter new values.
function refreshTable() {
  $("#table tr").remove();
}
//Resets error messages, input fields, and the table.
function reset(){
  $("#table tr").remove();
  let passLength = document.getElementById('passLength');
  let numOfPass = document.getElementById('numOfPass');
  let invalidLength = document.getElementById('errorLength');
  let invalidNum = document.getElementById('errorPass');
  invalidLength.innerText = '';
  invalidNum.innerText = '';
  passLength.value = '';
  numOfPass.value = '';
}