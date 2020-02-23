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
  if (newPassword === undefined) {
    alert(
      "Password did not have any requirements please create another password."
    );
  } else {
    writePassword(newPassword);
  }
}
// Write password to the #password input
function writePassword(newPassword) {
  var password = newPassword;
  var passwordText = document.querySelector("#password");
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
  if (
    lowerLetters === false &&
    upperLetters === false &&
    specialChars === false &&
    numbers === false
  ) {
  } else {
    let password = "";
    for (let i = 0; i < passLength; i++) {
      let charType = parseInt(Math.random() * 4);
      if (charType === 0 && lowerLetters == true) {
        password += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      } else if (charType === 0 && lowerLetters == false) {
        i--;
      }
      if (charType === 1 && upperLetters == true) {
        password += String.fromCharCode(65 + Math.floor(Math.random() * 26));
      } else if (charType === 1 && upperLetters == false) {
        i--;
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
      } else if (charType === 2 && specialChars == false) {
        i--;
      }
      if (charType === 3 && numbers == true) {
        password += String.fromCharCode(48 + Math.floor(Math.random() * 10));
      } else if (charType === 3 && numbers == false) {
        i--;
      }
    }
    return password;
  }
}

//Length of password prompt - Min 8 char | Max 128 char, checks if length is between 8 & 128
function passwordLength() {
  let pLength = document.querySelector("#passLength").value;
  pLength = parseInt(pLength);
  console.log("Password Length: " + pLength);
  if (typeof pLength === "number" && pLength >= 8 && pLength <= 128) {
    return pLength;
  } else {
    alert(pLength + " is not a value between 8 & 128.");
    pLength.reset();
  }
}
//lowercase prompt
function lowercaseLetters() {
  let lowLetters = document.querySelector("#lowercase").checked;
  if (lowLetters === true) {
    console.log("Lowercase: True");
    return lowLetters;
  } else {
    console.log("Lowercase: False");
    return lowLetters;
  }
}
//uppercase prompt
function uppercaseLetters() {
  let uLetters = document.querySelector("#uppercase").checked;
  if (uLetters === true) {
    console.log("Uppercase: True");
    return uLetters;
  } else {
    console.log("Uppercase: False");
    return uLetters;
  }
}
//number prompt
function wantNumbers() {
  let needNumbers = document.querySelector("#numbers").checked;
  if (needNumbers === true) {
    console.log("Numbers: True");
    return needNumbers;
  } else {
    console.log("Numbers: False");
    return needNumbers;
  }
}
//special character prompt
function specialCharacters() {
  let sChars = document.querySelector("#specialChar").checked;
  if (sChars === true) {
    console.log("Special Characters: True");
    return sChars;
  } else {
    console.log("Special Characters: False");
    return sChars;
  }
}
