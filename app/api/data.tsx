import { gql } from "@apollo/client";

export type Data = {
  ticker: string
  results: {
    v: any
    vw: number
    o: number
    c: number
    h: number
    l: number
  }
};

export type QueryResult = {
  getData: Data[];
};

export const GET_DATA = gql`
  query GetData(
    $stocksTicker: string!
    $multiplier: number!
    $timespan: string!
    $from: string!
    $to: string!
  ) {
    getData(
      stock: $stocksTicker
      multiplier: $muliplier
      period: $timespan
      from: $from
      to: $to
    ) {
        data {
            ticker
            results {
                v
                vw
                o
                c
                h
                l
            }
        }
    }
  }
`;
