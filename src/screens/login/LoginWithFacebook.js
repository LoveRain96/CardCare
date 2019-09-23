import React, {useCallback} from 'react';
import {Text} from 'react-native-elements';
import {View} from 'react-native';
import {Button} from '../../components/Button';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {loginWithFacebook, setProfile} from '../../actions/authAction';

const LoginWithFacebook = props => {
  const handleClick = useCallback(async () => {
    props.loginWith();
    const login = await LoginManager.logInWithPermissions(['public_profile']);
    if (login.isCancelled) {
    } else {
      let token = await AccessToken.getCurrentAccessToken();
      // await AsyncStorage.setItem('user', token.accessToken.toString());
      props.profile(token.accessToken.toString());
      props.navigation.navigate('Home');
    }
  }, []);
  return (
    <View>
      <Text style={{color: '#fff', fontSize: 28}}>CARD CARE</Text>
      <View style={{backgroundColor: '#4267b2'}}>
        <Button
          styleIcon={{paddingRight: 15}}
          iconName={'facebook'}
          onPress={handleClick}
          textStyle={{color: '#fff'}}
          text={'Sign in with Facebook'}
        />
      </View>
    </View>
  );
};
const mapDispatchToProps = dispatch => ({
  profile: profile => {
    dispatch(setProfile(profile));
  },
  loginWith: () => {
    dispatch(loginWithFacebook());
  },
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginWithFacebook);
