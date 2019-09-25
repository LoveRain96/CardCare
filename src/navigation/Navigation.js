import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {
  card, help, home, login, authLoadingScreen
} from '../screens';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      header: null
    }
  },
});
const ScreenNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: home,
    },
    Card: {
      screen: card,
    },
    Help: {
      screen: help,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  AuthLoading: authLoadingScreen,
  Login: LoginNavigator,
  Screen: ScreenNavigator,
}, {
  initialRouteName: 'AuthLoading',
});

export default createAppContainer(AppNavigator);
