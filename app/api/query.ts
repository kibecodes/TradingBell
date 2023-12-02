import { useQuery, gql } from "@apollo/client";

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

export const useAggregateQuery = (variables: {
    stocksTicker: string
    multiplier: number;
    timespan: string;
    from: string;
    to: string;
}) => {
    return useQuery<QueryResult>(GET_AGGREGATES, { variables })
};

export type { Aggregate, QueryResult };
export { GET_AGGREGATES };



