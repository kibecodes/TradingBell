import { StatusBar } from 'expo-status-bar';
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import type { ReactNode } from 'react';
import { Appearance, View } from 'react-native';

export type ColorSchemeName = 'light' | 'dark';

interface ColorScheme {
  colorScheme: ColorSchemeName;
}
interface ColorSchemeContext extends ColorScheme {
  dispatch: (scheme: ColorScheme) => void;
}

const defaultValue: ColorScheme = {
  colorScheme: Appearance.getColorScheme() ?? 'light',
};
console.log(Appearance.getColorScheme());


const ColorSchemeContext = createContext<ColorSchemeContext | null>(
  null,
);

const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);
  if (context === null) {
    throw new Error('No ColorScheme Context found').message;
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
  const [{ colorScheme }, dispatch] = useReducer(
    colorSchemeReducer,
    defaultValue,
  );
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
      <View style={{ flex: 1 }}>
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
