import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Card(props) {
  return (
    <View style={styles.container}>
      <Text>CARD</Text>
    </View>
  );
}
Card.navigationOptions = {
  title: 'Card Care',
};
export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
