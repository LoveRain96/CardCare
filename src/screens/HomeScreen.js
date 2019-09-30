import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderLeft from '../components/HeaderLeft';
import InputSearch from '../components/InputSearch';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SCAN CARD</Text>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerLeft: <HeaderLeft text={'Card Care'} />,
  headerRight: <InputSearch />,
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
