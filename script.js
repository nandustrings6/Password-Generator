// Assignment Code
var generateBtn = document.querySelector("#generate");

//your created code ----generatePassword function is what needs to be created

function generatePassword() {
  
  //user story
  //user clicks on generateBtn 
  //prompt the user for the password criteria 
  //  password length 8 to 128 
  //  password in lower case 
  //  password in upper case
  //  password in numerals 
  //  password in special characters 
  //validate the input length input
  //display a random password on page 
  
  var keyLength = prompt("Password must be between 8 to 128 character, choose your password length");
  var upperCase = confirm("Your password must contain an uppercase alphabet, click ok to choose");
  var lowerCase = confirm("Your password must contain a lowercase alphabet, click ok to choose");
  var specialCharacters = confirm("Your password must contain special characters, click ok to choose");
  var numerals = confirm("Your password must contain numbers, click ok to choose");

  var upperCaseCriteria = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lowerCaseCriteria ="abcdefghijklmnopqrstuvwxyz";
  var specialChacCriteria ="!@#$%^&*()?.<\>|=+:;,[-_]";
  var numeralsCriteria ="0123456789";
  var multiSelect =[];

  if (keyLength <= 8 || keyLength > 128) {
    alert("Your password character length does not match the required criteria, please try again")
    var keyLength = prompt("Password must be between 8 to 128 character only");
  };

  if (upperCaseCriteria) {multiSelect += upperCase};
  if (lowerCaseCriteria) {multiSelect += lowerCase};
  if (numeralsCriteria) {multiSelect += numerals};
  if (specialChacCriteria) {multiSelect += specialCharacters};

  let finalpassword = ''
  for (let i = 0; i < keyLength; i++) {
    let random =[Math.floor(Math.random()*multiSelect.length)];
    finalpassword = finalpassword + multiSelect[random];
  }

  return finalpassword;
};

// this is all correct do not disturb 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);