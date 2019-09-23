import React, {useEffect}                               from 'react';
import {ActivityIndicator, StatusBar, View, StyleSheet} from 'react-native';
import {connect}                                        from 'react-redux';
import isEmpty                                          from 'lodash/isEmpty';
import AsyncStorage                                     from '@react-native-community/async-storage';

const AuthLoadingScreen = props => {
  useEffect(() => {
    async function fetchData() {
      try {
        console.log(props.profile);
        // const a = await AsyncStorage.getItem('user');
        props.navigation.navigate(
          'Login',
        );
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return {
    profile: state.auth.profile,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
