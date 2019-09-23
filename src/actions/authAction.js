export const SETPROFILE = 'SETPROFILE';
export const LOGOUT = 'LOGOUT';
export function setProfile(userProfile) {
  return {
    type: SETPROFILE,
    userProfile,
  };
}

export function logOut() {
  return{
    type :LOGOUT
  }
}