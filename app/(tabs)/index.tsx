import { Redirect } from 'expo-router';

import IndexComponent from '../components/index.component';

export default function WelcomeScreen() {
  return (
    <>
      <Redirect href={'/(tabs)/screens/figma'}/>
      <IndexComponent />
    </>
  );
}
