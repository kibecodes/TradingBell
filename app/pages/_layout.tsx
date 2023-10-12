import { Stack } from 'expo-router';

export default function stackScreen() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          title: 'Login Page',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: 'Register',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
