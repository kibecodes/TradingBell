import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';

import { darkTheme, lightTheme } from './Theme/theme';
import { ColorSchemeProvider, useColorScheme } from '../src/components/ColorSchemeContext';

const LayoutScreen = () => {
  const {colorScheme}  = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? lightTheme : darkTheme}>
      <Stack>
        <Stack.Screen 
          name='home/welcome'
          options={{
            title: 'Welcome',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="screens"
          options={{
            title: 'Screens',
            headerShown: false
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <ColorSchemeProvider>
      <LayoutScreen />
    </ColorSchemeProvider>
  );
}

export default App;