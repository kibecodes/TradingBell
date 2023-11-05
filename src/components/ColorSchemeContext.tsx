import { StatusBar } from 'expo-status-bar';
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { Appearance, View } from 'react-native';
interface ColorSchemeName {
  colorScheme: 'light' | 'dark';
}
interface ColorScheme {
  colorScheme: ColorSchemeName;
}
interface ColorSchemeContext extends ColorScheme {
  dispatch: (action: ColorScheme) => void;
}

const defaultValue: ColorSchemeName = {
  colorScheme: Appearance.getColorScheme() || 'light',
};

export const schemeReducer = (_: ColorScheme, colorScheme: ColorScheme) => {
  return colorScheme;
};

const ColorSchemeContext = createContext<ColorSchemeContext | null>(null);

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext)!;
  // if (context === null) {
  //   throw new Error('No Context found');
  // }
  const { colorScheme, dispatch } = context;
  const toggle = useCallback(async () => {
    const newColorScheme =
      colorScheme.colorScheme === 'light' ? 'dark' : 'light';
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
  const [colorScheme, dispatch] = useReducer(schemeReducer, defaultValue);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StatusBar
          style={colorScheme.colorScheme === 'light' ? 'dark' : 'light'}
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
