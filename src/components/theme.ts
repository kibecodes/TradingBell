import {
  createTheme,
  createBox,
  createText,
  useTheme as useThemeRS,
} from '@shopify/restyle';

import { ColorSchemeName } from './ColorSchemeContext';

const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3',
  lightGray: 'rgba(0, 0, 0, 0.04)',
  darkGray: '#3B3B3B',
};

export const theme = createTheme({
  colorScheme: 'light' as ColorSchemeName,
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    secondaryBackground: palette.lightGray,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      color: 'mainForeground',
    },
    header: {
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily: 'SFProDisplayBold',
    },
    item: {
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'SFProDisplayBold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = createTheme({
  ...theme,
  colorScheme: 'dark',
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    secondaryBackground: palette.darkGray,
  },
});

export const box = createBox<Theme>();
export const text = createText<Theme>();
export const useTheme = useThemeRS<Theme>;