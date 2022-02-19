/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation/index';
import { Provider } from 'react-redux'
import { persisTor, rootStore } from './src/store/index';
import { PersistGate } from 'redux-persist/integration/react';
const App =  () => (
  <Provider store={rootStore}>
    <PersistGate loading={null} persistor={persisTor}>
      <Navigation/>
    </PersistGate>
  </Provider>
);

export default App;
