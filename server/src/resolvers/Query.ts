import { QueryResolvers } from '../resolvers-types.generated';

const queryPairResolvers: QueryResolvers = {
  pairForWatchlist: () => {
    return [
      {
        currencyPair: 'AAPL',
        results: {
          open: 100,
          close: 200,
          volume: 500,
        },
      },
    ];
  },
};

export default queryPairResolvers;
