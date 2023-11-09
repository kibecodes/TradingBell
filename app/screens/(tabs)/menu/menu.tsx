import { Ionicons, Feather } from '@expo/vector-icons';
import React from 'react';

import { Container, NewsButton, SettNews, SettingsButton, SignInButton, TrialButton } from '../../../../src/components/menu.styles';
import { useTheme, Box, Text } from '../../../Theme/theme';

export default function Menu() {
  const theme = useTheme();
  return (
    <Box style={{ flex: 1, paddingHorizontal: 10, backgroundColor: theme.colors.mainBackground }}>
      <Container>
        <TrialButton>
          <Text>Start free trial</Text>
        </TrialButton>
        <SignInButton>
          <Text>Sign in</Text>
          <Feather name="user" size={24} color="black" />
        </SignInButton>
        <SettNews>
          <SettingsButton>
            <Text>Settings</Text>
            <Ionicons name="settings-outline" size={24} color="black" />
          </SettingsButton>
          <NewsButton>
            <Text>News</Text>
            <Ionicons name="newspaper-outline" size={24} color="black" />
          </NewsButton>
        </SettNews>
      </Container>

    </Box>
  );
}
