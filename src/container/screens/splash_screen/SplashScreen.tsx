import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { mobileLoadingService } from '../../../components/Loading';
import images from '../../../res/images';
import sizes from '../../../res/sizes';
import strings from '../../../res/strings';
import UtilsStorage from '../../../utils/UtilsStorage';
import AppContainer, { ScreenName } from '../base/AppContainer';

import BaseComponent, { BaseProps, BaseState } from '../base/BaseComponent';
import NavigationService from '../base/NavigationService';

interface Props extends BaseProps { }

interface State extends BaseState {
  loading?: boolean;
}

export default class SplashScreen extends BaseComponent<Props, State> {
  state = {
    loading: true,
  };

  timeStart: moment.Moment = moment();
  _startCountdownTime() {
    setTimeout(() => {
      this.setState({ loading: false }, () => {
        this.onFinish();
      });
    }, 1000);
  }

  _initData = async (isGoToHome?: boolean) => {
    mobileLoadingService.loading = false;
  };
  async componentDidMount() {
    let language = await UtilsStorage.get('language');
    strings.setLanguage(language)
  }
  async componentWillMount() {
    await AsyncStorage.setItem('IS_HOME', 'true');
    this._startCountdownTime();
  }
  onFinish = async () => {
    NavigationService.reset(ScreenName.LOGINSCREEN)
  };
  componentWillUnmount = () => { };

  render() {
    return (
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
        imageStyle={{ resizeMode: 'stretch' }}
        resizeMode={'stretch'}
        source={images._splash}></ImageBackground>
    );
  }
}
