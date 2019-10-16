import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderLeft from '../../components/HeaderLeft';
import InputSearch from '../../components/InputSearch';
import {ButtonGroup} from 'react-native-elements';

const HomeScreen = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onOpenModal = useCallback(() => {
    props.navigation.navigate('Search');
  }, [props]);
  const updateIndex = useCallback(index => {
    console.log(index);
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    props.navigation.setParams({
      onOpenModal,
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 5}}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={['Recommended', 'All', 'Updated']}
          containerStyle={{
            height: 30,
            borderRadius: 25,
            borderColor: '#2089dc',
          }}
        />
      </View>
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
    width: '100%',
    height: '100%',
  },
});
