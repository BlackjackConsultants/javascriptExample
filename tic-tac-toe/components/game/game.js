let playerOneTurn = true;

function DrawXorO(cellId) {
    var cellElement = document.querySelector("." + cellId);
    var cellValue = (playerOneTurn == true) ? "X" : "O";
    cellElement.textConent = cellValue;
    playerOneTurn != playerOneTurn;
}

function clickHandler(element) {
    // draw x or why
    DrawXorO(element.id)
}