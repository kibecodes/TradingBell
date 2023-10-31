import { Link } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function Root() {
  return (
    <View style={styles.container}>
      <Link href={'/home/welcome'}>
        <Text>HOME</Text>
      </Link>
      <Link href={'/screens/alerts/alerts'}>
        <Text>My Portfolio</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});
