import {createStackNavigator} from 'react-navigation-stack';
import ModalFullScreen from '../../components/ModalFullScreen';
import {getConfig} from '../untils';
import Profile from '../../screens/Profile';
const MODAL_ROUTES = ['Search'];

const ProfileNavigation = createStackNavigator(
  {
    Profile: {
      screen: Profile,
    },
    Search: {
      screen: ModalFullScreen,
    },
  },
  {
    transitionConfig: getConfig(MODAL_ROUTES),
  },
);

export default ProfileNavigation;
