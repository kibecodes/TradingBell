import { InMemoryCache, ApolloClient, gql, useQuery } from '@apollo/client';
import { View, Text } from 'react-native';

type Aggregate = {
  stocksTicker: string,
  multipler: number,
  timespan: number, // float
  from: number,
  to: number
}

// how to pass type inferences - generic or ..

export const client = new ApolloClient({
  uri: `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
  cache: new InMemoryCache(),
});

type Query = {
  request_id: number
  ticker: string
  result: {
    vw: number
    v: number
  };
};

const GET_COMPANIES = gql`
    query GetCompanies {
        companies {
            request_id
            ticker
            results.vw
            results.v
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
      <Text>stock symbol: {company.ticker}</Text>
      <Text>average volume price: {company.result.vw}</Text>
      <Text>volume: {company.result.v}</Text>
    </View>
  ));
};
