let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let playersTurn = true;

const moveDialog = document.querySelector('.js-move-dialog');
const playButton = document.querySelector('.js-play-button');
const moveInput = document.querySelector('.js-move-input');
const displayBoard = document.querySelector('.js-display-board');

document.querySelector('.js-restart-button')
    .addEventListener('click', () => {
        resetGame();
    });
playButton.addEventListener('click', () => {
    playGame();
});
moveInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        playGame();
    }
});
moveDialog.innerHTML = 'It\'s player X Please enter row then column, each from 0, 1, or 2.';

printBoard();
function resetGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    printBoard();
}

function playGame() {
    let winner = '';

    playersMove();
    printBoard();

    if (isWon('X')) {
        winner = 'X';
    }

    if (isWon('O')) {
        winner = 'O';
    }

    if (winner !== '') {
        alert(`Player ${winner} won`);
        resetGame();
    } else if (isBoardFill()) {
        alert('Game over! It\'s a tie');
        resetGame();
    }
}

function printBoard() {
    let columnHtml = '';

    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {
            columnHtml += `<div>${board[row][column]}</div>`;
        }
        
        columnHtml += `${(row < board.length - 1 ? '<div> </div><div> </div><div> </div>' : '')}`;
    }

    displayBoard.innerHTML = columnHtml;
}

function playersMove() {
    //get players move
    const move = Number(moveInput.value);

    //extract move to row and column
    let row = Math.trunc(move / 10);
    let column = Math.trunc(move % 10);
    
    //check if move is valid
    if (row < 0 || column < 0 || row >= board.length || column >= board.length || isOccupied(row, column))
    {
        alert(row < 0 || column < 0 || row >= board.length || column >= board.length ? 'Invalid cell!' : 'The cell is already occupied.');
        return;
    }
    
    playMove(row, column); //play player move
    moveInput.value = '';
}

function playMove(row, column) {
    if(playersTurn)
    {
        board[row][column] = 'X';
        moveDialog.innerHTML = 'It\'s player O Please enter row then column, each from 0, 1, or 2.';
        playersTurn = false;
    } else {
        board[row][column] = 'O';
        moveDialog.innerHTML = 'It\'s player X Please enter row then column, each from 0, 1, or 2.';
        playersTurn = true;
    }
}

function isOccupied(row, column) {
    if (board[row][column] != ' ') {
        return true;
    } else {
        return false;
    }
}

function isBoardFill() {
    for (let row = 0; row < board.length; row++)
    {
        for (let column = 0; column < board.length; column++)
        {
            if (board[row][column] == ' ')
                return false;
        }
    }
    return true;
}

function isWon(player) {
    let row, column;
    for (row = 0; row < board.length; row++)
        if (board[row][0] == player && board[row][1] == player && board[row][2] == player)
            return true;

    for (column = 0; column < board.length; column++)
        if (board[0][column] == player && board[1][column] == player && board[2][column] == player)
            return true;

    if (board[0][0] == player && board[1][1] == player && board[2][2] == player)
        return true;

    if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
        return true;

    return false;
}