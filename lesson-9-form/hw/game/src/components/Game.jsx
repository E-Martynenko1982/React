import React, { useState } from 'react';
import { calculateWinner } from '../Helper';
import Board from './Board';
import './Game.css'
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board]
    //визначити чи був клік по ячейці чи гра закінчена
    if (winner || boardCopy[index]) return
    // визначити чий хід
    boardCopy[index] = xIsNext ? 'X' : '0'
    //обновить
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  const startNewGame = () => {
    return (
      <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Очистити поле</button>
    )
  }
  return (
    <div className='wrapper'>
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className='game__info'>
        {winner ? 'Winner' + winner : 'Now is...' + (xIsNext ? 'X' : '0 ')}
      </p>
    </div >
  );
}

export default Game;


