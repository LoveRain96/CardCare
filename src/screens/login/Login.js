import React              from 'react';
import {StyleSheet, View} from 'react-native';
import LoginWithGoogle    from './LoginWithGoogle';
import LoginWithFacebook  from './LoginWithFacebook';

function Login(props) {
  return (
    <View style={styles.container}>
      <LoginWithFacebook {...props} />
      <LoginWithGoogle {...props} />
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
