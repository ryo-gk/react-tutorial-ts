import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Square 
        value={squares[i]} 
        onClick={() => onClick(i)}
      />
    )
  }

  return (
    <div>
      <_BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </_BoardRow>
      <_BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </_BoardRow>
      <_BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </_BoardRow>
    </div>
  )
}

// Styled Component for Board
const _BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

export default Board;