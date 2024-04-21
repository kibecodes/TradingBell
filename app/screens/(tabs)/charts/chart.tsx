import React from 'react';
import { Text } from 'react-native';

import { useTheme, Box } from '../../../Theme/theme';

export default function Chart() {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text>Apollo Go !</Text>
    </Box>
  );
}
