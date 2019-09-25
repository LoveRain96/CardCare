import React              from 'react';
import {StyleSheet, View} from 'react-native';
import {Text}             from 'react-native-elements';
import {getBottomSpace} from 'react-native-iphone-x-helper'

import LoginWithGoogle    from './LoginWithGoogle';
import LoginWithFacebook from './LoginWithFacebook';

function Login(props) {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={{color: '#fff', fontSize: 28}}>CARD CARE</Text>
      </View>
      <View style={{flex: 1}}>
        <LoginWithFacebook {...props} />
        <LoginWithGoogle {...props} />
      </View>
      <View style={styles.bottom}><Text style={{color: '#fff'}}>Copyright@ by </Text></View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgb(184,45,85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    paddingTop:15
  },
  bottom: {
    paddingBottom: getBottomSpace(),
  }
});
