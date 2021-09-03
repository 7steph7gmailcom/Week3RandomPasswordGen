// Assign Characters
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\+=";
var chosenCharacters = "";

// Add event listener generates button
generateBtn.addEventListener("click", writePassword)

var generateBtn = document.querySelector("#generate");

// Write Password to the #password input
function enterpassword(){
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



//generatePassword function calls writePassword function => returning the final password
function generatePasswords(){
 var result = "";
  //Prompt user how many characters in Password
 var length = prompt("How many characters would you like in your Password? (between 8 and 128)");
 if(isNaN(length)){
   alert("Number must be greater than 8");
   return generatePassword()
 }
 if(length<8 || length> 128){
   alert("Number must be less than 128");
   return generatePassword()
 }



//User needs to confirm to include lower, upper, num, special
var hasLower = confirm("Include lower case letters?");
var hasUpper = confirm("Include upper case letters?");
var hasNumbers = confirm("Include numbers?");
var hasSpecial = confirm("Include special characters?");
}


if(){
  
}
if(hasUpper){
  chosenCharacters += lower
}
if(hasLower){
  chosenCharacters += upper
}
if(hasNumbers) {
  chosenCharacters += numbers
}
if(hasSpecial) {
  chosenCharacters += special
}

// (for loop)
for (var i = 0; i < length; i++)

return;
}