import * as React from 'react';
import useAuth    from './useAuth';

const AuthContext = React.createContext({});

const AuthProvider = ({children}) => {
  const {isLoggedIn, userProfile, profile} = useAuth();
  console.log('trigger');
  return <AuthContext.Provider value={{
    isLoggedIn: true,
    userProfile: {},
    profile,
  }}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthProvider};
