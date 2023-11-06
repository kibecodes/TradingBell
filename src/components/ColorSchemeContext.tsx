import { StatusBar } from 'expo-status-bar';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { Appearance, View } from 'react-native';

export type ColorSchemeName = 'light' | 'dark';

export interface ColorScheme {
  colorScheme: ColorSchemeName;
}
interface ColorSchemeContext extends ColorScheme {
  dispatch: (scheme: ColorScheme) => void;
}

const defaultValue: ColorScheme = {
  colorScheme: Appearance.getColorScheme() || 'light',
};

const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext)!;
  if (context === null) {
    throw new Error('No ColorScheme Context found');
  }
  const { colorScheme, dispatch } = context;
  const toggle = useCallback(async () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    dispatch({
      colorScheme: newColorScheme,
    });
  }, [colorScheme, dispatch]);
  return { colorScheme, toggle };
};

interface ColorSchemeProviderProps {
  children: ReactNode;
}

export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const [{colorScheme}, dispatch] = useReducer(colorSchemeReducer, defaultValue);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar
          style={colorScheme === 'light' ? 'dark' : 'light'}
        />
        <ColorSchemeContext.Provider
          value={{
            colorScheme,
            dispatch,
          }}>
          {children}
        </ColorSchemeContext.Provider>
      </View>
    </View>
  );
};
