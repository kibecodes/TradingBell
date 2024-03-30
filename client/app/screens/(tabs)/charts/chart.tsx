import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

import { useTheme, Box } from '../../../Theme/theme';

export default function Chart() {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.colors.mainBackground, flex: 1 }}>
      <Button
        onPress={() => console.log("PRESSED !!")}
        style={{ backgroundColor: 'cyan' }}>
        FETCH
      </Button>
      <Text>Apollo Go !</Text>
    </Box>
  );
}
