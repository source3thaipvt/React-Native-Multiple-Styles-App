import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import HeaderApp from '../../component/Header'
import sizes from '../../../res/sizes'
import images from '../../../res/images';
import colors from '../../../res/colors';
import TextViewBase from '../../../components/TextViewBase';
import AppContainer, { ScreenName } from '../base/AppContainer';
import NavigationService from '../base/NavigationService';
import { StylesApp } from '../../../common/Constant';
import ItemListApp from '../../component/ItemListApp';
import { DataMultiple } from './Dummy';
import PageView from '../../component/PageView';
const SwitchScreen = (data: any) => {
  switch (data?.screenName) {
    case 'CHARTWITHRNSKIA':
      NavigationService.navigate(ScreenName.CHARTWITHRNSKIA, data)
      break;
    default:
      break;
  }
}
const MultipleStylesApp = (props: any) => {
  const navigation = useNavigation();
  return (
    <PageView>
      <HeaderApp style={{ backgroundColor: '#FF4500d9' }} title={'Multiple Styles App'} />
      <FlatList
        data={DataMultiple}
        renderItem={({ item }) => <ItemListApp props={item} onPress={() => { SwitchScreen(item) }} />}
        keyExtractor={item => item.id}
        style={{ flex: 1, marginTop: sizes._header_height, width: sizes._screen_width }}
      />
    </PageView>
  )
}

export default MultipleStylesApp

const styles = StyleSheet.create({


})