import React, {useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const InputSearch = props => {
  const onPress = useCallback(() => {
    props.onOpenModal();
  }, [props]);
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          // style={[styles.icon, props.customIcon]}
          name={'search'}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    paddingRight: 15,
  },
  header: {
    alignItems: 'center',
  },
  icon: {},
});
export default InputSearch;
