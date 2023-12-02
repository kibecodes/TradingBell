import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { Aggregate, useAggregateQuery } from './query';


export const client = new ApolloClient({
  uri: `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${from}/${to}?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U`,
  cache: new InMemoryCache()
})

export const QueryData = () => {
  const { loading, error, data } = useAggregateQuery(client);

  useEffect(() => {
    fetchData({
      stocksTicker: 'AAPL',
      multiplier: 10,
      timespan: 'day',
      from: '2023-01-01',
      to: '2023-12-31',
    });
  })
  
  if(loading) return <Text>... loading</Text>
  if(error) return <Text>Error: {error}</Text>

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