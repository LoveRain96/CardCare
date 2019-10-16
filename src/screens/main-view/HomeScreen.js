import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderLeft from '../../components/HeaderLeft';
import InputSearch from '../../components/InputSearch';

const HomeScreen = props => {
  const onOpenModal = useCallback(() => {
    props.navigation.navigate('Search');
  }, [props]);

  useEffect(() => {
    props.navigation.setParams({
      onOpenModal,
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => {
  const {params = {}} = navigation.state;
  return {
    headerLeft: <HeaderLeft text={'Card Care'} />,
    headerRight: <InputSearch onOpenModal={params.onOpenModal} />,
  };
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
