import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {GoogleSignin} from 'react-native-google-signin';
import {connect} from 'react-redux';

function Help(props) {
  const handleLogout = useCallback(async () => {
    console.log(props);
    if(props.loginWith){
      // await AsyncStorage.clear();
      // props.navigation.navigate('Login');
    }

  }, []);

  const handleLogoutGoogle = useCallback(async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    loginWith: state.auth.loginWithFacebook
      ? state.auth.loginWithFacebook
      : state.auth.loginWithGmail,
  };
};
export default connect(
  mapStateToProps,
  null,
)(Help);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
