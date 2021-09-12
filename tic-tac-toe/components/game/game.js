let playerOneTurn = true;
let cellLocation;
let boardState = [];
let row;
let col;

function Initialize() {
    boardState.push(["", "", ""],["", "", ""],["", "", ""]);
}

function ValidatePlay(element) {
    // get location
    cellLocation = element.getAttribute('name');
    row = parseInt(cellLocation.substr(0,1));
    col = parseInt(cellLocation.substr(1,1));
    // validate if cell is taken.
    let cellValue = boardState[row][col];
    if (cellValue != "") {
        alert("cell taken");
        return;
    }
    // validate if game over

}

function DrawBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let cellElement = document.querySelector('[name="'+ col.toString() + row.toString() + '"]');            
            cellElement.textContent = boardState[col][row];
            console.log(`col: ${col} row: ${row} value: ${cellElement.textContent} el name: ${cellElement.getAttribute('name')}`)
        }        
    }
}

/** 
 * saves the user play on board state
 **/  
function SavePlayerMove() {
    boardState[row][col] = playerOneTurn == true ? 'x' : 'o' ;
}

function clickHandler(element) {
    ValidatePlay(element)
    SavePlayerMove();
    DrawBoard();
    ShowPlayerNumber();
    playerOneTurn = !playerOneTurn;
}

function ShowPlayerNumber() {
    let playerTurnElement = document.querySelector('.player-number');
    let playerNumber = playerOneTurn == true ? 1 : 2 ;
    playerTurnElement.textContent = playerNumber;
}

Initialize();
ShowPlayerNumber();