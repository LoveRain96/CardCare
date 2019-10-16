import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const Help = props => {
  return (
    <View style={styles.container}>
      <Text>Logout</Text>
    </View>
  );
};
Help.navigationOptions = {
  title: 'Card Care',
};
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
    padding: 10,
  },
});
