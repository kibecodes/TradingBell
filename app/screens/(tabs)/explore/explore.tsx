import React from 'react';

import { SearchBar } from './components/search.component';
import { useTheme, Box, Text } from '../../../Theme/theme';

export default function Explore() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Text style={{ fontSize: theme.textVariants.header.fontSize }}>search</Text>
      <SearchBar/>

      //** Handling graph ql schema definitions: */
      //** stocksTimer, multiplier, timespan, from, to */
    </Box>
  );
}
