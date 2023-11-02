import { StatusBar } from 'expo-status-bar';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { Appearance, Dimensions, View } from 'react-native';

export type ColorSchemeName = "dark" | "light";

interface ColorScheme {
  colorScheme: ColorSchemeName;
}

interface ColorSchemeContext extends ColorScheme {
  dispatch: (scheme: ColorScheme) => void;
}

//** sets an initial value for the colorScheme context */
const defaultValue: ColorScheme = {
  colorScheme: Appearance.getColorScheme() ?? "light",
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

//**reducer func - takes initial state and action of the same types */
const colorSchemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

export const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error('No ColorScheme context found');
  }
  const { colorScheme, dispatch } = ctx;
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

const { width, height } = Dimensions.get('window');

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
