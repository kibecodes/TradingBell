import { QueryResolvers } from '../resolvers-types.generated';

export const API_KEY = process.env.API_KEY;

interface ApiResolver {
  ticker: string;
  results: [
    {
      o: number;
      c: number;
      v: number;
    },
  ];
}

const queryPairResolvers: QueryResolvers = {
  pairForWatchlist: async () => {
    try {
      const api = 'https://api.polygon.io';
      const response = await fetch(
        `${api}/v2/aggs/ticker/C:EURUSD/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
      );
      const responseData: ApiResolver = await response.json();

      const currencyPair = responseData.ticker;
      const result = responseData.results[0];

      return {
        currencyPair,
        results: {
          __typename: 'CurrencyDetails',
          open: result.o,
          close: result.c,
          volume: result.v,
        },
      };
    } catch (error: unknown) {
      throw new Error('Failed to fetch pair data');
    }
  },
};

export default queryPairResolvers;
