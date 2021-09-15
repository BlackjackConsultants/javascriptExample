let playerOneTurn = true;
let cellLocation;
let boardState = [];
let row;
let col;
let winningPlayer;

function Initialize() {
    boardState.push(["", "", ""], ["", "", ""], ["", "", ""]);
}

/**
 * returns the winner player.
 */
function validateWinner() {
    let values = '';
    // validate col
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            values = values + boardState[col][row];
        }
        if (values === 'xxx') {
            return 1;
        }
        else if (values === '000') {
            return 2
        }
    }
    // validate rows
    values = '';
    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 3; row++) {
            values = values + boardState[col][row];
        }
        if (values === 'xxx') {
            return 1;
        }
        else if (values === '000') {
            return 2
        }
    }
    return -1;
}

/**
 * Check to see if player played in a valid cell.  It also check if someone won.
 * @param {*} element 
 * @returns 
 */
function ValidateEmptyCell(element) {
    // get location
    cellLocation = element.getAttribute('name');
    row = parseInt(cellLocation.substr(0, 1));
    col = parseInt(cellLocation.substr(1, 1));
    // validate if cell is taken.
    let cellValue = boardState[row][col];
    if (cellValue != "") {
        alert("cell taken");
        return false;
    }
    return true;
}

function DrawBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let cellElement = document.querySelector('[name="' + col.toString() + row.toString() + '"]');
            cellElement.textContent = boardState[col][row];
            console.log(`col: ${col} row: ${row} value: ${cellElement.textContent} el name: ${cellElement.getAttribute('name')}`)
        }
    }
}

/** 
 * saves the user play on board state
 **/
function SavePlayerMove() {
    boardState[row][col] = playerOneTurn == true ? 'x' : 'o';
}

function clickHandler(element) {
    if (ValidateEmptyCell(element) == true) {
        // validate passed
        SavePlayerMove();
        DrawBoard();
        winningPlayer = validateWinner();
        if (winningPlayer == -1) {
            ShowPlayerNumber();
            playerOneTurn = !playerOneTurn;
        }
        else {
            alert(`Player ${winningPlayer} has won the game`);
        }
    }
}

function ShowPlayerNumber() {
    let playerTurnElement = document.querySelector('.player-number');
    let playerNumber = playerOneTurn == true ? 1 : 2;
    playerTurnElement.textContent = playerNumber;
}

Initialize();
ShowPlayerNumber();