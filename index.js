const create2DArr = (x, y) => {
    return Array(x).fill(null).map(() => Array(y).fill(0));
};

const createChessBoard = () => {
    return create2DArr(8, 8);
};

const chessBoard = createChessBoard();
console.log(chessBoard);