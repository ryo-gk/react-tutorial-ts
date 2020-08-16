import React from 'react';
import styled from 'styled-components';

interface SquareProps {
  value: string|null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <_Square
      onClick={() => onClick() }
    >
      { value }
    </_Square>
  )
}

// Styled Component for Square
const _Square = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
  }
`

export default Square;