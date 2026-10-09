import type { GlobalThemeOverrides } from 'naive-ui';

export const lightThemeOverrides: GlobalThemeOverrides = {
  Menu: {
    itemHeight: '32px',
  },

  Layout: { color: '#f1f5f9' },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px' },
    },
  },
};

export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#a78bfa',
    primaryColorHover: '#c4b5fd',
    primaryColorPressed: '#8b5cf6',
    primaryColorSuppl: '#c4b5fd',
    bodyColor: '#03050c',
    cardColor: '#0b0e1a',
    modalColor: '#0b0e1a',
    popoverColor: '#0b0e1a',
    inputColor: '#101321',
    tableColor: '#0b0e1a',
    borderColor: '#252338',
    dividerColor: '#252338',
    textColorBase: '#f5f7ff',
    textColor1: '#f5f7ff',
    textColor2: 'rgba(245, 247, 255, 0.68)',
    textColor3: 'rgba(245, 247, 255, 0.6)',
    fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    borderRadius: '2px',
    boxShadow2: '0 0 0 1px #252338, 0 16px 48px rgba(0, 0, 0, 0.45)',
  },

  Button: {
    textColorPrimary: '#03050c',
    textColorHoverPrimary: '#03050c',
    textColorPressedPrimary: '#03050c',
    textColorFocusPrimary: '#03050c',
    textColorDisabledPrimary: '#03050c',
  },

  Notification: {
    color: '#0b0e1a',
  },

  AutoComplete: {
    peers: {
      InternalSelectMenu: { height: '500px', color: '#0b0e1a' },
    },
  },

  Menu: {
    itemHeight: '32px',
  },

  Layout: {
    color: 'transparent',
    siderColor: '#0b0e1a',
    siderBorderColor: '#252338',
  },

  Card: {
    color: '#0b0e1a',
    borderColor: '#252338',
  },

  Table: {
    tdColor: '#0b0e1a',
    thColor: '#101321',
    borderColor: '#252338',
  },

  Tooltip: {
    color: '#0b0e1a',
    textColor: '#f5f7ff',
  },
};
