import {
  createTheme,
  createBox,
  createText,
  useTheme as useThemeRS,
} from '@shopify/restyle';

import { ColorSchemeName } from '../components/ColorSchemeContext';

const palette = {
  bluePrimary: '#0E1629',
  blueLight: '#0F1D36',

  grayText: '#AAB3BB',
  greenPrimary: '#22B496',
  redPrimary: '#DC4453',
  linkText: '#1434A4',
  linkTextSecondary: '#1F51FF',
  linePrimary: '#AAB3BB',

  white: '#F0F2F3',
  black: '#0B0B0B',
};

export const darkTheme = createTheme({
  colorScheme: 'dark' as ColorSchemeName,
  colors: {
    mainBackground: palette.bluePrimary,
    mainForeground: palette.blueLight,
    cardPrimaryBackground: palette.bluePrimary,

    grayText: palette.grayText,

    greenPrimary: palette.greenPrimary,
    redPrimary: palette.redPrimary,
    linkText: palette.white,
    linkTextSecondary: palette.linkTextSecondary,
    linePrimary: palette.blueLight,

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
    header: {
      fontWeight: '800',
      fontSize: 30,
      fontFamily: 'SFProDisplayBold',
    },
    trade: {
      fontWeight: '800',
      fontSize: 16,
      fontFamily: 'SFProDisplayBold',
    },
    tradeInfo: {
      color: 'grayText',
      fontSize: 16,
      fontFamily: 'SFProDisplayBold',
    },
    broker: {
      fontWeight: '400',
      fontSize: 20,
      fontFamily: 'SFProDisplayBold',
    },
    brokerInfo: {
      color: 'grayText',
      fontSize: 16,
      fontFamily: 'SFProDisplayBold',
    },
  },
});

export type Theme = typeof darkTheme;

export const lightTheme: Theme = createTheme({
  ...darkTheme,
  colorScheme: 'light',
  colors: {
    ...darkTheme.colors,
    mainBackground: palette.white,
    mainForeground: palette.white,
    cardPrimaryBackground: palette.white,

    greenPrimary: palette.greenPrimary,
    redPrimary: palette.redPrimary,
    linkText: palette.linkText,
    linePrimary: palette.linePrimary,

    white: palette.black,
    black: palette.white,
  },
});

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = useThemeRS<Theme>;
