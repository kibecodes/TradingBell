import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '../../../Theme/theme';

export default function Ideas() {
  const theme = useTheme();
  const [data, setData] = useState(null);

  return (
    <View style={{ backgroundColor: theme.colors.mainBackground }}>
      <Text>Write down your future ideas</Text>
    </View>
  );
}
