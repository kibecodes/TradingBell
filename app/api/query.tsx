import { gql, ApolloClient, ApolloQueryResult, InMemoryCache, HttpLink } from '@apollo/client';
import { useState, useRef } from 'react';


type Aggregate = {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

type QueryResult = {
  getAggregates: Aggregate[];
};

const GET_AGGREGATES = gql`
  query GetAggregates(
    $stocksTicker: String!
    $multiplier: Int!
    $timespan: String!
    $from: String!
    $to: String!
  ) {
    getAggregates(
      stocksTicker: $stocksTicker
      multiplier: $multiplier
      timespan: $timespan
      from: $from
      to: $to
    ) {
      v
      vw
      o
      c
      h
      l
      t
      n
    }
  }
`;

const createApolloClient = (uri: string) => {
  const link = new HttpLink({
    uri,
    useGETForQueries: true,
    headers: {
      Authorization: 'Bearer tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U'
    }
  });

    return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};


export const useAggregateQuery = (
  stocksTicker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string
) => {
  const uri = `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?adjusted=true&sort=asc&limit=120&apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`

  const clientRef = useRef<ApolloClient<any>>();
  const client = clientRef.current || createApolloClient(uri);
  clientRef.current = client;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<Aggregate[] | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result: ApolloQueryResult<QueryResult> = await client.query({
        query: GET_AGGREGATES,
        variables: {
          stocksTicker,
          multiplier,
          timespan,
          from,
          to,
        },
      });
      const newResult = result.data.getAggregates
      setData(newResult);
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  if(data){
    console.log(data);
  }else console.log('No data!')
  return { client, loading, error, fetchData, data };
};

export type { Aggregate, QueryResult };
export { GET_AGGREGATES };
