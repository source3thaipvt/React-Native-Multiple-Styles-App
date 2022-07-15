import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import HeaderApp from '../../component/Header'
import sizes from '../../../res/sizes'
import images from '../../../res/images';
import colors from '../../../res/colors';
import TextViewBase from '../../../components/TextViewBase';
import AppContainer, {ScreenName} from '../base/AppContainer';
import NavigationService from '../base/NavigationService';
const DataMultiple = [
  {
    id: '0',
    title: 'React Native Color',
    type: '',
    screenName: ScreenName.SPLASH
  },
  {
    id: '1',
    title: 'React Native Color',
    type: '',
    screenName: ScreenName.SPLASH
  },
  {
    id: '2',
    title: 'React Native Color',
    type: '',
    screenName: ScreenName.SPLASH
  },
  {
    id: '3',
    title: 'React Native Color',
    type: '',
    screenName: ScreenName.SPLASH
  }
]
const SwitchScreen = (data: any) =>{
  switch (data?.screenName) {
    case ScreenName.SPLASH:
      NavigationService.navigate(ScreenName.SPLASH)
      // console.log('la no chinh no con gi nuwa');
      break;
    default:
      break;
  }
}
const Item = ({props}: any) => {
  return (
    <TouchableOpacity style={styles.item} onPress={()=>{SwitchScreen(props)}}>
      <TextViewBase title={props?.title ?? 'Cai nay la rong rong va rong'}
        style={{
          fontSize: sizes._22sdp,
          color: colors._color_white,
        }} />
    </TouchableOpacity>
  )
}

const MultipleStylesApp = (props: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderApp style={{ backgroundColor: '#FF4500d9' }} title={'Multiple Styles App'}/>
      <FlatList
        data={DataMultiple}
        renderItem={({item}) => <Item props={item} onPress={()=>{SwitchScreen(item)}} />}
        keyExtractor={item => item.id}
        style={{ flex: 1, marginTop: sizes._header_height * 1.3 , width: sizes._screen_width}}
      />
    </View>
  )
}

export default MultipleStylesApp

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

})