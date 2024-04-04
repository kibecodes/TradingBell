import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '../../../Theme/theme';

export default function Ideas() {
  const theme = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.mainBackground }}>
      <Text>Write down your future ideas</Text>
    </View>
  );
}
