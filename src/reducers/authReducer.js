import {
  LOGOUT,
  SETPROFILE,
} from '../actions/authAction';
import { REHYDRATE } from 'redux-persist';

const INITIAL_STATE = {
  profile: null,
  isLogin: false
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        ...action.payload.auth
      };

    case SETPROFILE:
      return {
        ...state,
        isLogin: true,
        profile: action.userProfile,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return {...state};
  }
};

export default AuthReducer;
