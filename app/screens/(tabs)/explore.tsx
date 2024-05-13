import React from 'react';

import { useTheme, Box, Text } from '../../Theme/theme';

export default function Explore() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text style={{ fontSize: theme.textVariants.header.fontSize }}>
        search
      </Text>
    </Box>
  );
}
