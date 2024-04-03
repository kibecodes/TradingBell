import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';

import {
  Title,
  SignText,
  GoogleLinkButton,
  LinkButton,
  EmailButton,
} from '../../src/components/welcome.styles';
import { Box, Text, useTheme } from '../Theme/theme';
import { Line } from '../utils/components/line.styles';

export default function WelcomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: theme.colors.mainBackground,
        gap: 20,
      }}
    >
      <Box style={{ alignSelf: 'flex-start' }}>
        <AntDesign
          name="arrowleft"
          size={24}
          style={{ color: theme.colors.white }}
          onPress={() => router.back()}
        />
      </Box>

      <Title style={{ color: theme.colors.white }}>
        Welcome to TradingBell
      </Title>
      <SignText style={{ color: theme.colors.white }}>Sign up with</SignText>
      <GoogleLinkButton>
        <AntDesign name="google" size={20} style={{ color: 'black' }} />
        <Text style={{ alignSelf: 'center' }}>Google</Text>
      </GoogleLinkButton>
      <Box
        style={{
          flexDirection: 'row',
          gap: 4,
        }}
      >
        <LinkButton>
          <FontAwesome name="facebook-square" size={20} color="black" />
        </LinkButton>
        <LinkButton>
          <AntDesign name="twitter" size={20} color="black" />
        </LinkButton>
        <LinkButton>
          <FontAwesome name="linkedin-square" size={20} color="black" />
        </LinkButton>
        <LinkButton>
          <FontAwesome5 name="yahoo" size={20} color="black" />
        </LinkButton>
        <LinkButton>
          <FontAwesome5 name="apple-alt" size={20} color="black" />
        </LinkButton>
      </Box>

      <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Line style={{ backgroundColor: theme.colors.white }} />
        <Box>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: theme.colors.white,
            }}
          >
            or
          </Text>
        </Box>
        <Line style={{ backgroundColor: theme.colors.white }} />
      </Box>

      <EmailButton>
        <MaterialIcons name="email" size={20} color="black" />
        <Text style={{ textAlign: 'center' }}>Email</Text>
      </EmailButton>
      <Text style={{ color: theme.colors.white }}>
        By signing up, you agree to our{' '}
        <Link href={'/'} style={{ color: theme.colors.linkTextSecondary }}>
          Terms of use
        </Link>{' '}
        as well as our{' '}
        <Link href={'/'} style={{ color: theme.colors.linkTextSecondary }}>
          Privacy
        </Link>{' '}
        and{' '}
        <Link href={'/'} style={{ color: theme.colors.linkTextSecondary }}>
          Cookies Policy
        </Link>
      </Text>

      <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Line style={{ backgroundColor: theme.colors.white }} />
      </Box>

      <Text style={{ color: theme.colors.white }}>
        Already have an account?{' '}
        <Link href={'/'} style={{ color: theme.colors.linkTextSecondary }}>
          Sign in
        </Link>
      </Text>
    </Box>
  );
}
