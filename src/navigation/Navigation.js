import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';

import Login from '../screens/login/Login';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import HomeNavigation from './HomeNavigation/HomeNavigation';
import CardNavigation from './CardNavigation/CardNavigation';
import HelpNavigation from './HelpNavigation/HelpNavigation';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

// const DrawerNavigation = createDrawerNavigator(
//   {
//     Bars: {
//       screen: Bars,
//     },
//   },
//   {
//     drawerPosition: 'right',
//     contentComponent: Bars,
//   },
// );

const ScreenNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigation,
    },
    Card: {
      screen: CardNavigation,
    },
    Help: {
      screen: HelpNavigation,
    },
    Profile: {
      screen: ProfileNavigation,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // tabBarLabel: ({focused, tintColor}) => {
      //   const {routeName} = navigation.state;
      //   if (routeName === 'Bars') {
      //     return <Text />;
      //   } else {
      //     return <Text>{routeName}</Text>;
      //   }
      // },
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let Icon = IconEntypo;
        if (routeName === 'Home') {
          return <IconComponent name={'home'} size={25} color={tintColor} />;
        } else if (routeName === 'Card') {
          return <IconComponent name={'vcard'} size={25} color={tintColor} />;
        } else if (routeName === 'Profile') {
          return <IconComponent name={'user'} size={25} color={tintColor} />;
        } else {
          return <Icon name={'help'} size={25} color={tintColor} />;
        }
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      },
    }),
  },
);

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
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
