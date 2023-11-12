import { InMemoryCache, ApolloClient, gql  } from "@apollo/client";

export const client = new ApolloClient({
    uri: "",
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            query GetData {
                companies {
                    id
                    name
                    description
                    photo
                }
            }
        `,
    })
.then((result) => console.log(result));