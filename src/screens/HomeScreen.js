import React                    from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScanCard                 from '../components/ScanCard';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text>SCAN CARD</Text>
      <ScanCard/>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
