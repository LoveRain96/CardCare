import React, {useCallback} from 'react';
import {Text} from 'react-native-elements';
import {View} from 'react-native';
import {Button} from '../../components/Button';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {connect} from 'react-redux';
import {setProfile} from '../../actions/authAction';
import firebase from 'react-native-firebase';

const LoginWithFacebook = props => {
  const handleClick = useCallback(async () => {
    try{
      const login = await LoginManager.logInWithPermissions(['public_profile']);
      if (login.isCancelled) {
      } else {
        let token = await AccessToken.getCurrentAccessToken();
        props.profile(token.accessToken);
        const credential = firebase.auth.FacebookAuthProvider.credential(token.accessToken);
        const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
        let profile =JSON.stringify(firebaseUserCredential.user.toJSON());
        props.profile(profile);
        props.navigation.navigate('Home');
      }
    } catch (e) {
      console.log(e);
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
});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginWithFacebook);
