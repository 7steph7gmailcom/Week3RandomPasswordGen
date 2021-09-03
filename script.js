// Assign Characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
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



//generatePassword function gets called in writePassword function, returning the final password
function generatePasswords(){
 //do random generation here and return the final password in the end
 var result = "";
 //ask the user how many characters they want
 var length = prompt("How many characters in your random password? (between 8 and 128)");
 if(isNaN(length)){
   alert("You must input a number!");
   return generatePassword()
 }
 if(length<8 || length> 128){
   alert("Please choose numbers between 8 - 128!");
   return generatePassword()
 }
}


//User needs to confirm if they want to include lower, upper, num, special?
var hasUpper = confirm("Include upper case letters?");
var hasLower = confirm("Include lower case letters?");
var hasNumbers = confirm("Include numbers?");
var hasSpecial = confirm("Include special characters?");



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

return
