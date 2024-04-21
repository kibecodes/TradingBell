import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';

import { useTheme, Box, Text } from '../../../Theme/theme';
import {
  Brokers,
  CenterContainer,
  Container,
  FlexStart,
  NewsButton,
  SettNews,
  SettingsButton,
  SignInButton,
  Theme,
  TrialButton,
  UpgradeButton,
  FlexEnd,
  BottomContainer,
  Media,
  Stickers,
  About,
} from '../../../components/menu.styles';
import { Line } from '../../../utils/styles/line.styles';

export default function Menu() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
      <Container>
        <TrialButton backgroundColor="white">
          <Text color="black">Start free trial</Text>
          <UpgradeButton backgroundColor="black">
            <Text>Upgrade</Text>
          </UpgradeButton>
        </TrialButton>
        <SignInButton
          onPress={() => router.push('/home/welcome')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? theme.colors.linePrimary
                : theme.colors.mainBackground,
            },
          ]}
        >
          <Feather name="user" size={24} color={theme.colors.white} />
          <Text>Sign in</Text>
        </SignInButton>
        <SettNews>
          <SettingsButton
            onPress={() => router.push('/home/colorset')}
            style={({ pressed }) => {
              return [
                {
                  backgroundColor: pressed
                    ? theme.colors.linePrimary
                    : theme.colors.mainBackground,
                },
              ];
            }}
          >
            <Ionicons
              name="settings-outline"
              size={24}
              color={theme.colors.white}
            />
            <Text>Settings</Text>
          </SettingsButton>
          <NewsButton backgroundColor="linePrimary">
            <Ionicons
              name="newspaper-outline"
              size={24}
              color={theme.colors.white}
            />
            <Text>News</Text>
          </NewsButton>
        </SettNews>
      </Container>

      <CenterContainer>
        <Brokers>
          <FlexStart>
            <MaterialCommunityIcons
              name="account-cash-outline"
              size={24}
              color={theme.colors.white}
            />
            <Text>Brokers</Text>
          </FlexStart>
          <SimpleLineIcons
            name="arrow-right"
            size={14}
            color={theme.colors.white}
          />
        </Brokers>
        <Line style={{ backgroundColor: theme.colors.linePrimary }} />
        <Theme
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? theme.colors.linePrimary
                : theme.colors.mainBackground,
            },
          ]}
        >
          <FlexStart>
            <Ionicons
              name="moon-outline"
              size={24}
              color={theme.colors.white}
            />
            <Text>Theme</Text>
          </FlexStart>
          <FlexEnd>
            <Text>Light</Text>
            <SimpleLineIcons
              name="arrow-right"
              size={14}
              color={theme.colors.white}
            />
          </FlexEnd>
        </Theme>
        <Line style={{ backgroundColor: theme.colors.linePrimary }} />
      </CenterContainer>

      <BottomContainer>
        <Media>
          <FlexStart>
            <FontAwesome name="at" size={24} color={theme.colors.white} />
            <Text>We're on social media</Text>
          </FlexStart>
          <SimpleLineIcons
            name="arrow-right"
            size={14}
            color={theme.colors.white}
          />
        </Media>
        <Stickers>
          <FlexStart>
            <MaterialCommunityIcons
              name="sticker-circle-outline"
              size={24}
              color={theme.colors.white}
            />
            <Text>TV Stickers</Text>
          </FlexStart>
          <SimpleLineIcons
            name="arrow-right"
            size={14}
            color={theme.colors.white}
          />
        </Stickers>
        <About>
          <FlexStart>
            <MaterialIcons
              name="info-outline"
              size={24}
              color={theme.colors.white}
            />
            <Text>About</Text>
          </FlexStart>
          <SimpleLineIcons
            name="arrow-right"
            size={14}
            color={theme.colors.white}
          />
        </About>
      </BottomContainer>
    </Box>
  );
}
