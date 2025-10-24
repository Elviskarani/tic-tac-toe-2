import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Square';
import { Player, Theme } from '../types';

interface BoardProps {
  board: Player[];
  winningLine: number[];
  onSquarePress: (index: number) => void;
  theme: Theme;
}

export default function Board({ board, winningLine, onSquarePress, theme }: BoardProps) {
  const renderSquare = (index: number) => {
    return (
      <Square
        key={index}
        value={board[index]}
        isWinning={winningLine.includes(index)}
        onPress={() => onSquarePress(index)}
        theme={theme}
      />
    );
  };

  const renderRow = (startIndex: number) => {
    return (
      <View style={styles.row}>
        {renderSquare(startIndex)}
        <View style={[styles.verticalLine, { backgroundColor: theme.gridLine }]} />
        {renderSquare(startIndex + 1)}
        <View style={[styles.verticalLine, { backgroundColor: theme.gridLine }]} />
        {renderSquare(startIndex + 2)}
      </View>
    );
  };

  return (
    <View style={[styles.board, { backgroundColor: theme.paper }]}>
      {renderRow(0)}
      <View style={[styles.horizontalLine, { backgroundColor: theme.gridLine }]} />
      {renderRow(3)}
      <View style={[styles.horizontalLine, { backgroundColor: theme.gridLine }]} />
      {renderRow(6)}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 320,
    height: 320,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  verticalLine: {
    width: 3,
    height: '100%',
    opacity: 0.7,
  },
  horizontalLine: {
    height: 3,
    width: '100%',
    opacity: 0.7,
  },
});
