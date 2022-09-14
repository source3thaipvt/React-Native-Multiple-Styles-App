// if you use expo remove this line
import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
// import {name as appName} from '../app.json';
// import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
// AppRegistry.registerComponent(appName, () => StorybookUIRoot);
const Storybooks = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
      <StatusBar backgroundColor={'#999999'}/>
      <StorybookUIRoot />
    </SafeAreaView>
  )
}
export default Storybooks;
