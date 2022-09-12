import { createStackNavigator } from '@react-navigation/stack';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from '../splash_screen/SplashScreen';
import MultipleStylesApp from '../multiple_styles_app';
import ChartWithRNSkia, { DrawingsRNSkia, HuesRNSkia, StockPointRNSkia } from '../chart_with_rn_skia';
import LoginScreen from '../login_screen/LoginScreen';

export enum ScreenName {
  SPLASH = 'SplashScreen',
  LOGINSCREEN = 'LoginScreen',
  MULTIPLESTYLESAPP = 'MultipleStylesApp',
  CHARTWITHRNSKIA = 'ChartWithRNSkia',
  DRAWINGSRNSKIA = 'DrawingsRNSkia',
  HUESKIARNSKIA = 'HuesRNSkia',
  STOCKPOINTRNSKIA = 'StockPointRNSkia',
  
}
const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
  {
    SplashScreen: { screen: SplashScreen },
    MultipleStylesApp: { screen: MultipleStylesApp },
    ChartWithRNSkia: { screen: ChartWithRNSkia },
    DrawingsRNSkia: { screen: DrawingsRNSkia },
    HuesRNSkia: { screen: HuesRNSkia },
    StockPointRNSkia: { screen: StockPointRNSkia },
    LoginScreen: {screen: LoginScreen}
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
