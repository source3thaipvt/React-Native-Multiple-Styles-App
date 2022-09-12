import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { StylesApp } from '../../common/Constant'
import sizes from '../../res/sizes'
import images from '../../res/images'
import colors from '../../res/colors'

const PageView = (props: any) => {
  return (
    <SafeAreaView>
      <View style={{
        width: '100%',
        height: '100%',
        // flex: 1,

        backgroundColor: '#fff',
      }}>
        <ImageBackground
          source={props.imageBackgroud ?? { uri: props.imageBackgroud }}
          style={{
            // width: '100%',
            // height: '100%',
            flex: 1,
            // position: 'absolute',
            // top: 0,
            // right: 0,
            // bottom: 0,
            // left: 0,
            paddingTop: sizes._statusbar_height,
          }}
          resizeMode="cover"
          resizeMethod="resize"
        >
          <View style={{
            backgroundColor: colors._color_pink_tranparent_5,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}></View>
          {props.children}
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default PageView
