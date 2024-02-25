import { ApolloClient, HttpLink, InMemoryCache, useQuery } from '@apollo/client';
import { GET_DATA } from './data';


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


export const fetchData = () => {
    const { loading, error, data } = useQuery(GET_DATA);

    return { loading, error, fetchData, data };
  }  

  export default client;