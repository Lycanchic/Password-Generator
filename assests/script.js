const generateBtn = document.querySelector("#generate");

function randomInt(min, max = min) {
    if (!max) {
        max = min
        min = 0
    }
    
    const rand = Math.random()
        return Math.floor(min + rand * (max - min))
}
 
function getRandomItem(list) {
    return list[randomInt(list.length)]
}

function generatePassword() {

    const userInput = prompt("How long would you like your password to be?")

    const passwordLength = Number.parseInt(userInput, 10)
    
    if (Number.isNaN (passwordLength)) {
        window.alert("Please enter a number")
        return
    }

    if (!(passwordLength >= 8 && passwordLength <= 128)) {
        window.alert("Password length must be between 8 and 128 characters")
        return
    }

    const includeNumbers = window.confirm("Would you like to include Numbers in your password?")
    const includeUppercaseLetters = window.confirm("Would you like to include Uppercase letters in your password?")
    const includeLowercaseLetters = window.confirm("Would you like to include Lowercase Letters in your password?")
    const includeSpecialCharacters = window.confirm("Would you like to include Special Characters in your password?")
    
    const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const specialCharactersList = ["!", "@", "#", "$", "%", "^", "&", "*", "+"]
    const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const uppercaseList = []

    const includedOptions = []
    
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
 
    const generatedPassword = ""

    for (let i = 0; i < passwordLength; i++) {
    const randomList = getRandomItem(includedOptions)
    const randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
}
    
    return generatedPassword
}

    function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener('click', writePassword);
