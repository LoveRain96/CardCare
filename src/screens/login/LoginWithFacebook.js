import React, {useCallback} from 'react';
import {Button} from '../../components/Button';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

const LoginWithFacebook = props => {
  const handleClick = useCallback(async () => {
    try {
      const login = await LoginManager.logInWithPermissions(['public_profile']);
      if (login.isCancelled) {
      } else {
        let token = await AccessToken.getCurrentAccessToken();
        const credential = firebase.auth.FacebookAuthProvider.credential(
          token.accessToken,
        );
        const firebaseUserCredential = await firebase
          .auth()
          .signInWithCredential(credential);
        let profile = JSON.stringify(firebaseUserCredential.user.toJSON());
        props.onPressLogin(profile);
      }
    } catch (e) {
      props.onFail(e);
    }
  }, [props]);
  return (
    <Button
      containerStyle={{backgroundColor: '#4267b2'}}
      iconName={'facebook'}
      onPress={handleClick}
      textStyle={{color: '#fff'}}
      text={'Sign in with Facebook'}
    />
  );
};

export default LoginWithFacebook;
