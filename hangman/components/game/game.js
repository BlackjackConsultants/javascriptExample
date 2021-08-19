String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function getTheWord(index) {
    var words = ['Cat', 'Baseball', 'Java'];
    return words[index];
}

/*
    draw the hyphen for user to see
*/
function DrawHyphens(size) {
    wordToShow = '';
    for (let i = 0; i < size; i++) {
        wordToShow = wordToShow + '- ';
    }
    var wordElement = document.querySelector('.word-to-show');
    wordElement.textContent = wordToShow;

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

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

function DrawWordToShow(lettersFound, userEnteredLetter) {
    for (let i = 0; i < lettersFound.length; i++) {
        var index = lettersFound[i];
        wordToShow = wordToShow.replaceAt(index * 2, userEnteredLetter);
    }
    var wordElement = document.querySelector('.word-to-show');
    wordElement.textContent = wordToShow;
}

function guessLetterHandler() {
    var inputElement = document.querySelector('#user-input');
    var userEnteredLetter = inputElement.value;
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

document.addEventListener("DOMContentLoaded", function (event) {
    // different way
    var randomIndex = getRandomInt(0, 2);
    wordToUse = getTheWord(randomIndex);
    DrawHyphens(wordToUse.length);
});

var wordToUse = '';
var wordToShow = '';
var lettersUsed = [];
var lettersMissed = [];
