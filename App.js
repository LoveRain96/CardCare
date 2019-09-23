/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React          from 'react';
import {
  StyleSheet,
}                     from 'react-native';
import {PersistGate}  from 'redux-persist/es/integration/react';
import {Provider}     from 'react-redux';

import configureStore from './src/store/configureStore';
import AppNavigator   from './src/navigation/Navigation';


const {persistor, store} = configureStore();
const App          = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <AppNavigator/>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
