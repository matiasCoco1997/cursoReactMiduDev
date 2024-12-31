import { useState } from 'react';
import { Square , WinnerModal } from './components';

import { TURNS } from './constants';
import { checkWinnerFrom, checkEndGame } from './logic/board.js';
import { saveBoardAndTurn, saveWinner, resetGameStorage } from './logic/storage.js';
import confetti from 'canvas-confetti';

import './App.css'


function App() {

  const [board, setBoard] = useState(() => {
      const boardFromStorage = localStorage.getItem('board');
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn');
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X
  });

  const [winner, setWinner] = useState( () => {
    const winnerFromStorage = localStorage.getItem('winner');
      return winnerFromStorage ? JSON.parse(winnerFromStorage) : null
  });

  //Actualiza Tablero
  const updateBoard = (index) => {
    if(board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    saveBoardAndTurn({board:newBoard, turn:newTurn}); 

    const newWinner = checkWinnerFrom(newBoard);
    if(newWinner) {
      confetti();
      setWinner(newWinner);
      saveWinner({winner: newWinner});   
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  }

  return (
    <main className='board'>
      <h1>Ta Te Ti</h1>
      <section className='game'>
        {
          board.map((square, index) => (
            <Square 
              key={index} 
              index={index} 
              updateBoard={updateBoard}>
              {square}
            </Square>
          ))
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
