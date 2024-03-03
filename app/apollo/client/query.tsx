import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";


const GET_DATA = gql`
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

let apiUri = '';

export const client = new ApolloClient({
    link: new HttpLink({
      uri: apiUri,
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

  export const fetchData = async () => {
    const forexTicker = 'C:EURUSD' 
    const multiplier = 1
    const timespan = 'day'
    const from = '2023-01-09'
    const to = '2023-01-09'

    try {
      apiUri = `https://api.polygon.io/v2/aggs/ticker/${forexTicker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`;
      
      const response = await client.query({
        query: GET_DATA, 
        variables: {
          forexTicker, multiplier, timespan, from, to
        }
      });

      console.log(response);
      return response;
      
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error;
    }
  }