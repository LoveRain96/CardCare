import {
  LOGINWITHFACEBOOK,
  LOGINWITHGMAIL,
  SETPROFILE,
} from '../actions/authAction';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  profile: {},
  loginWithFacebook: false,
  loginWithGmail: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETPROFILE:
      if(state.loginWithFacebook) {
        return {
          ...state,
          profile: action.userProfile,
        };
      }
      return {
        ...state,
        profile: action.userProfile,
      };
    case LOGINWITHFACEBOOK:
      return {
        ...state,
        loginWithFacebook: true,
      };
    case LOGINWITHGMAIL:
      return {
        ...state,
        loginWithGmail: true,
      };
    case 'LOGOUT':
      return {};
    default:
      return {...state};
  }
};

export default AuthReducer;
