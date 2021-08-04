// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptQ1 = prompt(
  "Lenght of Password must be between 8 - 128 charactors long. Please choose how many charactors you would like in your Password."
);



var X = 8;
console.log(X);

var Y = 128;
console.log(Y);

function firstQ(promptQ1) {
  if (X > or < Y);
  {
    alert("Your answer was recorded");
  }
  elseif(X < or > Y);
  {
    alert("Your answer is not between 8 and 128 charactors long. Try again");
  }
}

var Lcase = lowerCase
var Ucase = upperCase
var specialC = specialCharacter
var promptQ2 = prompt("Would you like to add lowercase letters to your password?")

function caseAndSpec()
if (yes); {
  ("You have elected to add lowercase characters in your password")
}elseif (no) {
  ("You have elected not to add lowercase characters in your password")
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
