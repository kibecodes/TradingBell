import { gql, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const GET_DATA = gql`
    query GetData() {
        pairForWatchlist {
            currencyPair
            results {
                open
                close
                volume
            }
        }
    }
`;

const apiUri = '';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: apiUri,
    fetchOptions: {
      method: 'GET',
    },
    credentials: 'same-origin',
    headers: {
      Authorization: 'Bearer tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U',
    },
  }),
  cache: new InMemoryCache(),
});
