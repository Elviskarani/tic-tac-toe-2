import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Board from '@/components/Board';
import GameStatus from '@/components/GameStatus';
import NewGameButton from '@/components/NewGameButton';
import SettingsScreen from '@/components/SettingsScreen';
import useGameLogic from '@/hooks/useGameLogic';
import { THEMES, SYMBOL_SETS } from '@/constants/theme';

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  
  const {
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
  } = useGameLogic();

  const theme = THEMES[selectedTheme];
  const symbols = SYMBOL_SETS[selectedSymbols];

  if (showSettings) {
    return (
      <SettingsScreen
        selectedTheme={selectedTheme}
        selectedSymbols={selectedSymbols}
        onThemeChange={setSelectedTheme}
        onSymbolsChange={setSelectedSymbols}
        onBack={() => setShowSettings(false)}
      />
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={selectedTheme === 'notebook' || selectedTheme === 'candy' || selectedTheme === 'retro' ? 'dark-content' : 'light-content'} />
      
      <TouchableOpacity 
        style={[styles.settingsButton, { backgroundColor: theme.statusBg, borderColor: theme.gridLine }]}
        onPress={() => setShowSettings(true)}
      >
        <Feather name="settings" size={24} color={theme.text} />
      </TouchableOpacity>

      <GameStatus 
        statusText={getStatusText()}
        theme={theme}
      />

      <Board 
        board={board}
        winningLine={winningLine}
        onSquarePress={handlePress}
        theme={theme}
        xSymbol={symbols.player1}
        oSymbol={symbols.player2}
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
  settingsButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});