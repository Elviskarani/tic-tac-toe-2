import { useState, useEffect } from 'react';
import { Player } from '../types';
import { calculateWinner, checkDraw } from '../utils/gameHelpers';

interface UseGameLogicReturn {
  board: Player[];
  isXNext: boolean;
  winner: 'X' | 'O' | null;
  isDraw: boolean;
  winningLine: number[];
  selectedTheme: string;
  selectedSymbols: string;
  setSelectedTheme: (theme: string) => void;
  setSelectedSymbols: (symbols: string) => void;
  handlePress: (index: number) => void;
  resetGame: () => void;
  getStatusText: () => string;
}

export default function useGameLogic(): UseGameLogicReturn {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string>('notebook');
  const [selectedSymbols, setSelectedSymbols] = useState<string>('classic');

  useEffect(() => {
    const result = calculateWinner(board);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else if (checkDraw(board)) {
      setIsDraw(true);
    }
  }, [board]);

  const handlePress = (index: number): void => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
    setWinningLine([]);
  };

  const getStatusText = (): string => {
    if (winner) {
      const playerNum = winner === 'X' ? '1' : '2';
      return `Player ${playerNum} Wins!`;
    }
    if (isDraw) {
      return "It's a Draw!";
    }
    const playerNum = isXNext ? '1' : '2';
    const symbol = isXNext ? 'X' : 'O';
    return `Player ${playerNum}'s Turn (${symbol})`;
  };

  return {
    board,
    isXNext,
    winner,
    isDraw,
    winningLine,
    selectedTheme,
    selectedSymbols,
    setSelectedTheme,
    setSelectedSymbols,
    handlePress,
    resetGame,
    getStatusText,
  };
}