const create2DArr = (x, y) => {
    return Array(x).fill(null).map(() => Array(y).fill(0));
};

const createChessBoard = (rowNum, colNum) => {
    return create2DArr(rowNum, colNum);
};

const printChessBoard = () => {
    console.log('');
    console.log(chessBoard);
    console.log('');
};

const putQueen = (board, row, col) => {
    board[row][col] = 1;
};

const pickupQueen = (board, row, col) => {
    board[row][col] = 0;
};

const isObeyRule = (board, row, col) => {
    let noInOneRow = board[row].filter((c, index) => col !== index && c === 1).length <= 0;

    if (!noInOneRow) {
        return false;
    }

    let noInOneCol = true;
    for (let i = 0; i < maxRowNum; i++) {
        if (i === row) {
            continue;
        }
        if (board[i][col] === 1) {
            noInOneCol = false;
            break;
        }
    }

    if (!noInOneCol) {
        return false;
    }

    let noInOneSlash = true;
    let i = 1;
    while (row - i >= 0 && col - i >= 0) {
        if (board[row - i][col - i] === 1) {
            noInOneSlash = false;
            break;
        } else {
            i++;
        }
    }

    if (!noInOneSlash) {
        return false;
    }

    i = 1;
    while (row - i >= 0 && col + i < maxColNum) {
        if (board[row - i][col + i] === 1) {
            noInOneSlash = false;
            break;
        } else {
            i++;
        }
    }

    if (!noInOneSlash) {
        return false;
    }

    i = 1;
    while (row + i < maxRowNum && col - i >= 0) {
        if (board[row + i][col - i] === 1) {
            noInOneSlash = false;
            break;
        } else {
            i++;
        }
    }

    if (!noInOneSlash) {
        return false;
    }

    i = 1;
    while (row + i < maxRowNum && col + i < maxColNum) {
        if (board[row + i][col + i] === 1) {
            noInOneSlash = false;
            break;
        } else {
            i++;
        }
    }

    if (!noInOneSlash) {
        return false;
    }

    return true;
};

const running = (row) => {
    if (row === maxRowNum) {
        return true;
    }
    attempt++;
    for (let col = 0; col < maxColNum; col++) {
        putQueen(chessBoard, row, col);
        if (isObeyRule(chessBoard, row, col)) {
            let nextrow = row + 1;
            let result = running(nextrow);
            if (result) {
                return result;
            }
        }
        pickupQueen(chessBoard, row, col);
    }

    console.log(' ');
    console.log(chessBoard);
    console.log(' ');

    return false;
};

const maxRowNum = 8,
    maxColNum = 8;
const queensNumber = 8;
const chessBoard = createChessBoard(maxRowNum, maxColNum);

let row = 0;
let attempt = 0;

running(attempt, row);

console.log(`total attempt: ${attempt}`);
printChessBoard();