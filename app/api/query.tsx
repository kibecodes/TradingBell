import { gql, ApolloClient, ApolloQueryResult, InMemoryCache, HttpLink, ApolloError } from '@apollo/client';
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
      timestamp
      open
      high
      low
      close
      volume
    }
  }
`;

const createApolloClient = (uri: string) => {
  const link = new HttpLink({
    uri,
    useGETForQueries: true, // Indicates using GET for queries
  });

    return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    onError: (error: ApolloError) => {
      // Handle errors here if needed
      console.error('Apollo Client Error:', error);
    },
  });
};


export const useAggregateQuery = (
  stocksTicker: string,
  multiplier: number,
  timespan: string,
  from: string,
  to: string
) => {
  const uri = `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`

  const clientRef = useRef<ApolloClient<any>>();
  const client = clientRef.current || createApolloClient(uri);
  clientRef.current = client;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<Aggregate[] | null>(null);

  const fetchData = async () => {
    setLoading(true);
    console.log(loading);
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
      const objectNums = newResult.length;
      console.log(objectNums);
      setData(newResult);
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  };
  return { client, loading, error, data, fetchData };
};

export type { Aggregate, QueryResult };
export { GET_AGGREGATES };
