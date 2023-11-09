import { Ionicons, Feather } from '@expo/vector-icons';
import React from 'react';

import { Container, NewsButton, SettNews, SettingsButton, SignInButton, TrialButton, UpgradeButton } from '../../../../src/components/menu.styles';
import { useTheme, Box, Text } from '../../../Theme/theme';

export default function Menu() {
  const theme = useTheme();
  return (
    <Box style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <Container>
        <TrialButton backgroundColor='white'>
          <Text color='black'>Start free trial</Text>
          <UpgradeButton backgroundColor='black'>
            <Text>Upgrade</Text>
          </UpgradeButton>
        </TrialButton>
        <SignInButton backgroundColor='linePrimary'>
          <Feather name="user" size={24} color={theme.colors.white} />
          <Text>Sign in</Text>
        </SignInButton>
        <SettNews>
          <SettingsButton backgroundColor='linePrimary'>
            <Ionicons name="settings-outline" size={24} color={theme.colors.white} />
            <Text>Settings</Text>
          </SettingsButton>
          <NewsButton backgroundColor='linePrimary'>
            <Ionicons name="newspaper-outline" size={24} color={theme.colors.white} />
            <Text>News</Text>
          </NewsButton>
        </SettNews>
      </Container>

    </Box>
  );
}
