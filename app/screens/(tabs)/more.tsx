import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '../../components/theme';

export default function More() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }}>
      <Text>More</Text>
    </View>
  );
}
