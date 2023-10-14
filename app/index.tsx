import { Redirect } from 'expo-router';
import { Provider } from 'react-redux';

import  IndexComponent  from './components/index.component'
import store from '../redux/store';

export default function WelcomeScreen() {
  return (
    <>
      <Redirect href={'/pages/portfolio'} />
      <IndexComponent/>
    </>
  );
}
