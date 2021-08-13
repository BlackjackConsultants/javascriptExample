function getTheWord(index) {
    var words = ['Cat', 'Baseball', 'Java'];
    return words[index];
}

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
    // inputElement.value = ;
}

document.addEventListener("DOMContentLoaded", function (event) {
    //do work
    var wordToUse = getTheWord(getRandomInt(0, 2));
    DrawHyphens(wordToUse.length);
});
