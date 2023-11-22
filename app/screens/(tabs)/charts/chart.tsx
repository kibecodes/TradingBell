import React from 'react';
import { Button } from 'react-native-paper';

import { useTheme, Box } from '../../../Theme/theme';
import { DisplayCompany } from '../../../api/fetch';

export default function Chart() {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Button
        onPress={() => DisplayCompany}
        style={{ backgroundColor: 'cyan' }}>
        FETCH
      </Button>
    </Box>
  );
}
