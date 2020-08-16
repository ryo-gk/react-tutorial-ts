import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { calculateWinner } from '../utils/GameUtil'

interface Squares {
  squares: Array<string|null>;
}

const Game = () => {
  const [history, setHistory] = useState<Array<Squares>>([{ squares: Array(9).fill(null)}]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O'
    
    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const moves = history.map((step, move: number) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{ desc }</button>
      </li>
    )
  })
  const current = history[stepNumber]
  const winner = calculateWinner(current.squares);
  const status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <_Game>
        <_GameBoard>
          <Board 
            squares = {current.squares}
            onClick = {(i) => handleClick(i)}
          />
        </_GameBoard>
        <_GameInfo>
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </_GameInfo>
      </_Game>
  );
}

// Styled Component for Game
const _Game = styled.div`
  display: flex;
  flex-direction: row;
`;

const _GameBoard = styled.div`

`;

const _GameInfo = styled.div`
  margin-left: 20px;
`;

export default Game;