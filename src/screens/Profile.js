import React, {useCallback} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Images from '../constants/Images';
import {typography} from '../styles/typography';
import {logOut} from '../actions/authAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

const Profile = props => {
  let profile = JSON.parse(props.profile);
  console.log(profile);
  const handleLogout = useCallback(async () => {
    props.logOut();
    props.navigation.navigate('Login');
  }, [props]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={
          profile.photoURL
            ? {uri: `${profile.photoURL}?type=large`}
            : Images.Avatar1
        }
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.username}>
          <Text>Username:</Text>
          <Text>{profile.displayName}</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.username}>
          <Text>Total card:</Text>
          <Text>0</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  username: {
    fontSize: typography.fontSizeTitle,
  },
  img: {
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: width / 4,
    borderColor: 'rgb(237,110,99)',
    borderWidth: 1,
  },
  logOutButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
const mapStateToProps = state => {
  return {
    profile: state.auth.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(logOut());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
