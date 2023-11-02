import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Header } from '../src/components/Header';
import { Box, Text } from '../src/components/theme';


export default function Root() {
  return (
      <Box style={styles.container}>
        <Header/>
        <Link href={'/home/welcome'}>
          <Text>HOME</Text>
        </Link>
        <Link href={'/screens/alerts/alerts'}>
          <Text>My Portfolio</Text>
        </Link>
      </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'mainBackground'
  },
});
