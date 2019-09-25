import {REHYDRATE} from 'redux-persist';
import {LOGOUT, SETPROFILE} from '../actions/authAction';

const INITIAL_STATE = {
  profile: null,
  isLogin: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        ...action.payload.auth,
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
      return state;
  }
};

export default AuthReducer;
