import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { Text, View } from 'react-native';

import { Aggregate, GET_AGGREGATES } from './query';

const useAggregateQuery = (variables: {
  stocksTicker: string;
  multiplier: number;
  timespan: string;
  from: string;
  to: string;
}) => {
  const { stocksTicker, multiplier, timespan, from, to } = variables;
  
  const apiUri = `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`;

  const client = new ApolloClient({
    uri: apiUri,
    cache: new InMemoryCache()
  })
  return useQuery(GET_AGGREGATES, { variables });
};

export const QueryData = () => {
  const { loading, error, data } = useAggregateQuery({
    stocksTicker: 'AAPL',
    multiplier: 10,
    timespan: 'day',
    from: '2023-01-01',
    to: '2023-12-31'
  });
  
  if(loading) return <Text>... loading</Text>
  if(error) return <Text>Error: {error.message}</Text>

  const renderAggregates = (aggregates: Aggregate[]) => {
    return aggregates.map((aggregate, index) => (
      <View key={index}>
        <Text>Timestamp: {aggregate.timestamp}</Text>
        <Text>Open: {aggregate.open}</Text>
        <Text>High: {aggregate.high}</Text>
        <Text>Low: {aggregate.low}</Text>
        <Text>Close: {aggregate.close}</Text>
        <Text>Volume: {aggregate.volume}</Text>
      </View>
    ));
  };

  return (
    <View>
      {data && data.getAggregates && renderAggregates(data.getAggregates)}
    </View>
  )
}