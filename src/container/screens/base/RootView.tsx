import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import _ from 'lodash';

import * as actions from '../../../redux/actions';
import {ENABLE_BANNER, ShowBanner} from '../../../sdk/AdSdk';

interface Props {
  setReduxState: (state: Object) => Promise<void>;
  children: any;
  totalMessUnRead?: number;
}

class RootView extends Component<Props> {
  componentDidMount = () => {};

  componentWillUnmount = () => {};
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
        {ENABLE_BANNER && <ShowBanner />}
      </View>
    );
  }
}
export default RootView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
