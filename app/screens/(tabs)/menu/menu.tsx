import React from 'react';

import { useTheme, Box, Text } from '../../../Theme/theme';

export default function Menu() {
  const theme = useTheme();
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 , backgroundColor: theme.colors.mainBackground}}>
      <Text style={{ color: theme.colors.white }}>More</Text>
    </Box>
  );
}
