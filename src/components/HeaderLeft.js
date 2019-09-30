import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeaderLeft = (props: {text: string, customStyle?: Object}) => {
  return (
    <Text style={[styles.headerLeft, props.customStyle]}>{props.text}</Text>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    color: 'rgb(184,45,85)',
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10,
  },
});
export default HeaderLeft;
