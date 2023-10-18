import { Redirect } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';

import StackScreen from './screens/_layout';
import store from '../redux/store';

export default function index() {
  return (
    <Provider store={store}>
      <Redirect href="/home/welcome" />
      <StackScreen />
    </Provider>
  );
}
