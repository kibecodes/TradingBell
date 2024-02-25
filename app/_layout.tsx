import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { darkTheme, lightTheme } from './Theme/theme';
import { ColorSchemeProvider, useColorScheme } from '../src/components/ColorSchemeContext';
import client from './api/query';

const LayoutScreen = () => {
  const {colorScheme}  = useColorScheme();
  return (
    <ThemeProvider theme={ colorScheme === 'light' ? lightTheme : darkTheme}>
      <Stack>
        <Stack.Screen
          name="home/welcome"
          options={{
            title: 'Home',
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
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
    </ThemeProvider>
  );
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ColorSchemeProvider>
        <LayoutScreen />
      </ColorSchemeProvider>
    </ApolloProvider>
  );
}

export default App;