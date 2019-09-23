import React, {useEffect, useState} from 'react';
import AsyncStorage                 from '@react-native-community/async-storage';
import {GoogleSignin}               from 'react-native-google-signin';

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUser]         = useState({});

  useEffect(() => {
    async function fetchData() {
      let user = await AsyncStorage.getItem('user');
      if(user) {
        setIsLoggedIn(true)
      }
    }
    fetchData();
  }, [isLoggedIn]);


  async function profile(user) {
    const profile = await AsyncStorage.setItem('user', user);
    console.log('2', profile);
    return setUser(profile)
  }
  return {isLoggedIn, userProfile, profile};
}

export default useAuth;