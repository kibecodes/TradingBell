import React, { useState, useEffect } from 'react';

import { useTheme, Box } from '../../../Theme/theme';
import { fetchData } from '../../../apollo/client/query';
import { View, Text } from 'react-native';

export default function Ideas() {
  const theme = useTheme();
  const [data, setData] = useState(null);

  const [forexTicker, setForexTicker] = useState('C:EURUSD');
  const [multiplier, setMultiplier] = useState(1);
  const [timespan, setTimespan] = useState('day');
  const [from, setFrom] = useState('2023-01-09');
  const [to, setTo] = useState('2023-01-09');

  useEffect(() => {
    fetchDataAndUpdateState();
  }, [forexTicker, multiplier, timespan, from, to])

  const fetchDataAndUpdateState = async ()=> {
      try {
        const result = await fetchData();
        const fetchedData = result.data
        setData(fetchedData); 
      } catch (error) {
        console.error('Error fetching data:', error)
      }
      

      return (
        <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
          {
            data ? (
              <View>
                <Text>Currency Pair: {data.currencyPair}</Text>
                <Text>Open: {data.results.open}</Text>
                <Text>Close: {data.results.close}</Text>
                <Text>Volume: {data.results.volume}</Text>
              </View>
            ) : (
              <Text>Loading ...</Text>
            )
          }
        </Box>
      );
    }

  }