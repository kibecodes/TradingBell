import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';

import { useColorScheme } from '../src/components/ColorSchemeContext';
import { darkTheme, theme } from '../src/components/theme';

export default function LayoutScreen() {
  const { colorScheme } = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === "light" ? darkTheme : theme}>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="screens"
          options={{
            title: 'Screens',
            headerShown: true
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
