// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // variable to store the length of the password that user choose
  let lenght = parseInt(
    prompt("How many characters do you want your password to be?")
  )

  if(isNaN(length) === true){
    alert("Please input a number between 10-128");
    return;
  }

  if(length < 10) {
    alert("Password length must be at least 10 characters")
  }

  if(length > 65) {
    alert("Password length must be less than 65 characters")
  }

  let incNumericCharacters = confirm (
    "Click 'OK' to include numeric characters"
  )

  let incSpecialCharacters = confirm (
    "Click 'OK' to include special characters"
  )

  let incLowerCaseCharacters = confirm (
    "Click 'OK' to include lower case characters"
  )

  let incUpperCaseCharacters = confirm (
    "Click 'OK' to include upper case characters"
  )

  if(incNumericCharacters === false &&
    incSpecialCharacters === false &&
    incLowerCaseCharacters === false &&
    incUpperCaseCharacters === false) {
      alert("At least one character option must be selected!");
      return;
    }

    let passwordOptions = {
      length: length,
      incNumericCharacters: incNumericCharacters,
      incSpecialCharacters: incSpecialCharacters,
      incLowerCaseCharacters: incLowerCaseCharacters,
      incUpperCaseCharacters: incUpperCaseCharacters
    }

    return passwordOptions;


  }



// Function for getting a random element from an array
function getRandom(arr) {
  let random = Math.floor(Math.random() * arr.length)
  let ranEle = arr[random];

  return ranEle;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []

  let possibleCharacters = []

  let guaranteeCharacters = []

  if(options.incNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteeCharacters.push(getRandom(numericCharacters))
  }

  if(options.incSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteeCharacters.push(getRandom(specialCharacters))
  }

  if(options.incLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteeCharacters.push(getRandom(lowerCasedCharacters))
  }

  if(options.incUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteeCharacters.push(getRandom(upperCasedCharacters))
  }
  
  for(let i = 0; i < options.length; i++){
    var generate = getRandom(possibleCharacters);
    console.log(generate)
    result.push(generate);
  }

  console.log(result);

  return result.join("")

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);