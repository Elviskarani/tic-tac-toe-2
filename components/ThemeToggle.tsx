import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Theme } from '../types';

interface ThemeToggleProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
  theme: Theme;
}

export default function ThemeToggle({ isDarkTheme, setIsDarkTheme, theme }: ThemeToggleProps) {
  return (
    <View style={[styles.themeToggle, { 
      backgroundColor: theme.statusBg,
      borderColor: theme.gridLine,
    }]}>
      <View style={styles.iconContainer}>
        {isDarkTheme ? (
          <MaterialCommunityIcons 
            name="file-document-outline" 
            size={20} 
            color={theme.gridLine} 
          />
        ) : (
          <Feather 
            name="sun" 
            size={20} 
            color={theme.xColor} 
          />
        )}
      </View>
      
      <Switch
        value={isDarkTheme}
        onValueChange={setIsDarkTheme}
        trackColor={{ false: '#BDC3C7', true: '#5DADE2' }}
        thumbColor={isDarkTheme ? '#ECF0F1' : '#f4f3f4'}
        ios_backgroundColor="#BDC3C7"
      />
      
      <View style={styles.iconContainer}>
        {isDarkTheme ? (
          <MaterialCommunityIcons 
            name="floor-plan" 
            size={20} 
            color={theme.gridLine} 
          />
        ) : (
          <Feather 
            name="moon" 
            size={20} 
            color={theme.oColor} 
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  themeToggle: {
    position: 'absolute',
    top: 50,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

