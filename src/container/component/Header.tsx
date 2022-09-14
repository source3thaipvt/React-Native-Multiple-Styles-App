import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TextViewBase from '../../components/TextViewBase';
import colors from '../../res/colors';
import images from '../../res/images';
import sizes from '../../res/sizes';
import NavigationService from '../screens/base/NavigationService';

const HeaderApp = (props: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingTop: sizes._statusbar_height,
        position: 'absolute',
        height: sizes._header_height + sizes._statusbar_height,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: props?.style?.backgroundColor ?? '#003F91'
      }}>
      {props?.isIconLeft &&
        <TouchableOpacity
          style={{ alignSelf: 'center', position: 'absolute', paddingTop: sizes._statusbar_height }}
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
              tintColor: colors._text_white,
            }}
            resizeMode={'center'}></Image>
        </TouchableOpacity>
      }
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}>
        <TextViewBase title={props?.title ?? ''}
          style={{
            fontSize: sizes._22sdp,
            color: colors._text_white,

          }} />
      </View>
    </View>
  );
};
export default HeaderApp;
