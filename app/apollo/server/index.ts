const { ApolloServer, gql } = require("@apollo/server");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }: any) => {
    console.log(`Server ready at ${url}`)
})