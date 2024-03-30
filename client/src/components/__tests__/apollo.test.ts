import { makeExecutableSchema } from "@graphql-tools/schema";
import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from '@apollo/server';
import { gql } from '@apollo/client';
const { typeDefs } = require(require.resolve("./apollo/server/schema"));

const server = new ApolloServer({ typeDefs });
const { query } = createTestClient(server);

test("Validate GraphQL Schema", () => {
    const schema = makeExecutableSchema({
        typeDefs
    });
    expect(schema).toBeDefined();
});

test('Query Resolvers', async () => {
	const GET_DATA_QUERY = gql`
		query GetData {
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

	const { data } = await query({ query: GET_DATA_QUERY });
	expect(data).toBeDefined();
});