import { Player, WinnerResult } from '../types';

export const calculateWinner = (squares: Player[]): WinnerResult | null => {
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a] as 'X' | 'O', line };
    }
  }
  return null;
};

export const checkDraw = (squares: Player[]): boolean => {
  return squares.every(square => square !== null);
};