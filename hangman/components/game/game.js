function getTheWord(index) {
    var words = ['Cat', 'Baseball', 'Java'];
    var words1 = [];
    words1.push('Cat');
    words1.push('Baseball');
    words1.push('Java');
    return words1[index];
}

/*
    draw the hyphen for user to see
*/
function DrawHyphens(size) {
    var wordElement = document.querySelector('.word-to-show');
    for (let i = 0; i < size; i++) {
        wordElement.textContent = wordElement.textContent + '- ';
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function valueChanged() {
    var inputElement = document.querySelector('#user-input');
    var userEnteredLetter = inputElement.value;
    var letterFound = false;
    if (userEnteredLetter.length > 1) {
        alert('enter only one letter.');
        return;
    }
    for (let i = 0; i < wordToUse.length; i++) {
        var character = wordToUse[i];
        if (character === userEnteredLetter) {
            letterFound = true;
            break;
        }
        else {
        }
        
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    // different way
    var randomIndex = getRandomInt(0, 2);
    wordToUse = getTheWord(randomIndex);
    DrawHyphens(wordToUse.length);
});

var wordToUse = undefined;
