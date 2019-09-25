// @flow
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Button(props: {
  onPress: any,
  iconName?: string,
  textStyle?: Object,
  containerStyle?: Object,
  text: string,
  styleIcon?: any,
}) {
  return (
    <TouchableOpacity style={{width: '100%'}} onPress={props.onPress}>
      <View style={[styles.container, props.containerStyle]}>
        {props.iconName && (
          <Icon
            style={[styles.icon, props.styleIcon]}
            name={props.iconName}
            size={20}
            color="white"
          />
        )}
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  icon: {
    paddingRight: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
});
