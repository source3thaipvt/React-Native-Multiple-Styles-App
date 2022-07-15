import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import colors from '../../res/colors';
import images from '../../res/images';
import sizes from '../../res/sizes';
import NavigationService from '../screens/base/NavigationService';

const HeaderApp = (props: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        top: sizes._statusbar_height,
        position: 'absolute',
        height: sizes._header_height,
        width: '100%',
        flexDirection: 'row',
        // backgroundColor:'red'
      }}>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => {
          if (props?.goBack) {
            props?.goBack();
          } else {
            navigation?.goBack();
          }
        }}>
        <Image
          source={images.ic_back_black}
          style={{
            height: sizes._45sdp,
            width: sizes._45sdp,
            tintColor: colors._color_gray5,
          }}
          resizeMode={'center'}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default HeaderApp;
