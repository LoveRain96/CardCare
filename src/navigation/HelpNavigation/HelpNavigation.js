import {createStackNavigator} from 'react-navigation-stack';
import ModalFullScreen from '../../components/ModalFullScreen';
import {getConfig} from '../untils';
import Help from '../../screens/Help';
const MODAL_ROUTES = ['Search'];

const HelpNavigation = createStackNavigator(
  {
    Help: {
      screen: Help,
    },
    Search: {
      screen: ModalFullScreen,
    },
  },
  {
    transitionConfig: getConfig(MODAL_ROUTES),
  },
);

export default HelpNavigation;
