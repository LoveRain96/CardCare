import React, {useEffect}                               from 'react';
import {ActivityIndicator, StatusBar, View, StyleSheet} from 'react-native';
import {connect}                                        from 'react-redux';

const AuthLoadingScreen = props => {
  useEffect(() => {
    async function fetchData() {
      try {
        props.navigation.navigate(
          props.isLogin ? 'Home' : 'Login',
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
    isLogin: state.auth.isLogin
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
