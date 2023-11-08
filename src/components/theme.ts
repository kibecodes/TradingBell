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
  greenPrimary: '#22B496',
};

const theme = createTheme({
  colorScheme: 'dark' as ColorSchemeName,
  colors: {
    mainBackground: palette.darkBlue,
    mainForeground: palette.blue,
    grey: palette.grayText,
    white: palette.white,
    black: palette.black,
    greenPrimary: palette.greenPrimary
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

type Theme = typeof theme;

const darkTheme: Theme = createTheme({
  ...theme,
  colorScheme: 'light',
  colors: {
    ...theme.colors,
    mainBackground: palette.white,
    mainForeground: palette.white,
    white: palette.white,
    black: palette.black
  },
});

const Box = createBox<Theme>();
const Text = createText<Theme>();
const useTheme = useThemeRS<Theme>;
