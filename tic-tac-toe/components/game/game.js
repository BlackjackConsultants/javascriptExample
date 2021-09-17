let playerOneTurn = true;
let cellLocation;
let boardState = [];
let row;
let col;
let winningPlayer;
const emptyCellValue = '.';

function Initialize() {
    boardState.push([emptyCellValue, emptyCellValue, emptyCellValue], [emptyCellValue, emptyCellValue, emptyCellValue], [emptyCellValue, emptyCellValue, emptyCellValue]);
}

/**
 * returns the winner player.
 */
function validateWinner() {
    let rowvalues = '';
    let colvalues = '';
    // validate col
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            colvalues = colvalues + boardState[col][row];
            rowvalues = rowvalues + boardState[row][col];
            if (col === 2) {
                console.log(`appending colvalues -> ${colvalues}`);
                console.log(`appending rowvalues -> ${rowvalues}`);
                if (rowvalues === 'xxx' || colvalues === 'xxx') {
                    return 1;
                }
                else if (rowvalues === 'ooo' || colvalues === 'ooo') {
                    return 2
                }
                rowvalues = '';
                colvalues = '';
            }
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
    if (cellValue != emptyCellValue) {
        alert("cell taken");
        return false;
    }
    return true;
}

function DrawBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let cellElement = document.querySelector('[name="' + col.toString() + row.toString() + '"]');
            cellElement.textContent = (boardState[col][row] == emptyCellValue) ? '' :  boardState[col][row];
            // console.log(`col: ${col} row: ${row} value: ${cellElement.textContent} el name: ${cellElement.getAttribute('name')}`)
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