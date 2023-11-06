import React from 'react';

import { Box, Text, useTheme } from '../../../../src/components/theme';

export default function Alerts() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text style={{ fontSize: theme.textVariants.header.fontSize }}>alerts</Text>
    </Box>
  );
}