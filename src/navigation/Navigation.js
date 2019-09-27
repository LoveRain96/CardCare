import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {card, help, home, login, authLoadingScreen} from '../screens';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: login,
    navigationOptions: {
      header: null,
    },
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
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let Icon = IconEntypo;
        if (routeName === 'Home') {
          return <IconComponent name={'home'} size={25} color={tintColor} />;
        } else if (routeName === 'Card') {
          return <IconComponent name={'vcard'} size={25} color={tintColor} />;
        } else {
          return <Icon name={'help'} size={25} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: authLoadingScreen,
    Login: LoginNavigator,
    Screen: ScreenNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  icon: {},
});
