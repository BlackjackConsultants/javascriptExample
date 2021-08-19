String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function getTheWord(index) {
    var words = ['Cat', 'Baseball', 'Java'];
    return words[index];
}

/**
 * draw the hyphen for user to see
 * @param {*} size 
 */
function DrawHyphens(size) {
    wordToShow = '';
    for (let i = 0; i < size; i++) {
        wordToShow = wordToShow + '- ';
    }
    var wordElement = document.querySelector('.word-to-show');
    wordElement.textContent = wordToShow;

}

/**
 *  get a random number
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * find letters
 * @param {*} userEnteredLetter 
 * @returns 
 */
function findLetters(userEnteredLetter) {
    var lettersFound = [];
    for (let i = 0; i < wordToUse.length; i++) {
        var character = wordToUse[i];
        if (character.toLowerCase() === userEnteredLetter.toLowerCase()) {
            // letter found
            lettersFound.push(i);
        }
    }
    return lettersFound;
}

/**
 * draw teh word to show. this shows the letters guessed by the user and the hyphes for the ones not guessed yet.
 * @param {*} lettersFound 
 * @param {*} userEnteredLetter 
 */
function DrawWordToShow(lettersFound, userEnteredLetter) {
    for (let i = 0; i < lettersFound.length; i++) {
        var index = lettersFound[i];
        wordToShow = wordToShow.replaceAt(index * 2, userEnteredLetter);
    }
    var wordElement = document.querySelector('.word-to-show');
    wordElement.textContent = wordToShow;
}

/**
 * handles after load of a page
 */
document.addEventListener("DOMContentLoaded", function (event) {
    // different way
    var randomIndex = getRandomInt(0, 2);
    wordToUse = getTheWord(randomIndex);
    DrawHyphens(wordToUse.length);
});

// handlers
function guessLetterHandler() {
    // get user entered letter
    var inputElement = document.querySelector('#user-input');
    var userEnteredLetter = inputElement.value;
    if (lettersUsed.indexOf(userEnteredLetter)) {
        // letter does not exist
        inputElement.value = '';
        lettersUsed.push(userEnteredLetter);
        // find letters
        var lettersFound = findLetters(userEnteredLetter, lettersFound);
        // track missed letters
        if (lettersFound.length == 0) {
            lettersMissed.push(userEnteredLetter);
            var letterUsedEl = document.querySelector('#lettersUsed');
            letterUsedEl.textContent = letterUsedEl.textContent.length === 0 ? userEnteredLetter : letterUsedEl.textContent + ', ' + userEnteredLetter;
        }
        else {
            DrawWordToShow(lettersFound, userEnteredLetter);
        }
        if (wordToShow.indexOf('-') == -1) {
            // user won
            var youWonEl = document.querySelector('.you-won');
            youWonEl.classList.remove("you-won-visible");
        }
    }
    else {
        // letter used
        alert('lettered used already.')
    }
}

// global variables
var wordToUse = '';
var wordToShow = '';
var lettersUsed = []; // includes all letters good and bad
var lettersMissed = [];
