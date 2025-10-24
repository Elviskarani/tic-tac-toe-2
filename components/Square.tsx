import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Player, Theme, SymbolConfig } from '../types';

interface SquareProps {
  value: Player;
  isWinning: boolean;
  onPress: () => void;
  theme: Theme;
  xSymbol: SymbolConfig;
  oSymbol: SymbolConfig;
}

const IconComponent = ({ library, icon, size, color }: any) => {
  const props = { name: icon, size, color, strokeWidth: 3 };
  
  switch (library) {
    case 'Feather':
      return <Feather {...props} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...props} />;
    case 'FontAwesome5':
      return <FontAwesome5 {...props} />;
    case 'Ionicons':
      return <Ionicons {...props} />;
    default:
      return null;
  }
};

export default function Square({ value, isWinning, onPress, theme, xSymbol, oSymbol }: SquareProps) {
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
        <IconComponent
          library={xSymbol.library}
          icon={xSymbol.icon}
          size={xSymbol.size}
          color={theme.xColor}
        />
      )}
      {value === 'O' && (
        <IconComponent
          library={oSymbol.library}
          icon={oSymbol.icon}
          size={oSymbol.size}
          color={theme.oColor}
        />
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