import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Theme } from '../types';

interface GameStatusProps {
  statusText: string;
  theme: Theme;
}

export default function GameStatus({ statusText, theme }: GameStatusProps) {
  return (
    <View style={[styles.statusContainer, { backgroundColor: theme.statusBg }]}>
      <Text style={[styles.statusText, { color: theme.text }]}>
        {statusText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

