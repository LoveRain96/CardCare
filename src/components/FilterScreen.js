import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {initCategory, defaultStatus} from '../constants/InitialData';

const FilterScreen = props => {
  const [status, setNewStatus] = useState(defaultStatus);
  const [listTag, setNewListTag] = useState(initCategory);
  const [onDone, setOnDone] = useState([]);
  useEffect(() => {
    props.navigation.setParams({
      onSuccess,
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);
  const onSuccess = useCallback(() => {
    let onSelect = status
      .filter(item => item.checked)
      .concat(listTag.filter(item => item.checked));
    setOnDone(onDone.push(...onSelect));
    console.log(onDone);
  }, [listTag, onDone, status]);
  const onSelect = useCallback(
    (select, index) => {
      let newStatus = [...status];
      if (select.key !== 'all') {
        newStatus[0].checked = false;
      }
      newStatus[index].checked = !newStatus[index].checked;
      setNewStatus(newStatus);
    },
    [status],
  );
  const onSelectCategory = useCallback(
    (category, index) => {
      let newCategory = [...listTag];
      newCategory[index].checked = !newCategory[index].checked;
      setNewListTag(newCategory);
    },
    [listTag],
  );
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <Icon
            name={'line-chart'}
            style={{paddingRight: 5}}
            color={'#2089dc'}
            size={18}
          />
          <Text style={{color: '#fff'}}>Status</Text>
        </View>
        <View
          style={{flexWrap: 'wrap', flexDirection: 'row', paddingBottom: 5}}>
          {status.map((item, index) => {
            return (
              <Button
                key={item.key}
                onPress={() => onSelect(item, index)}
                style={{maxWidth: 150, paddingRight: 5, paddingBottom: 5}}
                title={item.title}
                titleStyle={{color: '#fff'}}
                type={item.checked ? 'solid' : 'outline'}
              />
            );
          })}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <Icon
            style={{color: '#2089dc', paddingRight: 5}}
            size={18}
            name={'hashtag'}
          />
          <Text style={{color: '#fff'}}>Category</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {listTag.map((item, key) => (
            <Button
              key={item.key}
              onPress={() => onSelectCategory(item, key)}
              style={{
                maxWidth: 150,
                paddingRight: 5,
                paddingBottom: 5,
              }}
              titleStyle={{color: '#fff'}}
              title={item.title}
              type={item.checked ? 'solid' : 'outline'}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#212121',
    paddingTop: 10,
    width: '100%',
    height: '100%',
  },
  header: {
    padding: 8,
  },
});

FilterScreen.navigationOptions = ({navigation}) => {
  const {params = {}} = navigation.state;
  return {
    headerStyle: {
      backgroundColor: '#212121',
      // borderBottomWidth: 0,
      borderBottom: '1px solid #504848',
    },
    headerRight: (
      <Text
        onPress={params.onSuccess}
        style={{color: '#2089dc', fontSize: 18, paddingRight: 10}}>
        Done
      </Text>
    ),
  };
};

export default FilterScreen;
