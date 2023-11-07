import React from 'react';

import { Box, Text, useTheme } from '../../../../src/components/theme';


export default function More() {
  const theme = useTheme();
  return (
    <Box style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 , backgroundColor: theme.colors.mainBackground}}>
      <Text style={{ color: theme.colors.white }}>More</Text>
    </Box>
  );
}
