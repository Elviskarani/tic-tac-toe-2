import { Theme } from '../types';

export const THEMES: Record<'notebook' | 'blueprint', Theme> = {
  notebook: {
    background: '#FDF6E3',
    paper: '#FFFEF7',
    text: '#28334A',
    gridLine: '#34495E',
    xColor: '#E74C3C',
    oColor: '#3498DB',
    buttonBg: '#ECF0F1',
    buttonText: '#2C3E50',
    winnerBg: '#2ECC71',
    statusBg: '#F8F9FA',
  },
  blueprint: {
    background: '#28334A',
    paper: '#1A2332',
    text: '#E8F4F8',
    gridLine: '#5DADE2',
    xColor: '#F39C12',
    oColor: '#48C9B0',
    buttonBg: '#34495E',
    buttonText: '#ECF0F1',
    winnerBg: '#16A085',
    statusBg: '#2C3E50',
  },
};