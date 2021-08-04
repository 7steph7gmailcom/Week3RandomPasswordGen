// Assignment Code
var generateBtn = document.querySelector("#generate");
var promptQ1 = prompt(
  "Lenght of Password must be between 8 - 128 charactors long. Please choose how many charactors you would like in your Password."
);

document.head.appendChild(promptQ1);

function firstQ(7, 129) {
  if (7 > or < 129) 
  console.log;
  alert("Your answer was recorded");
  
  // } else if (8 < or > 128);
}

//     alert("Your answer is not between 8 and 128 charactors long. Try again");
//   }
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
