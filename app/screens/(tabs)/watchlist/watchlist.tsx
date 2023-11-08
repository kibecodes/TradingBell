import React from 'react';

import { useTheme, Box, Text } from '../../../Theme/theme';

export default function Watchlist() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text style={{ color: theme.colors.mainForeground, textAlign: 'center' }}>watchlist</Text>
    </Box>
  );
}
