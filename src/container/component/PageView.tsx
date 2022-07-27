import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StylesApp } from '../../common/Constant'
import sizes from '../../res/sizes'

const PageView = (props: any) => {
  return (
    <SafeAreaView>
      <View style={{
        width: '100%',
        height: '100%',
        // flex: 1,
        marginTop: sizes._statusbar_height,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
        {props.children}
      </View>
    </SafeAreaView>
  )
}

export default PageView