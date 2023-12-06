import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

import { useTheme, Box } from '../../../Theme/theme';
import { useAggregateQuery } from '../../../api/query';

export default function Chart() {
  const theme = useTheme();
  const { fetchData } = useAggregateQuery(
    'AAPL',
    1,
    'minute',
    '2021-01-01',
    '2021-01-02'
  );
  
  useEffect(() => {
    console.log("component rendered !!")
    fetchData();
  }, []);

  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Button
        onPress={fetchData}
        style={{ backgroundColor: 'cyan' }}>
        FETCH
      </Button>
      <Text>Apollo Go !</Text>
    </Box>
  );
}
