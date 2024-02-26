import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';


import { darkTheme, lightTheme } from './Theme/theme';
import { ColorSchemeProvider, useColorScheme } from '../src/components/ColorSchemeContext';


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
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U',
      fetchOptions: {
        method: 'GET'
      },
      credentials: 'same-origin',
      headers: {
        Authorization: 'Bearer tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U'
      },
    }),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <ColorSchemeProvider>
        <LayoutScreen />
      </ColorSchemeProvider>
    </ApolloProvider>
  );
}

export default App;