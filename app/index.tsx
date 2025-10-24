import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Board from '@/components/Board';
import GameStatus from '@/components/GameStatus';
import ThemeToggle from '@/components/ThemeToggle';
import NewGameButton from '@/components/NewGameButton';
import useGameLogic from '@/hooks/useGameLogic';
import { THEMES } from '@/constants/theme';

export default function App() {
  const {
    board,
    isXNext,
    winner,
    isDraw,
    winningLine,
    isDarkTheme,
    setIsDarkTheme,
    handlePress,
    resetGame,
    getStatusText,
  } = useGameLogic();

  const theme = isDarkTheme ? THEMES.blueprint : THEMES.notebook;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
      
      <ThemeToggle 
        isDarkTheme={isDarkTheme} 
        setIsDarkTheme={setIsDarkTheme}
        theme={theme}
      />

      <GameStatus 
        statusText={getStatusText()}
        theme={theme}
      />

      <Board 
        board={board}
        winningLine={winningLine}
        onSquarePress={handlePress}
        theme={theme}
      />

      <NewGameButton 
        onPress={resetGame}
        theme={theme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
});