import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { Link } from 'expo-router';
import { View, Text, useColorScheme, StyleSheet } from 'react-native';

import {
  Title,
  SignText,
  GoogleLinkButton,
  LinkButton,
  EmailButton,
} from '../../src/components/index.styles';

export default function IndexComponent() {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <>
      <View
        style={[
          styles.container,
          isDarkTheme
            ? { backgroundColor: 'black' }
            : { backgroundColor: 'white' },
        ]}>
        <View style={{ alignSelf: 'flex-start' }}>
          <AntDesign
            name="arrowleft"
            size={24}
            style={isDarkTheme ? { color: 'white' } : { color: 'black' }}
          />
        </View>

        <Title style={isDarkTheme ? { color: 'white' } : { color: 'black' }}>
          Welcome to TradingBell
        </Title>
        <SignText style={isDarkTheme ? { color: 'white' } : { color: 'black' }}>
          Sign up with
        </SignText>
        <GoogleLinkButton>
          <AntDesign
            name="google"
            size={20}
            style={isDarkTheme ? { color: 'white' } : { color: 'black' }}
          />
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
            style={[
              { flex: 1, height: 1 },
              isDarkTheme
                ? { backgroundColor: 'white' }
                : { backgroundColor: 'black' },
            ]}
          />
          <View>
            <Text
              style={[
                { width: 50, textAlign: 'center' },
                isDarkTheme ? { color: 'white' } : { color: 'black' },
              ]}>
              or
            </Text>
          </View>
          <View
            style={[
              { flex: 1, height: 1 },
              isDarkTheme
                ? { backgroundColor: 'white' }
                : { backgroundColor: 'black' },
            ]}
          />
        </View>

        <EmailButton>
          <MaterialIcons name="email" size={20} color="black" />
          <Text style={{ textAlign: 'center' }}>Email</Text>
        </EmailButton>
        <Text style={isDarkTheme ? { color: 'white' } : { color: 'black' }}>
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
            style={[
              { flex: 1, height: 1 },
              isDarkTheme
                ? { backgroundColor: 'white' }
                : { backgroundColor: 'black' },
            ]}
          />
        </View>

        <Text style={isDarkTheme ? { color: 'white' } : { color: 'black' }}>
          Already have an account?{' '}
          <Link href={'/'} style={{ color: 'blue' }}>
            Sign in
          </Link>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    gap: 16,
  },
});
