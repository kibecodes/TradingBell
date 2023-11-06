import React from 'react';

import { Box, Text, useTheme } from '../../../../src/components/theme';

export default function Search() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground }}>
      <Text style={{ color: theme.colors.mainForeground }}>search</Text>
    </Box>
  );
}
