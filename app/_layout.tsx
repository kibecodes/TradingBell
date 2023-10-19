import { Stack } from 'expo-router';

export default function LayoutScreen() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="screens"
        options={{
          title: 'Screens',
        }}
      />
    </Stack>
  );
}
