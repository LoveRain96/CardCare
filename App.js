/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React        from 'react';
import {
  StyleSheet,
}                   from 'react-native';
import AppNavigator from "./src/navigation/Navigation";

const App = () => {
  return (
      <AppNavigator/>
  );
};

const styles = StyleSheet.create({
  hello: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
