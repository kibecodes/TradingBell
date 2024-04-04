import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type CurrencyDetails = {
  __typename?: 'CurrencyDetails';
  close: Scalars['Int']['output'];
  open: Scalars['Int']['output'];
  volume: Scalars['Int']['output'];
};

export type Pair = {
  __typename?: 'Pair';
  currencyPair: Scalars['String']['output'];
  results: CurrencyDetails;
};

export type Query = {
  __typename?: 'Query';
  pairForWatchlist: Pair;
};

export type GetPairQueryVariables = Exact<{ [key: string]: never }>;

export type GetPairQuery = {
  __typename?: 'Query';
  pairForWatchlist: {
    __typename?: 'Pair';
    currencyPair: string;
    results: {
      __typename?: 'CurrencyDetails';
      open: number;
      close: number;
      volume: number;
    };
  };
};

export const GetPairDocument = gql`
  query GetPair {
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

/**
 * __useGetPairQuery__
 *
 * To run a query within a React component, call `useGetPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPairQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPairQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPairQuery, GetPairQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPairQuery, GetPairQueryVariables>(
    GetPairDocument,
    options,
  );
}
export function useGetPairLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPairQuery,
    GetPairQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPairQuery, GetPairQueryVariables>(
    GetPairDocument,
    options,
  );
}
export function useGetPairSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetPairQuery,
    GetPairQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPairQuery, GetPairQueryVariables>(
    GetPairDocument,
    options,
  );
}
export type GetPairQueryHookResult = ReturnType<typeof useGetPairQuery>;
export type GetPairLazyQueryHookResult = ReturnType<typeof useGetPairLazyQuery>;
export type GetPairSuspenseQueryHookResult = ReturnType<
  typeof useGetPairSuspenseQuery
>;
export type GetPairQueryResult = Apollo.QueryResult<
  GetPairQuery,
  GetPairQueryVariables
>;
