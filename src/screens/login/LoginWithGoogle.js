import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from 'react-native-google-signin';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';

import {setProfile} from '../../actions/authAction';

function LoginWithGoogle(props) {
  const signIn = useCallback(async () => {
    try {
      await GoogleSignin.configure({
        iosClientId:
          '768242723090-e08rkmr6jkup2ukt5h0ls2onnpke54fr.apps.googleusercontent.com',
        webClientId:
          '768242723090-pc30enmnjbjpk0orf76ctu5j0nlkjvcd.apps.googleusercontent.com',
        offlineAccess: false,
        hostedDomain: '', // specifies a hosted domain restriction
        loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
        accountName: '', // [Android] specifies an account name on the device that should be used
      });
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

      let profile = JSON.stringify(firebaseUserCredential.user.toJSON());
      props.profile(profile);
      props.navigation.navigate('Home');
    } catch (error) {
      props.navigation.navigate('Login');
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }, []);

  return (
    <GoogleSigninButton
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
      disabled={false}
    />
  );
}

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
)(LoginWithGoogle);
