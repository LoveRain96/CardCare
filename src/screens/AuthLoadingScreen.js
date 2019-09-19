import React, {useEffect}                               from 'react';
import {ActivityIndicator, StatusBar, View, StyleSheet} from 'react-native';
import AsyncStorage                                     from '@react-native-community/async-storage';


const AuthLoadingScreen = (props) => {
  useEffect(() => {
    async function fetchData() {
      try {
        let userToken = await AsyncStorage.getItem('user');
        console.log(userToken);
        props.navigation.navigate(userToken ? 'Screen' : 'Login');
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator/>
      <StatusBar barStyle="default"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;