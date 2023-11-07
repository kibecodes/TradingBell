import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';

import { ColorSchemeProvider, useColorScheme } from '../src/components/ColorSchemeContext';
import { darkTheme, theme } from '../src/components/theme';

const LayoutScreen = () => {
  const {colorScheme}  = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
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