let playerOneTurn = true;
let cellLocation;

function DrawXorO(element) {
    cellLocation = element.getAttribute('name');
    let cellValue = (playerOneTurn == true) ? 'X' : 'O';
    element.textContent = cellValue;
    playerOneTurn = !playerOneTurn;
}

function clickHandler(element) {
    DrawXorO(element)
}