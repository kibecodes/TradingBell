import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';

import { Box, Text } from '../../src/components/theme';
import {
  Title,
  SignText,
  GoogleLinkButton,
  LinkButton,
  EmailButton,
} from '../../src/components/welcome.styles';

export default function WelcomeScreen() {
  return (
    <Box
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'mainBackground',
      }}>
      <Box style={{ alignSelf: 'flex-start' }}>
        <AntDesign name="arrowleft" size={24} style={{ color: 'mainBackground' }} />
      </Box>

      <Title style={{ color: 'mainBackground' }}>Welcome to TradingBell</Title>
      <SignText style={{ color: 'mainBackground' }}>Sign up with</SignText>
      <GoogleLinkButton>
        <AntDesign name="google" size={20} style={{ color: 'mainBackground' }} />
        <Text style={{ textAlign: 'center', alignContent: 'center' }}>
          Google
        </Text>
      </GoogleLinkButton>
      <Box
        style={{
          flexDirection: 'row',
          gap: 4,
        }}>
        <LinkButton>
          <FontAwesome name="facebook-square" size={20} color="mainBackground" />
        </LinkButton>
        <LinkButton>
          <AntDesign name="twitter" size={20} color="mainBackground" />
        </LinkButton>
        <LinkButton>
          <FontAwesome name="linkedin-square" size={20} color="mainBackground" />
        </LinkButton>
        <LinkButton>
          <FontAwesome5 name="yahoo" size={20} color="mainBackground" />
        </LinkButton>
        <LinkButton>
          <FontAwesome5 name="apple-alt" size={20} color="mainBackground" />
        </LinkButton>
      </Box>

      <Box style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Box
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'mainBackground',
          }}
        />
        <Box>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: 'mainBackground',
            }}>
            or
          </Text>
        </Box>
        <Box
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'mainBackground',
          }}
        />
      </Box>

      <EmailButton>
        <MaterialIcons name="email" size={20} color="mainBackground" />
        <Text style={{ textAlign: 'center' }}>Email</Text>
      </EmailButton>
      <Text style={{ color: 'black' }}>
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
            backgroundColor: 'mainBackground',
          }}
        />
      </Box>

      <Text style={{ color: 'mainBackground' }}>
        Already have an account?{' '}
        <Link href={'/'} style={{ color: 'blue' }}>
          Sign in
        </Link>
      </Text>
    </Box>
  );
}
