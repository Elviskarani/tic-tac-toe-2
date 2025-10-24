import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Theme, SymbolSet } from '../types';
import { THEMES, SYMBOL_SETS } from '../constants/theme';

interface SettingsScreenProps {
  selectedTheme: string;
  selectedSymbols: string;
  onThemeChange: (theme: string) => void;
  onSymbolsChange: (symbols: string) => void;
  onBack: () => void;
}

const IconComponent = ({ library, icon, size, color }: any) => {
  try {
    const baseProps = { name: icon, size, color };
    
    switch (library) {
      case 'Feather':
        return <Feather {...baseProps} strokeWidth={2} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons {...baseProps} />;
      case 'FontAwesome5':
        return <FontAwesome5 {...baseProps} />;
      case 'Ionicons':
        return <Ionicons {...baseProps} />;
      default:
        return null;
    }
  } catch (error) {
    return null;
  }
};

export default function SettingsScreen({
  selectedTheme,
  selectedSymbols,
  onThemeChange,
  onSymbolsChange,
  onBack,
}: SettingsScreenProps) {
  const theme = THEMES[selectedTheme];
  const currentSymbols = SYMBOL_SETS[selectedSymbols];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Feather name="arrow-left" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Settings</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Theme Section */}
        <View style={[styles.section, { backgroundColor: theme.statusBg }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Choose Theme</Text>
          <View style={styles.optionsGrid}>
            {Object.entries(THEMES).map(([key, themeData]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.themeOption,
                  { 
                    backgroundColor: themeData.paper,
                    borderColor: selectedTheme === key ? themeData.gridLine : 'transparent',
                    borderWidth: 3,
                  }
                ]}
                onPress={() => onThemeChange(key)}
              >
                <View style={styles.themePreview}>
                  <View style={[styles.previewSquare, { backgroundColor: themeData.background }]}>
                    <Feather name="x" size={20} color={themeData.xColor} />
                  </View>
                  <View style={[styles.previewSquare, { backgroundColor: themeData.background }]}>
                    <Feather name="circle" size={18} color={themeData.oColor} />
                  </View>
                </View>
                <Text style={[styles.optionName, { color: themeData.text }]}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Text>
                {selectedTheme === key && (
                  <View style={[styles.checkmark, { backgroundColor: themeData.winnerBg }]}>
                    <Feather name="check" size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Symbols Section */}
        <View style={[styles.section, { backgroundColor: theme.statusBg }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Choose Symbols</Text>
          <View style={styles.optionsGrid}>
            {Object.entries(SYMBOL_SETS).map(([key, symbolSet]) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.symbolOption,
                  { 
                    backgroundColor: theme.paper,
                    borderColor: selectedSymbols === key ? theme.gridLine : 'transparent',
                    borderWidth: 3,
                  }
                ]}
                onPress={() => onSymbolsChange(key)}
              >
                <View style={styles.symbolContent}>
                  <View style={styles.symbolPreview}>
                    <IconComponent
                      library={symbolSet.player1.library}
                      icon={symbolSet.player1.icon}
                      size={20}
                      color={theme.xColor}
                    />
                    <Text style={[styles.vs, { color: theme.text }]}>vs</Text>
                    <IconComponent
                      library={symbolSet.player2.library}
                      icon={symbolSet.player2.icon}
                      size={20}
                      color={theme.oColor}
                    />
                  </View>
                  <Text 
                    style={[styles.optionName, { color: theme.text }]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {symbolSet.name}
                  </Text>
                </View>
                {selectedSymbols === key && (
                  <View style={[styles.checkmark, { backgroundColor: theme.winnerBg }]}>
                    <Feather name="check" size={16} color="#FFF" />
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Preview Section */}
        <View style={[styles.section, { backgroundColor: theme.statusBg }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Preview</Text>
          <View style={[styles.previewBoard, { backgroundColor: theme.paper }]}>
            <View style={styles.previewRow}>
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player1.library}
                  icon={currentSymbols.player1.icon}
                  size={40}
                  color={theme.xColor}
                />
              </View>
              <View style={[styles.previewDivider, { backgroundColor: theme.gridLine }]} />
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player2.library}
                  icon={currentSymbols.player2.icon}
                  size={40}
                  color={theme.oColor}
                />
              </View>
              <View style={[styles.previewDivider, { backgroundColor: theme.gridLine }]} />
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player1.library}
                  icon={currentSymbols.player1.icon}
                  size={40}
                  color={theme.xColor}
                />
              </View>
            </View>
            <View style={[styles.previewDividerH, { backgroundColor: theme.gridLine }]} />
            <View style={styles.previewRow}>
              <View style={styles.previewCell} />
              <View style={[styles.previewDivider, { backgroundColor: theme.gridLine }]} />
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player1.library}
                  icon={currentSymbols.player1.icon}
                  size={40}
                  color={theme.xColor}
                />
              </View>
              <View style={[styles.previewDivider, { backgroundColor: theme.gridLine }]} />
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player2.library}
                  icon={currentSymbols.player2.icon}
                  size={40}
                  color={theme.oColor}
                />
              </View>
            </View>
            <View style={[styles.previewDividerH, { backgroundColor: theme.gridLine }]} />
            <View style={styles.previewRow}>
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player2.library}
                  icon={currentSymbols.player2.icon}
                  size={40}
                  color={theme.oColor}
                />
              </View>
              <View style={[styles.previewDivider, { backgroundColor: theme.gridLine }]} />
              <View style={styles.previewCell} />
              <View style={[styles.previewDivider, { backgroundColor: theme.gridLine }]} />
              <View style={styles.previewCell}>
                <IconComponent
                  library={currentSymbols.player1.library}
                  icon={currentSymbols.player1.icon}
                  size={40}
                  color={theme.xColor}
                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: theme.buttonBg }]}
          onPress={onBack}
        >
          <Text style={[styles.saveButtonText, { color: theme.buttonText }]}>
            Save & Return to Game
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    columnGap: 12,
  },
  themeOption: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  symbolOption: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 12,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  symbolContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  themePreview: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 8,
  },
  previewSquare: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolPreview: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    marginBottom: 4,
  },
  vs: {
    fontSize: 9,
    fontWeight: '600',
  },
  optionName: {
    fontSize: 9,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 2,
  },
  checkmark: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewBoard: {
    borderRadius: 12,
    padding: 10,
    alignSelf: 'center',
    width: 280,
    height: 280,
  },
  previewRow: {
    flexDirection: 'row',
    flex: 1,
  },
  previewCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewDivider: {
    width: 2,
    height: '100%',
  },
  previewDividerH: {
    height: 2,
    width: '100%',
  },
  saveButton: {
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});