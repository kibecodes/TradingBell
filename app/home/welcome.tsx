import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

import {
  Title,
  SignText,
  GoogleLinkButton,
  LinkButton,
  EmailButton,
} from '../../src/components/welcome.styles';

export default function WelcomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
      }}>
      <View style={{ alignSelf: 'flex-start' }}>
        <AntDesign name="arrowleft" size={24} style={{ color: 'black' }} />
      </View>

      <Title style={{ color: 'black' }}>Welcome to TradingBell</Title>
      <SignText style={{ color: 'black' }}>Sign up with</SignText>
      <GoogleLinkButton>
        <AntDesign name="google" size={20} style={{ color: 'black' }} />
        <Text style={{ textAlign: 'center', alignContent: 'center' }}>
          Google
        </Text>
      </GoogleLinkButton>
      <View
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
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
          }}
        />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: 'black',
            }}>
            or
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
          }}
        />
      </View>

      <EmailButton>
        <MaterialIcons name="email" size={20} color="black" />
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

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: 'black',
          }}
        />
      </View>

      <Text style={{ color: 'black' }}>
        Already have an account?{' '}
        <Link href={'/'} style={{ color: 'blue' }}>
          Sign in
        </Link>
      </Text>
    </View>
  );
}
