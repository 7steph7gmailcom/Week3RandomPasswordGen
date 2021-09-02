var promptQ1 = prompt(
  "Lenght of Password must be between 8 - 128 charactors long. Please choose how many charactors you would like in your Password."
);

// var input = document.getElementById("userInput");

var X = 8;
console.log(X);

var Y = 128;
console.log(Y);

function promptQuestion1(promptQ1) {
  if (promptQ1 > X && Y < promptQ1) {
    ("Your answer was recorded");
  } else {
    ("Your answer is not between 8 and 128 charactors long. Try again");
  }
  // return promptQ1;
}

var userTurn = prompt("Enter r, p, or s to play!");
userTurn = userTurn.toLowerCase();

// var Lcase = lowerCase;
// var Ucase = upperCase;
// var specialC = specialCharacter;
// var promptQ2 = prompt(
//   "Would you like to add lowercase letters to your password?"
// );

// function addLower() {
//   if (yes) {
//     ("You have elected to add lowercase characters in your password");
//   } else if (no) {
//     ("You have elected NOT to add lowercase characters in your password");
//   }
// }

// var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
