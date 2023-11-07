import React from 'react';

import { Box, Text, useTheme } from '../../../../src/components/theme';

export default function Search() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text style={{ fontSize: theme.textVariants.header.fontSize }}>search</Text>
    </Box>
  );
}
