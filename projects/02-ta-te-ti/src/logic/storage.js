export const saveBoardAndTurn = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board));
    window.localStorage.setItem('turn', JSON.stringify(turn));
}

export const saveWinner = ({winner}) => {
    window.localStorage.setItem('winner', JSON.stringify(winner));  
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
    window.localStorage.removeItem('winner');
}