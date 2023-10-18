import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import TabNavigator from '../screens/(tabs)/tabsNavigator';


const client = new ApolloClient({
  uri: 'https://api.polygon.io/v1/open-close/AAPL/2023-10-06?adjusted=true&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U',
  cache: new InMemoryCache(),
})


export default function StackScreen() {
  return (
    <ApolloProvider client={client}>
      <TabNavigator />
    </ApolloProvider>
  );
}
