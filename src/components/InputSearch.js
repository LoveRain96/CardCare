import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const InputSearch = (props: {customIcon?: Object}) => {
  return (
    <View>
      <Text style={styles.body}>
        <Ionicons
          style={[styles.icon, props.customIcon]}
          name={'search'}
          size={25}
        />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    paddingRight: 15,
  },
  icon: {},
});
export default InputSearch;
