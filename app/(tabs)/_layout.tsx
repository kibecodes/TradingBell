import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import TabNavigator from './screens/tabsNavigator';
import store from '../../redux/store';


const client = new ApolloClient({
  uri: 'https://api.polygon.io/v1/open-close/AAPL/2023-10-06?adjusted=true&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U',
  cache: new InMemoryCache(),
})


export default function StackScreen() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <TabNavigator />
      </ApolloProvider>
    </Provider>
  );
}
