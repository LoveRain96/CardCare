import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../actions/authAction';
import {GoogleSignin} from 'react-native-google-signin';
function Help(props) {
  const handleLogout = useCallback(async () => {
    props.logOut();
    //Gmail logout
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    props.navigation.navigate('Login');
  }, []);

  //GMail
  // await GoogleSignin.revokeAccess();
  // await GoogleSignin.signOut();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
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
