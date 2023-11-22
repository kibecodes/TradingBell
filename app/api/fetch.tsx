import { InMemoryCache, ApolloClient, gql, useQuery } from '@apollo/client';
import { View, Text } from 'react-native';

export const client = new ApolloClient({
  uri: 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U',
  cache: new InMemoryCache(),
});

type Company = {
  request_id: number;
  ticker: string;
  result: {
    vw: number;
  };
};

const GET_COMPANIES = gql`
    query GetCompanies {
        companies {
            request_id
            ticker
            results.vw
        }
    }
`;

export const DisplayCompany = () => {
  const { loading, error, data } = useQuery(GET_COMPANIES);
  console.log(data);

  if (loading) return <Text>... Loading</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return data.companies.map((company: Company) => (
    <View key={company.request_id}>
      <Text>{company.ticker}</Text>
      <Text>{company.result.vw}</Text>
    </View>
  ));
};
