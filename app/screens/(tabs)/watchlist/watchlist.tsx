import React from 'react';
import { View, Text } from 'react-native';

import { theme } from '../../../../src/components/theme';

export default function Watchlist() {
  return (
    <View style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text style={{ color: theme.colors.mainForeground, textAlign: 'center' }}>watchlist</Text>
    </View>
  );
}
