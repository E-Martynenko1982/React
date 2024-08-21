import React, { useState } from 'react';
import { calculateWinner } from './Helper';
import Board from './Board';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const currentBoard = history[stepNumber];
  const winner = calculateWinner(currentBoard);

  const handleClick = (index) => {
    const historyUpToNow = history.slice(0, stepNumber + 1);
    const currentBoard = historyUpToNow[stepNumber];
    const boardCopy = [...currentBoard];

    // Проверка: был ли клик по ячейке или игра завершена
    if (winner || boardCopy[index]) return;

    // Определение текущего хода
    boardCopy[index] = xIsNext ? 'X' : 'O';

    // Обновление состояния
    setHistory([...historyUpToNow, boardCopy]);
    setStepNumber(historyUpToNow.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const startNewGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const moves = history.map((_, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className='wrapper'>
      <button className='start__btn' onClick={startNewGame}>Очистити поле</button>
      <Board squares={currentBoard} click={handleClick} />
      <p className='game__info'>
        {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
      </p>
      <div className='game__history'>
        <ul>{moves}</ul>
      </div>
    </div>
  );
}

export default Game;



