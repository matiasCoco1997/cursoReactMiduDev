import { useState } from 'react';
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBOS= [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
]


const Square = ({children, isSelected, updateBoard, index}) => {
  const className = "square" + (isSelected ? ' is-selected' : '');
  
  const handleClick = () => {
    updateBoard(index);
  }
  
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  //Verifica Ganador
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return board[a];
      }
    }
    return null;
  }

  const checkEndGame = (boardToCheck) => {
    for (const square of boardToCheck) {
      if(!square) {
        return false;
      }
    }
    return true;
  }

  //Actualiza Tablero
  const updateBoard = (index) => {
    if(board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if(newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
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

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganador:'
                }
              </h2>     

                {
                  winner === false ? null :
                  <header className='win'>
                    {winner && <Square>{winner}</Square>}
                  </header>
                }
              

              <footer>
                <button onClick={resetGame}>Reiniciar juego</button>
              </footer> 
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
