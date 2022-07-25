import PushNotification from 'react-native-push-notification';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import moment from 'moment';
import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Text,
  DeviceEventEmitter,
  LogBox,
  View,
} from 'react-native';
import { Loading, mobileLoadingService } from '../../../components/Loading';
import AppContainer from './AppContainer';
import NavigationService from './NavigationService';

import RootView from './RootView';

// thời gian lấy lại token của app là 55 phút
const TIME_INTERVAL_REQUEST = 55 * 60 * 1000;
// thời gian giới hạn lấy lại token là 60 phút.
const TIMEOUT_TOKEN = 60 * 60 * 1000;
// Thời gian lấy lại token cho thông tin lương, thông tin vào ra là 5 phút.
const TTNS_TIMEOUT_TOKEN = 5 * 60;
// Thời gian khi pause app vào lại không cần login 5 phút
const TIME_APP_PAUSE = 5 * 60;

// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);

/**********************************************************************************************************************
 * Using to assign console.log to nothing on production mode
 **********************************************************************************************************************/
if (!__DEV__) {
  console.log = () => { };
}


interface Props { }


class App extends Component<Props> {

  state = {

  };



  render() {

    return (

      <RootView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <NavigationContainer
          ref={ref => {
            if (ref) {
              NavigationService.setTopLevelNavigator(ref);
            }
          }}
        >
          <AppContainer />
        </NavigationContainer>

        <Loading
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

      </RootView>

    );
  }
}

export default App;
