import React, {useCallback}                                  from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage                                          from '@react-native-community/async-storage';


function Help(props) {
  const handleLogout = useCallback(async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <StatusBar barStyle="default"/>
    </View>
  );
}

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
