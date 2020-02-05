// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", passCreation);

//Calls all functions to check password requirements & creates password
function passCreation() {
  var passLength = passwordLength();
  var lowerLetters = lowercaseLetters();
  var upperLetters = uppercaseLetters();
  var specialChars = specialCharacters();
  var numbers = wantNumbers();
  var newPassword = genPassword(
    passLength,
    lowerLetters,
    upperLetters,
    specialChars,
    numbers
  );
  console.log(newPassword);
  writePassword(newPassword);
}
// Write password to the #password input
function writePassword(newPassword) {
  var password = newPassword;
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.innerHTML = password;
}
//Creates password based on requirements
function genPassword(
  passLength,
  lowerLetters,
  upperLetters,
  specialChars,
  numbers
) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let charType = parseInt(Math.random() * 4);
    if (charType === 0 && lowerLetters == true) {
      password += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    if (charType === 1 && upperLetters == true) {
      password += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    if (charType === 2 && specialChars == true) {
      let specCharGroup = parseInt(Math.random() * 3);
      if (specCharGroup === 0) {
        password += String.fromCharCode(33 + Math.floor(Math.random() * 15));
      }
      if (specCharGroup === 1) {
        password += String.fromCharCode(58 + Math.floor(Math.random() * 7));
      }
      if (specCharGroup === 2) {
        password += String.fromCharCode(91 + Math.floor(Math.random() * 6));
      }
      if (specCharGroup === 3) {
        password += String.fromCharCode(123 + Math.floor(Math.random() * 4));
      }
    }
    if (charType === 3 && numbers == true) {
      password += String.fromCharCode(48 + Math.floor(Math.random() * 10));
    }
  }
  return password;
}

//Length of password prompt - Min 8 char | Max 128 char, checks if length is between 8 & 128
function passwordLength() {
  let pLength;
  pLength = parseInt(
    prompt(
      "How many charcters would you like your password to be (8 - 128 char): "
    )
  );
  if (typeof pLength === "number" && pLength >= 8 && pLength <= 128) {
    return pLength;
    console.log(passLength);
  } else {
    alert(pLength + " is not a value between 8 & 128.");
    passwordLength();
  }
}
//lowercase prompt
function lowercaseLetters() {
  let lLetters = false;
  lLetters = confirm("Would you like lowercase letters in your password?");
  if (lLetters === true) {
    console.log("true");
    return lLetters;
  } else {
    console.log("false");
    return lLetters;
  }
}
//uppercase prompt
function uppercaseLetters() {
  let uLetters = false;
  uLetters = confirm("Would you like uppercase letters in your password?");
  if (uLetters === true) {
    console.log("true");
    return uLetters;
  } else {
    console.log("false");
    return uLetters;
  }
}
//number prompt
function wantNumbers() {
  let needNumbers = false;
  needNumbers = confirm("Would you like numbers in your password?");
  if (needNumbers === true) {
    console.log("true");
    return needNumbers;
  } else {
    console.log("false");
    return needNumbers;
  }
}
//special character prompt
function specialCharacters() {
  let sChars = false;
  sChars = confirm("Would you like special characters in your password?");
  if (sChars === true) {
    console.log("true");
    return sChars;
  } else {
    console.log("false");
    return sChars;
  }
}
