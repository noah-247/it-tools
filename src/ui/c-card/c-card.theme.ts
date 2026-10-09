import { defineThemes } from '../theme/theme.models';

export const { useTheme } = defineThemes({
  dark: {
    backgroundColor: '#0b0e1a',
    borderColor: '#252338',
  },
  light: {
    backgroundColor: '#ffffff',
    borderColor: '#efeff5',
  },
});
