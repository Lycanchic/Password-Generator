const generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    
    var rand = Math.random()
        return Math.floor(min*(1 - rand) + rand*max)
}
 
function getRandomItem(list) {
    return list[randomInt(list.length)]
}

function generatePassword() {

    var userInput = prompt("How long would you like your password to be?")

    var passwordLength = parseInt(userInput)
    
    if (isNaN (passwordLength)) {
        window.alert("Please enter a number")
        return
    }

    if (!(passwordLength >= 8 && passwordLength <= 128)) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    }

    var includeNumbers = window.confirm("Would you like to include Numbers in your password?")
    var includeUppercaseLetters = window.confirm("Would you like to include Uppercase letters in your password?")
    var includeLowercaseLetters = window.confirm("Would you like to include Lowercase Letters in your password?")
    var includeSpecialCharacters = window.confirm("Would you like to include Special Characters in your password?")
    
    var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var specialCharactersList = ["!", "@", "#", "$", "%", "^", "&", "*", "+"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = []

    var includedOptions = []
    
    for (let i = 0; i < lowercaseList.length; i++) {
        uppercaseList[i] = lowercaseList[i].toUpperCase()
    }

    if (includeNumbers) {
        includedOptions.push(numbersList)
    }

    if (includeSpecialCharacters) {
        includedOptions.push(specialCharactersList)
    }

    if (includeLowercaseLetters) {
        includedOptions.push(lowercaseList)
    }

    if (includeUppercaseLetters) {
        includedOptions.push(uppercaseList)
    }
    
    if (includedOptions.length) {
        includedOptions.push(lowercaseList)
    }
 
    var generatedPassword = ""

    for (let i = 0; i < passwordLength; i++) {
    const randomList = getRandomItem(includedOptions)
    const randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
}
    
    return generatedPassword
}

    function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener('click', writePassword);
