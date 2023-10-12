import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.polygon.io/v1/open-close/AAPL/2023-10-06?adjusted=true&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
            query GetCompanies {
                companies: {
                    symbol,
                    status,
                    preMarket
                }

            }
        `,
  })
  .then(result => console.log(result));
