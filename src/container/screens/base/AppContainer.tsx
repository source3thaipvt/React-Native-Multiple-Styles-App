import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../splash_screen/SplashScreen';
import MultipleStylesApp from '../multiple_styles_app'

export enum ScreenName {
  SPLASH = 'SplashScreen',
  MULTIPLESTYLESAPP = 'MultipleStylesApp'
}
const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    SplashScreen: {screen: SplashScreen},
    MultipleStylesApp : {screen : MultipleStylesApp}
  },
  {
    headerMode: 'none',
    initialRouteName: ScreenName.SPLASH,
  },
);

/**********************************************************************************************************************************
 *
 * Implement switch navigator
 *
 **********************************************************************************************************************************/

const switchNavigator = createSwitchNavigator(
  {
    AppNavigator: AppNavigator,
  },
  {
    initialRouteName: 'AppNavigator',
  },
);

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;
