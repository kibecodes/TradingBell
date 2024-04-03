import React, { useState } from 'react';

import { useTheme } from '../../../Theme/theme';
import { View } from 'react-native';
import { fetchData } from '../../../apollo/server/index';
import { Button } from 'react-native-paper';

export default function Ideas() {
  const theme = useTheme();
  const [data, setData] = useState(null);

  const renderData = () => {
    fetchData();
    setData(data);
  }

  return (
    <View style={{ backgroundColor: theme.colors.mainBackground }}>
      <Button children={undefined} onPress={() => renderData()} ></Button>
      {data}
    </View>
  )
}