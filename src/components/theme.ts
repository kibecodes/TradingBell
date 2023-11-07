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
  grayText: '#AAB3BB',
  blue: '#0F1D36', // for background
  darkBlue: '#0E1629', // foreground - tabBar, tabheader, trades 
};

export const theme = createTheme({
  colorScheme: 'light' as ColorSchemeName,
  colors: {
    mainBackground: palette.darkBlue,
    mainForeground: palette.blue,
    grey: palette.grayText,
    white: palette.white,
    black: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      color: 'white',
    },
    info: {
      color: 'lightGrey',
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
    secondaryBackground: palette.grayText,
  },
});

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = useThemeRS<Theme>;
