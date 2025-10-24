export type Player = 'X' | 'O' | null;

export interface Theme {
  background: string;
  paper: string;
  text: string;
  gridLine: string;
  xColor: string;
  oColor: string;
  buttonBg: string;
  buttonText: string;
  winnerBg: string;
  statusBg: string;
}

export interface WinnerResult {
  winner: 'X' | 'O';
  line: number[];
}

export interface GameState {
  board: Player[];
  isXNext: boolean;
  winner: 'X' | 'O' | null;
  isDraw: boolean;
  winningLine: number[];
  isDarkTheme: boolean;
}