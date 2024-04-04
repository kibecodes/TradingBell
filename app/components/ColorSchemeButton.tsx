import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

import { useColorScheme } from './ColorSchemeContext';
import { useTheme } from '../Theme/theme';

export const ColorSchemeButton = () => {
  const theme = useTheme();
  const { colorScheme, toggle } = useColorScheme();
  return (
    <Pressable onPress={() => toggle}>
      <Feather
        name={colorScheme === 'light' ? 'moon' : 'sun'}
        color={theme.colors.mainForeground}
      />
      size={32}
    </Pressable>
  );
};
