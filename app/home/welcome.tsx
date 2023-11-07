import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';

import { Box, Text, useTheme } from '../../src/components/theme';
import {
  Title,
  SignText,
  GoogleLinkButton,
  LinkButton,
  EmailButton,
} from '../../src/components/welcome.styles';

export default function WelcomeScreen() {
  const theme = useTheme();
  return (
    <Box
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: theme.colors.mainBackground,
      }}>
      <Box style={{ alignSelf: 'flex-start' }}>
        <AntDesign name="arrowleft" size={24} style={{ color: 'white' }} />
      </Box>

      <Title style={{ color: theme.colors.white }}>Welcome to TradingBell</Title>
      <SignText style={{ color: theme.colors.white }}>Sign up with</SignText>
      <GoogleLinkButton>
        <AntDesign name="google" size={20} style={{ color: 'black' }} />
        <Text style={{ alignSelf: 'center', color: theme.colors.black }}>
          Google
        </Text>
      </GoogleLinkButton>
      <Box
        style={{
          flexDirection: 'row',
          gap: 4,
        }}>
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
        <Box
          style={{
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.mainBackground,
          }}
        />
        <Box>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: theme.colors.white,
            }}>
            or
          </Text>
        </Box>
        <Box
          style={{
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.mainBackground,
          }}
        />
      </Box>

      <EmailButton>
        <MaterialIcons name="email" size={20} color="black" />
        <Text style={{ textAlign: 'center' }}>Email</Text>
      </EmailButton>
      <Text style={{ color: theme.colors.white }}>
        By signing up, you agree to our{' '}
        <Link href={'/'} style={{ color: 'blue' }}>
          Terms of use
        </Link>{' '}
        as well as our{' '}
        <Link href={'/'} style={{ color: 'blue' }}>
          Privacy
        </Link>{' '}
        and{' '}
        <Link href={'/'} style={{ color: 'blue' }}>
          Cookies Policy
        </Link>
      </Text>

      <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Box
          style={{
            flex: 1,
            height: 1,
            backgroundColor: theme.colors.mainForeground,
          }}
        />
      </Box>

      <Text style={{ color: theme.colors.white }}>
        Already have an account?{' '}
        <Link href={'/'} style={{ color: 'blue' }}>
          Sign in
        </Link>
      </Text>
    </Box>
  );
}
