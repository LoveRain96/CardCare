export const SETPROFILE = 'SETPROFILE';
export const LOGINWITHFACEBOOK = 'LOGINWITHFACEBOOK';
export const LOGINWITHGMAIL = 'LOGINWITHGMAIL';

export function setProfile(userProfile) {
  return {
    type: SETPROFILE,
    userProfile,
  };
}

export function loginWithFacebook() {
  console.log('render1');
  return {
    type: LOGINWITHFACEBOOK
  }
}

export function loginWithGmail() {
  console.log('render2');
  return {
    type: LOGINWITHGMAIL
  }
}