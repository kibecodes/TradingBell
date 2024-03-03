const gql = require("graphql-tag");

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
module.exports = typeDefs;