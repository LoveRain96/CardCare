import React, {useCallback} from 'react';
import {StyleSheet, View}   from 'react-native';
import {Button}             from '../components/Button';
import {Text}               from 'react-native-elements';
import AsyncStorage         from '@react-native-community/async-storage';


import {AccessToken, LoginManager} from 'react-native-fbsdk';
import LoginWithGoogle             from './LoginWithGoogle';

function Login(props) {
  const handleClick = useCallback(async () => {
    const login = await LoginManager.logInWithPermissions(['public_profile']);
    if (login.isCancelled) {
    } else {
      let token = await AccessToken.getCurrentAccessToken();
      await AsyncStorage.setItem('user', token.accessToken.toString());
      props.navigation.navigate('Home')
    }
  }, []);

  const handleSignIn = useCallback(() => {
    console.log('sign in');
  }, []);

  const handleSignUp = useCallback(() => {
    console.log('sign up');
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 28}}>
        CARD CARE
      </Text>
      <View style={{backgroundColor: '#4267b2'}}>
        <Button styleIcon={{paddingRight: 15}} iconName={'facebook'} onPress={handleClick}
                textStyle={{color: '#fff'}}
                text={'Sign in with Facebook'}/>
        <LoginWithGoogle/>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(184,45,85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});