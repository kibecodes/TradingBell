const gql = require("graphql-tag");

// schema
export {};
const typeDefs = gql`
    type Query {
        pairForWatchlist: [Pair!]!
    }

    type Pair {
        currencyPair: String!
        results: CurrencyDetails!
    }

    type CurrencyDetails {
        open: Number!
        close: Number!
        volume: Number!
    }
`;
module.exports = { typeDefs };

// resolvers
const resolvers = {
    Query: {
            Pair() {
                return {
                    currencyPair: 'EURUSD',
                    results: !{}
                }
            },
            CurrencyDetails() {
                return {
                    open: 343,
                    close: 4543,
                    volume: 6569
                }
            }
    }
}
module.exports = resolvers;