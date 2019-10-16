import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../../screens/main-view/HomeScreen';
import ModalFullScreen from '../../components/ModalFullScreen';
import {getConfig} from '../untils';
import FilterScreen from '../../components/FilterScreen';
const MODAL_ROUTES = ['Search, Filter'];

const HomeNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: ModalFullScreen,
    },
    Filter: {
      screen: FilterScreen,
    },
  },
  {
    transitionConfig: getConfig(MODAL_ROUTES),
  },
);

export default HomeNavigation;
