import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Player, Theme } from '../types';

interface SquareProps {
  value: Player;
  isWinning: boolean;
  onPress: () => void;
  theme: Theme;
}

export default function Square({ value, isWinning, onPress, theme }: SquareProps) {
  return (
    <TouchableOpacity
      style={[
        styles.square,
        { backgroundColor: isWinning ? theme.winnerBg : 'transparent' }
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {value === 'X' && (
        <Feather name="x" size={60} color={theme.xColor} strokeWidth={3} />
      )}
      {value === 'O' && (
        <Feather name="circle" size={56} color={theme.oColor} strokeWidth={3} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
