import {createStackNavigator} from 'react-navigation-stack';
import ModalFullScreen from '../../components/ModalFullScreen';
import {getConfig} from '../untils';
import Card from '../../screens/Card';
const MODAL_ROUTES = ['Search'];

const CardNavigation = createStackNavigator(
  {
    Card: {
      screen: Card,
    },
    Search: {
      screen: ModalFullScreen,
    },
  },
  {
    transitionConfig: getConfig(MODAL_ROUTES),
  },
);

export default CardNavigation;
