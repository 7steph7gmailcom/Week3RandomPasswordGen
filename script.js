// Assign Characters

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\+=";
var chosenCharacters = "";

var generateBtn = document.querySelector("#generate");

// Add event listener generates button
generateBtn.addEventListener("click", writePassword)

//#password input
function enterPassword(){
  var password = genratepassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generatePassword function calls writePassword function => returning the final password
function generatePassword(){
  console.log(generatePassword)
 var result = "";
  //Prompt user how many characters in Password
 var length = prompt("How many characters would you like in your Password? (between 8 and 128)");
 if(isNaN(length)){
   alert("A number between 8 -128 must be selected to continue")
   return generatePassword()
 }
 if(length < 8 || length > 128){
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

// return;
}