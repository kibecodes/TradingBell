import { gql, ApolloClient, ApolloQueryResult } from '@apollo/client';
import { useState } from 'react';

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

export const useAggregateQuery = (client: ApolloClient<any>) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<Aggregate[] | null>(null);

  const fetchData = async (variables: {
    stocksTicker: string;
    multiplier: number;
    timespan: string;
    from: string;
    to: string;
  }) => {
    setLoading(true);
    try {
      const result: ApolloQueryResult<QueryResult> = await client.query({
        query: GET_AGGREGATES,
        variables,
      });
      setData(result.data.getAggregates);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, data };
};

export type { Aggregate, QueryResult };
export { GET_AGGREGATES };
