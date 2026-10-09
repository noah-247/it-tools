import { defineThemes } from '../theme/theme.models';
import { appThemes } from '../theme/themes';

export const { useTheme } = defineThemes({
  dark: {
    background: appThemes.dark.background,
    borderColor: '#252338',
  },
  light: {
    background: appThemes.light.background,
    borderColor: '#efeff5',
  },
});
