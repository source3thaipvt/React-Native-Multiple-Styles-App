/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/container/screens/base/App';
import { name as appName } from './app.json';
import Storybook from './storybook';

if (__DEV__) {
    import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => Storybook);
