import React, {useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Button, ListItem, SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {initCategory, data} from '../constants/InitialData';

const ModalFullScreen = props => {
  const [value, setValue] = useState('');
  const updateSearch = useCallback(name => {
    setValue(name);
  }, []);
  const onCancel = useCallback(() => {
    setValue('');
  }, []);
  const onPressHint = useCallback(hint => {
    console.log(hint);
  }, []);

  const onFilterCondition = useCallback(() => {
    props.navigation.navigate('Filter');
  }, [props.navigation]);
  const onSelectCategory = useCallback(category => {
    console.log(category);
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <View>
              <SearchBar
                autoFocus={true}
                platform={'ios'}
                placeholder="Type Here..."
                onChangeText={updateSearch}
                inputStyle={{color: '#fff'}}
                inputContainerStyle={{backgroundColor: '#504848'}}
                containerStyle={{backgroundColor: '#212121'}}
                value={value}
                showCancel={true}
                cancelButtonProps={{color: '#2089dc'}}
                round={true}
                onCancel={onCancel}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 5,
              }}>
              <View>
                <Text style={{color: '#fff'}}>Nearly</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{color: 'red'}}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                paddingBottom: 5,
              }}>
              {data.map(item => (
                <Button
                  key={item.key}
                  onPress={() => onPressHint(item)}
                  style={{maxWidth: 150, paddingRight: 5, paddingBottom: 5}}
                  title={item.title}
                  titleStyle={{color: '#fff'}}
                  type="outline"
                />
              ))}
            </View>
            <View>
              <Text style={{color: '#fff', paddingBottom: 5}}>Filter</Text>
              <TouchableOpacity onPress={onFilterCondition}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingRight: 5,
                    paddingBottom: 10,
                  }}>
                  <Icon size={20} color={'#2089dc'} name="filter" />
                  <Text style={{color: '#2089dc'}}>
                    {' '}
                    Setting condition filter
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{color: '#fff'}}>Filter by category</Text>
              {initCategory.map(item => {
                return (
                  <ListItem
                    onPress={() => onSelectCategory(item)}
                    key={item.key}
                    title={item.title}
                    chevron
                    titleStyle={{color: '#fff'}}
                    containerStyle={{backgroundColor: '#212121'}}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#212121',
    width: '100%',
    height: '100%',
  },
  header: {
    padding: 8,
  },
  scrollView: {},
});

ModalFullScreen.navigationOptions = ({navigation}) => {
  const {params = {}} = navigation.state;
  return {
    headerStyle: {
      backgroundColor: '#212121',
      // borderBottomWidth: 0,
      borderBottom: '1px solid #504848',
    },
  };
};
export default ModalFullScreen;
